# PetProData — Data Schema Reference

> Veterinary-grade data schemas for privacy-preserving companion animal records, identity, ownership, and RWA on Midnight.

## Schema Files

| File | Description |
|------|-------------|
| `animal-identity.json` | Core signalment, microchip, registration, and DID binding |
| `ownership-and-guardianship.json` | Legal ownership, guardianship, custody, co-ownership, and transfer history |
| `clinical-records.json` | SOAP-format vet visits, diagnostics, treatments, prescriptions |
| `vaccination-and-preventive.json` | Vaccine records, parasite prevention, wellness protocols |
| `rwa-and-valuation.json` | Cost tracking, insurance, purchase price, breeding value, asset classification |
| `emergency-packet.json` | Pre-authorized emergency disclosure data |
| `permissions-and-consent.json` | Access grants, time-limited leases, research consent, audit log |

## Privacy Classifications

Every field in every schema carries a `privacyClass` attribute:

| Class | Meaning | Storage | Midnight Role |
|-------|---------|---------|---------------|
| `public` | Non-sensitive, can be on-chain | On-chain or off-chain | Stored openly or as plaintext |
| `shielded` | Sensitive, requires selective disclosure | Encrypted off-chain | zk-proof attestation only |
| `emergency` | Critical medical, pre-authorized reveal | Encrypted off-chain | Emergency Reveal Policy contract |
| `restricted` | Highly sensitive (behavioral, legal, abuse) | Encrypted off-chain | Owner-only or court-ordered |

## Vet Terminology Guide

- **Signalment** — Species, breed, age, sex, weight, color/markings (the "who" of the patient)
- **SOAP** — Subjective, Objective, Assessment, Plan (standard clinical note format)
- **VCPR** — Veterinary-Client-Patient Relationship (legal basis for care)
- **Dx** — Diagnosis
- **Tx** — Treatment
- **Rx** — Prescription
- **Hx** — History
- **PE** — Physical Examination
- **BCS** — Body Condition Score (1-9 scale)
- **TPR** — Temperature, Pulse, Respiration
- **PCV/TS** — Packed Cell Volume / Total Solids (basic bloodwork)

## Design Principles

1. **Animal-centric** — The animal is the root entity, not the owner or clinic
2. **Vet-native** — Field names and structures match how vets think and chart
3. **RWA-first** — Every animal is treated as a real-world asset with provenance, valuation, and legal standing
4. **Privacy-by-default** — Everything is shielded unless explicitly classified otherwise
5. **Transfer-safe** — Schemas support ownership changes without data loss
6. **Midnight-compatible** — Fields map to on-chain proofs vs off-chain encrypted storage
