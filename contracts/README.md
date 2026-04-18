# PetProData — On-Chain Contract

**Status**: MVP — compile-validated on `compactc v0.30.0` via the hosted Compact playground.
**Language pragma**: `>= 0.16 && <= 0.21`
**Last validated**: Apr 17, 2026

---

## What's Here

| File | Purpose | Exported circuits |
|------|---------|-------------------|
| `petProData.compact` | Privacy-preserving pet identity, ownership, folder-based permissioned access, emergency packet, research consent | `registerAnimal`, `transferOwnership`, `deactivateAnimal`, `grantFolderAccess`, `revokeFolderAccess`, `hasFolderAccess`, `setEmergencyPacket`, `logEmergencyAccess`, `setResearchConsent`, `proveResearchEligible`, `getAnimalRecord`, `isAnimalActive` |

---

## Design Pattern — Anchor, Not Archive

This contract is deliberately **lean**. It does NOT store medical data on-chain. It stores:

- **An identity anchor** for each pet (species class + hashed identity metadata)
- **Ownership** (current owner's wallet key)
- **Permission grants** — who can access which folders, for how long
- **An emergency-packet commitment** (the actual packet lives off-chain)
- **Research-cohort consent** (opt-in with cohort-hash binding)

Actual medical records (vaccines, labs, imaging, prescriptions, behavioral notes) flow through **DIDz.io's `attestToDid` mechanism**. A vet writes a single attestation per record with an attestation type encoding the folder (e.g. `pad(32, "VAX_RABIES_2026")`). The petProData contract controls WHO can decrypt those records; DIDz.io controls the attestation lifecycle.

This separation means:
- petProData contract state stays small (only access control + identity)
- Adding new record types is a matter of convention, not contract migration
- Multiple vets can independently attest about the same animal without collision
- Revoking a vet's access immediately cuts off their ability to decrypt — even old records

---

## The 13 Record Folders

Defined in `enum RecordFolder`, matching the schemas in `../schemas/`:

| Uint<8> | Folder | Typical contents |
|---------|--------|------------------|
| 0 | `IDENTITY` | Species, breed, DOB, markings, microchip |
| 1 | `VACCINES` | Vaccination records + compliance |
| 2 | `ALLERGIES` | Known allergies and sensitivities |
| 3 | `MEDICATIONS` | Current and past prescriptions |
| 4 | `SURGERIES` | Surgical history |
| 5 | `LAB_RESULTS` | Blood panels, diagnostics |
| 6 | `IMAGING` | X-rays, ultrasound |
| 7 | `CHRONIC` | Ongoing conditions (diabetes, CKD, HCM) |
| 8 | `INSURANCE` | Policy + claims data |
| 9 | `NUTRITION` | Diet, supplements, feeding plans |
| 10 | `BEHAVIORAL` | Behavioral assessments, training notes |
| 11 | `RESEARCH` | Study participation and opt-ins |
| 12 | `END_OF_LIFE` | Euthanasia directives, custody transfer |

New folder types require contract migration (keeps the taxonomy stable across every consumer — owner app, vet portal, boarding portal, insurer portal, etc.).

---

## Key Workflows

### 1. Pet Onboarding
```
owner.registerAnimal(
  speciesClass = DOG,
  identityCommit = hash(breed, name, DOB, sex, markings),
  microchipCommit = hash(microchipNumber),
  currentTime
) → animalId
```
The caller's wallet becomes the owner. The same `animalId` can be registered on `DIDz.io` with `EntityType.ANIMAL` using matching inputs — the off-chain SDK does this in one step.

### 2. Vet Visit
```
owner.grantFolderAccess(animalId, VACCINES, vetKey, expiresAt = now + 30 days, now)
owner.grantFolderAccess(animalId, LAB_RESULTS, vetKey, expiresAt, now)

// Vet can now decrypt folder contents off-chain during the visit.
// Vet also calls DIDz.io to attest new vaccines:
DIDz.attestToDid(animalId, pad(32, "VAX_DHPP_2026"), vaccineCommit, expiresAt, now)

// After the visit — or automatically on expiration:
owner.revokeFolderAccess(animalId, VACCINES, vetKey)
```

### 3. Emergency Response
```
// Owner pre-configures the emergency packet (allergies, meds, blood type, DNR):
owner.setEmergencyPacket(animalId, packetCommit)

// Emergency vet scans the pet's collar QR / chip → calls:
responder.logEmergencyAccess(animalId, now)
// This writes an audit-trail entry the owner can review.
// The actual packet is fetched off-chain using the packetCommit.
```

### 4. Adoption / Rescue Transfer
```
// Current owner transfers:
owner.transferOwnership(animalId, newOwnerKey)

// All existing folder grants STAY in effect — the new owner can
// revoke them selectively. Emergency packet stays configured
// (new owner should rotate via setEmergencyPacket).
```

### 5. Boarding / Daycare Check-In
```
// Board facility asks for proof of current rabies:
board.hasFolderAccess(animalId, VACCINES, boardKey, now)  // returns true/false

// If granted, board queries DIDz.io for the latest attestation:
DIDz.verifyAttestation(animalId, pad(32, "VAX_RABIES"), claimedCommit, now)
```

### 6. Research Marketplace
```
// Owner opts in to a veterinary research cohort:
owner.setResearchConsent(animalId, cohortCommit, optIn=true)

// Researcher filters candidates:
researcher.proveResearchEligible(animalId, cohortCommit)  // returns true/false

// Micropayments flow off-chain once the owner signs the enrollment
// (the consent here is the on-chain gate).
```

### 7. Insurance Claims
```
// Insurer pre-authorized for specific folders:
owner.grantFolderAccess(animalId, INSURANCE, insurerKey, expiresAt, now)
owner.grantFolderAccess(animalId, SURGERIES, insurerKey, expiresAt, now)

// Insurer verifies DIDz.io attestations of treatment:
DIDz.verifyAttestation(animalId, surgeryAttestationType, claimedCommit, now)
```

---

## Privacy Guarantees

| Layer | What's visible | To whom |
|-------|----------------|---------|
| Public ledger | Owner's wallet key, species class, registration timestamps, folder-grant expirations | Anyone reading the chain |
| Private hashes | `identityCommit`, `microchipCommit`, `emergencyPacketCommit`, `researchCohortCommit` | Openly visible but opaque |
| Encrypted off-chain | Actual medical data, breed name, date-of-birth, microchip number, emergency packet contents | Only owner + active folder grantees |
| ZK predicates | Research eligibility for specific cohort; folder access status | Returned as a Boolean — no record fields revealed |

---

## Integration With DIDzMonolith

**DIDz.io** — The same wallet key registers the animal on `DIDzRegistry` with `EntityType.ANIMAL`. Both IDs are derived from the same inputs so they match. DIDz.io's attestation mechanism handles per-record commitments.

**KYCz** — Not required for owners, but Trusted Issuers (vet practices, rescue orgs, breed registries) may prove their KYC status via KYCz when onboarding. The petProData contract doesn't check this on-chain; the off-chain UI gates issuer discovery by KYCz status.

**SafeHealthData** — Parent pattern for human health. petProData pioneered the folder-access model; safeHealthData adapts it for human patients.

**EquineProData** — Sister platform for horses. Adds RWA ownership shares, breeding records, and performance logs on top of this same core pattern.

**SentinelDID** — Emergency-protocol integration. If an owner becomes incapacitated, a pre-configured SentinelDID release policy can temporarily grant emergency access to a trusted contact.

---

## Known Gaps (Phase 2)

1. **Per-shareholder hand history** — not relevant here (no shares in petProData; equineProData has the RWA layer).
2. **Bulk grant/revoke** — currently one folder at a time. A "grant all vet folders for 30 days" helper would speed up typical workflows.
3. **Grant-chain enforcement** — a grantee could re-share decrypted data; the chain can't prevent that (no DRM). Anti-abuse is social/legal.
4. **Automatic deactivation on chip removal** — would require off-chain attestation pattern we haven't designed yet.

---

## Compile & Deploy

Quick validation via the Midnight MCP compiler playground (no local `compactc` required):
```bash
# Via the MCP tool
midnight-compile-contract --code "$(cat contracts/petProData.compact)" --skipZk
```

For preprod deployment:
```bash
compactc contracts/petProData.compact build/petProData/
```

---

## References

- **Record schemas**: `../schemas/*.json`
- **Emergency protocol details**: `../docs/SENTINELDID_EMERGENCY_PROTOCOL.md`
- **Research ideation**: `../docs/ZKTimes-ideation.md`
- **EPIC integration guide**: `../docs/EPIC_INTEGRATION_GUIDE.md` (for vet-practice software)
- **DIDz.io contracts**: `../../DIDz-io/contracts/`
- **Sister platform (horses)**: `../../equineProData/contracts/`
- **Parent platform (humans)**: `../../safeHealthData/`

---

*Built by Penny 🎀 and John on Apr 17, 2026. Compiles clean on `compactc v0.30.0`.*
