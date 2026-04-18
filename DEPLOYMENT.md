# PetProData — Deployment Guide

**Product role**: Privacy-preserving pet identity + medical-records portal. Consumer-facing (pet owners) with secondary portals for vets, boarding, insurers, and research cohorts.
**Current status**: `contracts/petProData.compact` saved locally (not yet pushed). DApp not yet scaffolded.
**Validated against**: `compactc v0.30.0`, pragma `>= 0.16 && <= 0.21`.
**Reference architecture**: `bricktowers/midnight-identity` (same folder-access + credential pattern).

See the master roadmap at `PixyPi/DEPLOYMENT_ROADMAP.md` for ecosystem-wide patterns. This file covers petProData specifics only.

---

## What Makes This Deployment Different

petProData has **multiple audiences with different UX needs**:

| Audience | Portal | Key actions |
|----------|--------|-------------|
| Pet owner | `petprodata.app` | Register pet, grant folder access, set emergency packet, opt into research |
| Veterinarian | `vet.petprodata.app` | Accept access grants, attest records via DIDz.io |
| Boarding / daycare | `boarding.petprodata.app` | Verify rabies compliance at check-in |
| Insurer | `insurance.petprodata.app` | Verify claim-supporting attestations |
| Researcher | `research.petprodata.app` | Query opt-in cohorts + disburse micropayments |

All 5 portals run off the **same contract** + **same DIDz.io integration**. Per-audience UX is thin wrappers around the shared `petpro-api/` SDK.

---

## What Gets Deployed

```
┌─────────────────────────────────────────────────────────────────┐
│ Vercel (free or Pro $20/mo for multiple projects)               │
│  ─ petprodata.app             — owner portal                    │
│  ─ vet.petprodata.app         — vet portal                      │
│  ─ boarding.petprodata.app    — check-in portal (mobile-first)  │
│  ─ insurance.petprodata.app   — claim verification              │
│  ─ research.petprodata.app    — cohort researcher portal        │
└───────────────┬─────────────────────────────────────────────────┘
                │ HTTPS (all call the same backend)
                ▼
┌─────────────────────────────────────────────────────────────────┐
│ VPS / Railway — est. $5-15/mo                                   │
│  ─ proof-server        :6300  (shared across all portals)       │
│  ─ didz-integration    :3001  (bridges petProData ↔ DIDz.io)   │
│  ─ emergency-qr-api    :3002  (generates collar QR codes)       │
│  ─ records-storage     :3003  (encrypted off-chain storage)     │
└───────────────────┬─────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│ Midnight testnet/mainnet + DIDz.io (attestations)               │
└─────────────────────────────────────────────────────────────────┘
```

**Key insight**: petProData doesn't store medical data. It anchors identity + access control. Actual medical records (vaccines, labs, imaging, prescriptions) flow through **DIDz.io `attestToDid`** — so petProData's backend only needs to:
1. Store encrypted record blobs off-chain (the `records-storage` service — S3 or similar)
2. Generate QR codes for emergency packets (the `emergency-qr-api` service)
3. Bridge owner-facing UI to DIDz.io's attestation contracts

---

## Repo Layout (planned)

```
petProData/
├── contracts/                      # ✅ Existing — petProData.compact + README
├── schemas/                        # ✅ Existing — JSON schemas for record types
├── docs/                           # ✅ Existing — SENTINELDID_EMERGENCY_PROTOCOL, EPIC_INTEGRATION_GUIDE, etc.
├── petpro-contract/                # TS bindings + Vitest simulators
├── petpro-api/                     # Shared RxJS SDK (used by all 5 portals)
│   └── src/
│       ├── didz-bridge.ts          # Translates pet actions → DIDz.io calls
│       ├── folder-access.ts
│       └── emergency-packet.ts
├── petpro-ui/                      # OWNER portal (React + MUI + Vite)
├── petpro-vet-ui/                  # VET portal
├── petpro-boarding-ui/             # BOARDING portal (mobile-first PWA)
├── petpro-insurance-ui/            # INSURANCE portal
├── petpro-research-ui/             # RESEARCHER portal
├── emergency-qr-api/               # Node: generates QR codes that link to emergency packets
├── records-storage/                # Node: encrypted off-chain record storage (S3-compatible)
└── petpro-cli/                     # Admin CLI
```

---

## The Off-Chain Records Storage — Not Trivial

This is the one component that doesn't exist in Brick Towers' patterns and needs careful thought:

- **Data**: encrypted record blobs (vaccine PDFs, lab results, imaging). Could be MB-sized.
- **Encryption**: client-side with owner's key. Backend only sees ciphertext + a retrieval token derived from the folder-access grant.
- **Backend**: S3-compatible object store. Options:
  - **AWS S3** + CloudFront (pay per GB, $0.023/GB/mo for standard)
  - **Cloudflare R2** (no egress fees — cheaper if access is frequent)
  - **Backblaze B2** + Cloudflare CDN (cheapest for small operations)
  - **Self-hosted MinIO on the VPS** (flat cost, limited by VPS storage)
