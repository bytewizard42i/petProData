# PetProData — Epic Integration Guide

*How PetProData can leverage Epic's open ecosystem for One Health interoperability — bridging companion animal records with human healthcare infrastructure.*

**Source**: https://open.epic.com/ (parsed March 22, 2026)
**Parent guide**: See `safeHealthData/docs/EPIC_INTEGRATION_GUIDE.md` for the full Epic platform reference.

---

## Why Epic Matters for PetProData

Epic's platform isn't just for human health records. The **One Health** paradigm recognizes that human, animal, and environmental health are interconnected. PetProData can integrate with Epic's ecosystem in several important ways:

1. **Therapy & service animal verification** — Healthcare facilities using Epic need to verify that therapy/service animals entering their buildings are healthy, vaccinated, and safe. PetProData can provide ZK-verified health attestations that Epic-connected facilities can check.
2. **Zoonotic disease surveillance** — Pet illness clusters can be early warning signals for human health risks. PetProData data (privacy-preserved) can feed into Epic's population health analytics.
3. **Patient context** — A patient's pet health data is relevant to their own health (allergies, animal bites, zoonotic exposure). PetProData could surface relevant animal health facts within Epic's clinical workflow.
4. **Veterinary EHR interoperability** — Many veterinary practices are adopting human health record patterns. PetProData built on FHIR standards can bridge both worlds.

---

## Epic Platform Overview (Key Numbers)

| Metric | Value |
|--------|-------|
| Annual patient records exchanged | **8.54 billion** (54% with non-Epic orgs) |
| Live apps using open.epic APIs | **2,487** |
| No-cost APIs and interfaces | **750+** |
| Developer playbooks | **40+** |
| Epic hospitals on TEFCA | **2,000+** |

---

## Relevant Technical Standards

### FHIR R4

Epic's primary API standard. PetProData should adopt FHIR R4 resource patterns for animal health records so that:
- Animal health data can be structured in FHIR-compatible formats
- Cross-references between patient (human) and related animal records use standard identifiers
- Future "One Health FHIR" profiles can build on existing infrastructure

**Key resources**:
- FHIR Specifications: https://fhir.epic.com/Specifications
- FHIR Sandbox: https://fhir.epic.com/Sandbox
- OAuth2: https://fhir.epic.com/Documentation?docId=oauth2tutorial

### CDS Hooks (Clinical Decision Support)

Real-time clinical decision support within clinician workflow.

**PetProData integration point**: A CDS Hook could alert a clinician when a patient has a documented animal exposure (bite, scratch, zoonotic contact) by checking PetProData's ZK-verified animal health status — without exposing the full animal record.

- Tutorial: https://fhir.epic.com/Documentation?docId=cds-hooks

### SMART on FHIR

App launch from within Epic's workflow.

**PetProData integration point**: A SMART on FHIR app could launch from a patient's Epic chart to show ZK-verified therapy animal certifications or service animal health attestations — relevant for hospital admission workflows.

- Launch guide: https://fhir.epic.com/Documentation?docId=oauth2&section=EmbeddedOauth2Launch

---

## 5-Step Integration Path

Epic uses a **self-service, vendor-neutral** federated model. No special relationship required.

1. **Data Sharing Design** — Review playbooks at https://open.epic.com/Playbooks
2. **Register Client ID** — Self-service at https://fhir.epic.com/Documentation?docId=epiconfhirrequestprocess
3. **Develop & Test** — Use sandbox at https://fhir.epic.com/Sandbox
4. **Customer Implementation** — Connect directly to Epic customer instances
5. **Showroom Listing** — Optional visibility at https://vendorservices.epic.com/Showroom

---

## Integration Strategy for PetProData

### Phase 1: FHIR-Compatible Animal Records

Build PetProData records using FHIR R4 resource patterns:
- `Patient` resource adapted for animals (species, breed, owner-link)
- `Immunization` for vaccination records
- `AllergyIntolerance` for known animal allergies
- `Condition` for chronic conditions
- `Observation` for lab results, vitals

### Phase 2: Therapy/Service Animal Verification App

Build a **SMART on FHIR app** that:
- Verifies therapy animal health status via ZK proof (no full record exposed)
- Checks vaccination currency for facility entry requirements
- Provides service animal certification verification
- Launches from within Epic's patient admission workflow

### Phase 3: One Health CDS Integration

Integrate **CDS Hooks** that:
- Alert clinicians to relevant zoonotic exposures
- Surface animal bite/scratch follow-up recommendations
- Flag patients with immunocompromised status who have pet exposure risks
- All privacy-preserving — no full animal records exposed to the human health system

### Phase 4: Population Health Bridge

Leverage **FHIR Bulk Data** patterns for:
- Aggregate pet illness data correlated with geographic human health trends
- Privacy-preserving zoonotic disease surveillance
- Research marketplace connecting veterinary and human health researchers

---

## Key Links

| Resource | URL |
|----------|-----|
| Open@Epic Home | https://open.epic.com/ |
| Developer Guide | https://open.epic.com/DeveloperResources |
| FHIR Sandbox | https://fhir.epic.com/Sandbox |
| CDS Hooks | https://fhir.epic.com/Documentation?docId=cds-hooks |
| SMART on FHIR | https://fhir.epic.com/Documentation?docId=launching |
| Technology Guidance | https://open.epic.com/Contact#DataSharingGuidance |

---

*Last updated: March 22, 2026*
