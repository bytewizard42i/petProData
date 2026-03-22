# PetProData × SentinelDID — Emergency Protocol Integration

*How SentinelDID's emergency management protocol enables life-saving animal rescue operations and emergency veterinary care with privacy-preserving pet health data access.*

**Cross-pollination**: [SentinelDID](https://github.com/bytewizard42i/SentinelDID) ↔ [petProData](https://github.com/bytewizard42i/petProData)

---

## What SentinelDID Brings to Animal Emergency Response

SentinelDID was built for human disaster response, but the same patterns apply directly to animal emergencies — and often the two happen simultaneously. In every natural disaster, house fire, or mass evacuation, animals are part of the crisis.

### Core SentinelDID Features Applicable to Animal Rescue

| SentinelDID Feature | Animal Rescue Application |
|---------------------|---------------------------|
| **DID-NFT + QR** | Pet identity tags — scannable collar/microchip-linked QR for instant identification |
| **Workforce hierarchy** | Rescue team chain-of-command (incident commander → team leads → field rescuers → volunteers) |
| **Downman switch** | Alert if a rescue worker goes unresponsive in a dangerous environment (collapsed building, flood zone) |
| **Volunteer onboarding** | Disaster animal rescue volunteers verified via KYCz in minutes with just a smartphone |
| **AI-assisted delegation** | Triage — which animals need critical vet care vs. shelter vs. are uninjured |
| **Victim management** | Privacy-preserving tracking of rescued animals across shelters and foster placements |
| **Satellite connectivity** | Off-grid animal rescue operations (rural areas, wildfires, hurricanes) via Starlink/World Mobile |

---

## Emergency Scenarios

### 1. Natural Disaster Animal Rescue

**Scenario**: Hurricane/wildfire evacuation. Thousands of pets separated from owners. Shelters overwhelmed.

**Current problem**: Animals arrive at shelters with no identification, no medical history. Shelter staff don't know about medications, allergies, aggressive behavior triggers, or chronic conditions. Owners can't find their pets across multiple shelters.

**With SentinelDID + PetProData**:

```
┌──────────────────────────────────────────────────────────┐
│  DISASTER ANIMAL RESCUE                                  │
│                                                          │
│  1. Rescue worker scans pet's PetProData tag/QR          │
│     (collar tag, microchip-linked, tattoo-linked)        │
│                                                          │
│  2. SentinelDID verifies rescue worker credentials       │
│     - Proves: "I am part of this authorized rescue team" │
│     - Proves: "I have animal handling certification"     │
│     - Hides: Worker's personal identity                  │
│                                                          │
│  3. Emergency disclosure releases ONLY:                  │
│     ✓ Current medications (critical for continuity)      │
│     ✓ Known allergies (food, drug, environmental)        │
│     ✓ Aggressive behavior triggers / handling notes      │
│     ✓ Chronic conditions requiring ongoing treatment     │
│     ✓ Owner emergency contact information                │
│     ✓ Vaccination status (rabies especially)             │
│     ✗ Full veterinary history (NOT disclosed)            │
│     ✗ Breeding records (NOT disclosed)                   │
│     ✗ Insurance details (NOT disclosed)                  │
│     ✗ Purchase/adoption price (NOT disclosed)            │
│                                                          │
│  4. Owner automatically notified: "Your pet [name] has   │
│     been found and is safe at [shelter/location]"        │
│                                                          │
│  5. All access logged on-chain (audit trail)             │
└──────────────────────────────────────────────────────────┘
```

### 2. Emergency Veterinary Access

**Scenario**: A pet is brought to an emergency vet clinic by a neighbor, pet sitter, or good samaritan. The owner is unreachable.

**With SentinelDID + PetProData**:
- Pet's QR tag is scanned → DID verified
- Emergency vet (verified credentials via SentinelDID) triggers emergency disclosure
- Critical medical info released: medications, allergies, prior surgeries, chronic conditions
- Vet can treat safely without the full history
- Owner notified via Downman-style alert chain

### 3. Shelter/Foster Coordination During Crisis

**Scenario**: Mass intake event. Animals distributed across multiple shelters and emergency foster homes.

**With SentinelDID workforce management**:
- Incident commander assigns shelter capacity and foster placements
- Each animal's DID tracks location across the network (privacy-preserved — only authorized coordinators see)
- Foster volunteers onboarded via KYCz in minutes
- Medical needs flagged and routed to appropriate facilities
- When owner searches for their pet, the system can match across all locations without exposing other animals' data

### 4. Domestic Violence / Safe Surrender

**Scenario**: A person fleeing domestic violence needs to surrender their pet to a shelter but can't have their identity or location linked to the animal.

**This is where SentinelDID's privacy model is critical**:
- Owner surrenders pet with emergency health data disclosure
- Owner's identity is ZK-shielded — shelter has the medical info they need but cannot trace back to the owner
- If the owner later wants to reclaim, they prove ownership via ZK proof without revealing their current location
- Protects both the human and the animal

### 5. Hoarding / Cruelty Seizure

**Scenario**: Law enforcement seizes 50+ animals from a hoarding situation.

**With SentinelDID + PetProData**:
- Each animal gets an emergency DID issued on-site (SentinelDID volunteer onboarding pattern)
- Triage: AI-assisted assessment of medical urgency
- Workforce hierarchy manages evidence chain-of-custody (legally critical)
- ZK-verified veterinary assessments logged on-chain (tamper-proof evidence for prosecution)
- Privacy-preserving placement tracking as animals move to foster/adoption

---

## Downman Switch for Pet Safety

SentinelDID's Downman Switch adapts to pet contexts:

### Elderly/Disabled Pet Owner Monitoring

- Owner configures check-in cadence (daily, twice daily)
- Missed check-in triggers escalation:
  1. Alert to designated pet emergency contact
  2. If no response → alert to designated vet
  3. If no response → alert to local animal welfare
- Pet's emergency health data is pushed to the responder
- Ensures pets don't suffer when owners are incapacitated

### Pet Transport Safety

- During transport (boarding, relocation, rescue transport), Downman switch monitors the transport vehicle/handler
- GPS + check-in cadence ensures the animal's safety en route
- If transport goes silent, alert chain activates with the animal's last known location

---

## RFID Microchip Integration — The Physical-to-Digital Bridge

### The Existing Infrastructure

Companion animals already have a globally deployed identity infrastructure: **implanted RFID microchips**. Over 100 million pets worldwide carry ISO-compliant chips. PetProData doesn't need to reinvent animal identification — it needs to **bridge the existing RFID layer to a privacy-preserving DID layer**.

### Microchip Standards

| Standard | Frequency | Use | Coverage |
|----------|-----------|-----|----------|
| **ISO 11784/11785** | 134.2 kHz (FDX-B) | International pet/livestock ID | Global standard |
| **ISO 14223** | 134.2 kHz | Advanced transponders (read/write, sensors) | Emerging |
| AVID (legacy) | 125 kHz | US legacy chips | US only, declining |
| HomeAgain (legacy) | 125 kHz | US legacy chips | US only, declining |
| **ISO 15693 / NFC** | 13.56 MHz | Smart tags, NFC-enabled collars | Growing |

**Target**: ISO 11784/11785 (covers ~90% of modern implants) + NFC smart collar tags as secondary.

### How RFID → DID Binding Works

```
┌──────────────────────────────────────────────────────────┐
│  RFID → DID BINDING PROTOCOL                             │
│                                                          │
│  ENROLLMENT (one-time, at vet clinic)                    │
│  ┌─────────────────────────────────────────────┐         │
│  │ 1. Vet scans pet's RFID microchip           │         │
│  │    → Reads 15-digit ISO chip number          │         │
│  │                                              │         │
│  │ 2. Chip number hashed with domain separator  │         │
│  │    → persistentHash("petpro:rfid:", chipNum) │         │
│  │    → Produces deterministic DID identifier   │         │
│  │                                              │         │
│  │ 3. DID registered on Midnight                │         │
│  │    → Links to owner's DID (sealed/private)   │         │
│  │    → Health records attached to pet DID       │         │
│  │                                              │         │
│  │ 4. Owner sets emergency disclosure policy    │         │
│  │    → Which fields to release in emergencies  │         │
│  │    → Who can trigger emergency access        │         │
│  └─────────────────────────────────────────────┘         │
│                                                          │
│  EMERGENCY SCAN (in the field)                           │
│  ┌─────────────────────────────────────────────┐         │
│  │ 1. Rescuer/vet scans pet's RFID chip         │         │
│  │    → Same 15-digit number                    │         │
│  │                                              │         │
│  │ 2. Hash computed → maps to pet's DID         │         │
│  │                                              │         │
│  │ 3. SentinelDID verifies rescuer credentials  │         │
│  │                                              │         │
│  │ 4. Emergency health data released            │         │
│  │    → Medications, allergies, conditions       │         │
│  │    → Owner notified automatically            │         │
│  └─────────────────────────────────────────────┘         │
└──────────────────────────────────────────────────────────┘
```

### Multi-Layer Identification Strategy

Not all animals are chipped, and chips can fail. PetProData uses a fallback hierarchy:

| Priority | Method | Scan Device | Notes |
|----------|--------|-------------|-------|
| 🥇 1 | **RFID microchip** | Universal scanner (ISO compatible) | Most reliable — implanted, can't be lost |
| 🥈 2 | **NFC smart collar tag** | Smartphone (NFC-enabled) | Easy for civilians/volunteers to scan |
| 🥉 3 | **QR code collar/tag** | Smartphone camera | Visual backup — works even if chip/NFC fails |
| 4 | **Visual identification** | AI photo match | Breed, markings, distinguishing features |

**In an emergency, any of these can resolve to the same pet DID.** The DID is the anchor; the scanning method is just the lookup key.

### Hardware Requirements

**For rescue teams / vet clinics**:
- Universal RFID scanner (ISO 11784/11785 + 125 kHz legacy) — ~$30–$300 depending on model
- Many scanners already have Bluetooth → connect to smartphone running PetProData app
- Example scanners: HomeAgain WorldScan, Datamars Pocket Reader, Halo Microchip Scanner

**For civilians / volunteers**:
- Any NFC-enabled smartphone (iPhone 7+, most Android phones 2018+)
- PetProData app reads NFC smart collar tags
- Camera reads QR code backup tags
- No special hardware needed

### Privacy Considerations

- **The RFID chip number itself is NOT stored on-chain** — only the hash
- An RFID scan produces a chip number → hash → DID lookup, but the chip number cannot be reverse-engineered from the DID
- This means even if the ledger is public, scanning a chip is the only way to link an animal to its DID
- Owner identity is always sealed — only the pet's emergency health data is disclosed, never the owner's personal information
- Complies with the same ZK disclosure model as the rest of the DIDz ecosystem

### Existing Microchip Registry Integration

Current registries (AAHA Universal Pet Microchip Lookup, PetLink, HomeAgain, AKC Reunite) are centralized databases with known problems:
- Owner info often outdated (never updated after moves)
- No medical data attached
- No privacy controls — full owner PII exposed to anyone who scans
- No audit trail of who accessed the data

**PetProData replaces and extends this**:
- RFID → DID binding means the chip links to a living, updatable identity
- Medical data attached and selectively disclosable
- Owner contact via ZK-verified relay (no direct PII exposure)
- Full on-chain audit trail
- Emergency disclosure policies controlled by the owner
- Works even if the owner never updated their address — because the DID follows the owner, not a centralized database

---

## Proposed Smart Contract Architecture

### Emergency Pet Disclosure Contract

```
Emergency Pet Disclosure
├── setEmergencyPolicy()        — Owner defines what's disclosed in emergencies
├── designateEmergencyContacts() — Pet sitter, neighbor, vet, family member
├── triggerEmergencyAccess()    — Verified responder/vet requests emergency data
├── validateRescuerCredentials() — ZK proof: certified rescuer / authorized vet
├── releaseEmergencyData()      — Selective disclosure of critical health fields
├── logAccess()                 — On-chain audit trail
├── notifyOwner()               — Push notification to owner
└── reunificationProof()        — Owner proves ownership to reclaim pet
```

### Pet Downman Switch

```
Pet Downman Switch
├── configureSwitch()           — Check-in cadence, contacts, escalation chain
├── processCheckIn()            — Owner/handler alive signal
├── missedCheckIn()             — Start countdown
├── escalate()                  — Alert contacts → vet → animal welfare
├── pushEmergencyData()         — Release pet health data to responder
└── cancelAlert()               — False alarm reset
```

---

## Integration with Existing PetProData Architecture

- **18 record folder types** already defined → emergency disclosure selects from these folders
- **Emergency reveal policy contracts** already planned → SentinelDID provides the trust and verification framework
- **Each animal gets its own DID** → already aligned with SentinelDID's DID-NFT model
- **Selective disclosure via Midnight ZK proofs** → SentinelDID's verification circuits extend naturally

---

## Related Documents

- SentinelDID README: `DIDzMonolith/SentinelDID/README.md`
- SentinelDID Contract: `DIDzMonolith/SentinelDID/Sentineldid-contract-folder/sentineldid.compact`
- KYCz Biometric Verification: `DIDzMonolith/SentinelDID/docs/KYCZ_BIOMETRIC_VERIFICATION.md`
- Safe Health Data Emergency Protocol: `DIDzMonolith/safeHealthData/docs/SENTINELDID_EMERGENCY_PROTOCOL.md`
- Animal Health Data Deep Dive: `DIDzMonolith/safeHealthData/docs/ANIMAL_HEALTH_DATA_DEEP_DIVE.md`

---

*Last updated: March 22, 2026*
*Cross-pollination by: Penny 🎀*