- **Auth**: verify folder-access grant on-chain (`hasFolderAccess`) before issuing a pre-signed download URL. 5-minute URL expiry.

**Recommendation for MVP**: Cloudflare R2 + access-gated pre-signed URLs issued by the `records-storage` service. No egress fees means vets can pull records freely. $0.015/GB storage.

---

## Pinned SDK Versions

Same as DIDz.io. See `DIDz-io/DEPLOYMENT.md` for the full table. Use the newer `midnight-js 3.1.0` stack, not the older Brick Towers versions.

---

## Environments

| Env | Network | Portals | Proof server | Records storage |
|-----|---------|---------|--------------|-----------------|
| `local` | Undeployed | `localhost:5173-5177` | `localhost:6300` | Local MinIO |
| `testnet` | TestNet | `*.petprodata.vercel.app` | `proof.petprodata.app` | Cloudflare R2 (testnet bucket) |
| `mainnet` | MainNet | `*.petprodata.app` | `proof.petprodata.app` | Cloudflare R2 (mainnet bucket) |

---

## Frontend Deploy (Vercel — 5 separate projects)

Each portal is its own Vercel project pointing at the same monorepo:

```bash
# petprodata.app (owner)
Root: petpro-ui/
Build: yarn workspace petpro-ui build

# vet.petprodata.app
Root: petpro-vet-ui/
Build: yarn workspace petpro-vet-ui build

# ... (repeat for boarding, insurance, research)
```

**Vercel Pro tier** ($20/mo team plan) supports unlimited projects from one repo + team collaboration. Free tier limits you to personal projects but still works for launch.

### Runtime config (shared across portals)
Each portal loads `/public/config.json` at startup. Same URLs + contract addresses across all 5 — they only differ in UX.

---

## Backend Deploy

### Records storage (critical path)
```bash
# Option A — Cloudflare R2 (recommended for MVP)
#   1. Create R2 bucket via Cloudflare dashboard
#   2. Generate API token
#   3. Wire records-storage service to use @aws-sdk/client-s3 pointed at R2 endpoint

# Option B — Self-hosted MinIO on Hostinger VPS (cheapest if storage <50 GB)
docker run -d --name minio --restart unless-stopped \
  -p 127.0.0.1:9000:9000 -p 127.0.0.1:9001:9001 \
  -e MINIO_ROOT_USER=... -e MINIO_ROOT_PASSWORD=... \
  -v /srv/minio:/data \
  minio/minio server /data --console-address ":9001"
```

### Emergency QR API
Stateless service that:
1. Takes an `animalId` + microchip scan payload
2. Verifies the animal is registered (`isAnimalActive`)
3. Writes a `logEmergencyAccess` audit entry
4. Returns a URL pointing to the decryption flow for the emergency packet

Deploy on Railway or the same VPS. Fast, cheap, sub-100ms response time target.

### DIDz integration bridge
Calls DIDz.io `attestToDid` with pet-specific attestation types (`pad(32, "VAX_RABIES_2026")`, etc.). Can also run as a Vercel Edge Function if you want to avoid a separate service. Low load, stateless.

---

## Phase Roadmap

| Phase | Deliverable | Status |
|-------|-------------|--------|
| 0 | Compact contract compiles + saved | ✅ Local (awaiting push) |
| 1 | Monorepo scaffold + owner portal | ⏳ |
| 2 | DIDz.io integration bridge working | ⏳ (DIDz.io DApp must land first) |
| 3 | Vet portal + first attestation flow | ⏳ |
| 4 | Emergency QR + collar-scan UX | ⏳ |
| 5 | Boarding + insurance + research portals | ⏳ |
| 6 | MainNet launch + first real pet registrations | ⏳ |

---

## EPIC / Vet-Practice Integration

`docs/EPIC_INTEGRATION_GUIDE.md` outlines how vet practice management software (EPIC, IDEXX Cornerstone, ezyVet) can plug in. The integration lives in the `didz-integration` service — it translates between the vet software's API and our `attestToDid` calls. Don't deploy this until Phase 3.

---

## References

- Master roadmap: `PixyPi/DEPLOYMENT_ROADMAP.md`
- Contract README: `contracts/README.md`
- Emergency protocol: `docs/SENTINELDID_EMERGENCY_PROTOCOL.md`
- Reference DApp pattern: https://github.com/bricktowers/midnight-identity
- Sister platform: `../equineProData/` (horses, RWA-extended)

---

*Built by Penny 🎀 on Apr 17, 2026.*
