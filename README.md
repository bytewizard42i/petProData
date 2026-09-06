# PetProData

> Private records, identity, ownership, and care coordination for companion animals on Midnight.

Part of the **DIDz ecosystem**.

![Veterinary & Animal Health on Midnight: protecting privacy, proving trust, preserving value](assets/veterinary-animal-health-on-midnight.png)

---

## What Is PetProData?

PetProData is a privacy-preserving companion animal data platform built on the [Midnight](https://midnight.network) blockchain. It provides:

- **Persistent Pet Identity** — Each pet gets its own DID that survives ownership transfers, foster placement, rescue intake, boarding, and referrals
- **Selective Disclosure** — Prove facts about a pet (vaccination compliance, allergy status, spay/neuter) without revealing the full medical file
- **Zero-Knowledge Proofs** — Midnight's Compact smart contracts verify assertions on-chain without exposing sensitive data
- **Folder-Based Record Architecture** — Health records, identity, insurance, and behavioral data organized into permissioned folders
- **Emergency Access** — Predefined emergency packets become accessible under cryptographically auditable conditions
- **Research Marketplace** — Owners opt in to veterinary studies with micropayment compensation

---

## Architecture

```
PetProData
├── Identity Layer (DIDz-style)
│   ├── Pet DID (dog, cat, exotic)
│   ├── Owner / Guardian DID
│   ├── Vet Practice DID
│   ├── Individual Vet DID
│   ├── Rescue / Shelter DID
│   ├── Breeder DID
│   ├── Boarding Facility DID
│   ├── Insurer DID
│   └── Researcher DID
├── Data Layer (encrypted off-chain)
│   ├── Health records, labs, imaging
│   ├── Vaccination records
│   ├── Medications & prescriptions
│   ├── Behavioral assessments
│   └── Insurance & adoption records
├── Privacy & Proof Layer (Midnight)
│   ├── Access grants & revocations
│   ├── Emergency reveal policy
│   ├── Compliance proofs
│   ├── Ownership attestations
│   └── Audit trail
└── App Layer
    ├── Owner app
    ├── Vet portal
    ├── Emergency responder portal
    ├── Boarding / daycare portal
    ├── Insurer portal
    ├── Rescue / adoption portal
    └── Research portal
```

---

## Record Folders

| Folder | Description |
|--------|-------------|
| Identity | Species, breed, name, DOB, sex, markings, microchip |
| Vaccines | Vaccination records and compliance |
| Allergies | Known allergies and sensitivities |
| Medications | Current and past medications |
| Surgeries | Surgical history |
| Lab Results | Blood work, panels, diagnostics |
| Imaging | X-rays, ultrasound |
| Chronic Conditions | Ongoing conditions (diabetes, CKD, etc.) |
| Insurance | Policy and claims data |
| Nutrition | Diet, supplements, feeding plans |
| Behavioral Notes | Behavioral assessments, training notes |
| Research Consent | Study participation and opt-ins |
| End-of-Life / Transfer | Euthanasia directives, custody transfer |

---

## Key Workflows

1. **Pet Onboarding** — Create pet identity with species, breed, chip info, ownership, and vet-of-record
2. **Clinical Use** — Purpose-bound, folder-level access for vet visits and referrals
3. **Emergency Response** — Scan collar tag / chip → instant access to critical medical facts only
4. **Adoption / Rescue Transfer** — Identity transfers with verified medical packet; sensitive rescue notes stay restricted
5. **Boarding Check-In** — Prove vaccination compliance without sharing full history
6. **Insurance Claims** — Cryptographic proof of treatment, diagnosis, and invoice authenticity
7. **Research Marketplace** — Opt-in cohort matching with micropayments (e.g., "dogs over 8 with osteoarthritis")

---

## Three Verticals, One Architecture

PetProData is the **companion-animal** vertical of a three-vertical family that shares one privacy-preserving health-data architecture:

| Vertical | Repo | Phase | What it does |
|----------|------|-------|--------------|
| 🐾 **PetProData** | this repo | Phase 0 | Companion animal records (dogs, cats, exotics) |
| 🐴 **EquinePro** | [equineProData](https://github.com/bytewizard42i/equineProData) | Phase 1 | Equine identity + RWA (ownership shares, breeding, lineage) |
| 🏥 **SafeHealthData** | [safeHealthData](https://github.com/bytewizard42i/safeHealthData_me) | Phase 2+ | Human inpatient + outpatient healthcare |

**Same Compact contracts. Same folder model. Same emergency reveal protocol. Same DIDz identity primitives.** PetProData is Phase 0 of the rollout because companion-animal medicine is the right place to prove the architecture: real users, real clinical operations, owners who care intensely, and regulation light enough for fast iteration. Everything PetProData ships becomes the foundation EquinePro and SafeHealthData inherit.

**What flows from PetProData forward**: folder model, permission graph, emergency reveal contracts, vaccine/allergy/medication clearance circuits, owner-portal UX, research marketplace pattern, vet PIMS integration patterns.

**What flows back to PetProData**: HIPAA-grade audit trail (overkill for vet records until it isn't), bedside kiosk + RFID + biometric pattern from the [hospital room deep dive](https://github.com/bytewizard42i/safeHealthData_me/blob/main/docs/EVENTREVOLUTION_HOSPITAL_ROOM_DEEP_DIVE.md) (Phase 0 deploys first in a vet teaching hospital), Ai inference consent layer, discharge soulbound NFT, cross-species research via [STARSTREAM_HIPAA_PROOFS](https://github.com/bytewizard42i/safeHealthData_me/blob/main/docs/STARSTREAM_HIPAA_PROOFS.md).

See **[Three Verticals, One Architecture](https://github.com/bytewizard42i/safeHealthData_me/blob/main/docs/CROSS_VERTICAL_INTEGRATION.md)** (canonical reference in the SafeHealthData repo) for what transfers between verticals, identity mapping across species, and operational cross-pollination.

---

## Related Projects

| Project | Role |
|---------|------|
| [SafeHealthData](https://github.com/bytewizard42i/safeHealthData_me) | Parent platform, human healthcare (Phase 2+) |
| [EquinePro](https://github.com/bytewizard42i/equineProData) | Sister platform, equine (Phase 1) |
| [DIDz.io](https://github.com/bytewizard42i/didz-dapp-system) | Identity hub for the ecosystem |
| [KYCz](https://github.com/bytewizard42i/KYCz_us_app) | Owner / vet practice / staff verification |
| [SentinelDID](https://github.com/bytewizard42i/SentinelDID) | Emergency reveal policy contracts |
| [SharedScience](https://github.com/bytewizard42i/sharedScience_me) | Research marketplace (cross-species cohort matching) |
| [EventRevolution](https://github.com/bytewizard42i/EventRevolution) | Bedside kiosk + RFID hardware reference (vet hospital pilot) |
| [ZKSplunk](https://github.com/bytewizard42i/ZKSplunk_Splunking_w_Midnight) | Vet practice operations dashboards + Ai diagnostics |
| [DIDzMonolith](https://github.com/bytewizard42i/DIDzMonolith) | Monorepo containing all DIDz projects |

---

## Tech Stack

- **Smart Contracts**: Compact (Midnight)
- **App Layer**: TypeScript / JavaScript
- **Frontend**: React
- **Backend**: Node.js / Express
- **Storage**: Encrypted off-chain
- **Auth**: Wallet-based authorization via DIDz

---

## Origin

The concept of using animal health datasets as a precursor to semi-decentralized healthcare data for humans was proposed by [Orito (GoldRush)](https://x.com/TheGoldRush). The insight: establishing trust and legitimacy with animal health records first creates a proven, lower-stakes foundation before applying the same privacy-preserving infrastructure to human healthcare.

---

## Status

🏗️ **Architecture phase** — Design documents and workflow specifications in progress.

---

## License

TBD

## Three-pillar connection

petProData is a **consumer product** built on the DIDz three-pillar model:

- **DIDz (root identity):** Pet owners hold a DIDz; petProData verifies ownership without revealing identity.
- **AgenticDID (agent authority):** Research/vet agents can be delegated scoped grants to access health records.
- **RWAz (object identity):** Pets are registered as RWAz objects — ownership is a transferable credential on the RWAz registry.

petProData uses `petProData.compact` (12 circuits).

---

## The Existential Threat

![The Existential Threat](docs/media/existential-threat.jpg)

The convergence of autonomous Ai, mass surveillance, and centralized identity databases creates an existential threat to human autonomy. Every digital interaction becomes a data point in someone else's database. Every Ai agent operates without verifiable accountability. Every centralized identity system is a breach waiting to happen.

**DIDzMonolith is the architectural answer.** Four engines, one ecosystem, zero-knowledge proofs on Midnight Network:

| Engine | Role | What It Proves |
|--------|------|----------------|
| **DIDz** | Root identity layer | Who you are, without revealing who you are |
| **AgenticDID** | Agent authority layer | That an Ai agent is authorized, without revealing by whom |
| **RWAz** | Object/asset identity layer | What an asset is and who owns it, without exposing ownership data |
| **HelixCTW** | Privacy-preserving data plane | Query and manage private data, without exposing raw facts |

**This project** is part of the DIDzMonolith ecosystem, built on these four engines. The existential threat is real. The architecture is ready.

---

## Regulatory Compliance

This project is part of the DIDzMonolith ecosystem and inherits the four-engine ZK architecture (DIDz + AgenticDID + RWAz + HelixCTW) that provides privacy-by-design advantages for regulatory compliance.

**Applicable frameworks**: SOC 2, ISO 27001, PCI DSS, HIPAA, MiCA — depending on product function and jurisdiction.

**Full compliance deep dive**: [`DIDzMonolith-docs/compliance/REGULATORY_COMPLIANCE_DEEP_DIVE.md`](../../DIDzMonolith-docs/compliance/REGULATORY_COMPLIANCE_DEEP_DIVE.md) — engine-by-engine control mappings, product compliance matrix, and implementation roadmap.

**MiCA regulatory notes**: [`DIDzMonolith-docs/compliance/MICA_REGULATORY_NOTES.md`](../../DIDzMonolith-docs/compliance/MICA_REGULATORY_NOTES.md) — EU crypto-asset regulation product-by-product matrix.

---


## Shared sign-in options

See [the shared sign-in module pointer](SIGN_IN_SELECTIONS.md) for reusable choice
configuration and this repository's integration boundaries. This documentation
pointer does not activate authentication.
