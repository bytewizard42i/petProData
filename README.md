# PetProData

> Private records, identity, ownership, and care coordination for companion animals on Midnight.

Part of the **DIDz ecosystem**.

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

## Related Projects

| Project | Role |
|---------|------|
| [SafeHealth Data](https://github.com/bytewizard42i/safeHealthData_me) | Parent platform — human healthcare |
| [EquinePro](https://github.com/bytewizard42i/equineProData) | Sister platform — equine (horses) |
| [DIDz.io](https://github.com/bytewizard42i/didz-dapp-system) | Identity hub for the ecosystem |
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

## Status

🏗️ **Architecture phase** — Design documents and workflow specifications in progress.

---

## License

TBD
