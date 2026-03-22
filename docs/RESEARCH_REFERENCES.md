# PetProData — Research & Reference Links

*Curated resources relevant to the PetProData mission of privacy-preserving companion animal health records.*

---

## Epic Systems

- **Website**: https://www.epic.com/
- **Open@Epic**: https://open.epic.com/
- **What they do**: Founded in 1979, Epic is the largest electronic health record (EHR) vendor in the United States, serving over 305 million patients (~38% US market share). Their software powers clinical workflows, patient portals (MyChart), interoperability pipelines, and population health analytics.
- **Why it matters for PetProData**: While Epic focuses on human healthcare, their architecture and interoperability patterns (FHIR R4, CDS Hooks, Care Everywhere) represent the gold standard for health record exchange. PetProData can learn from and potentially interoperate with these systems, especially in "One Health" contexts where human and animal health data intersect (zoonotic disease tracking, therapy animal certifications, service animal medical clearances). An outreach letter to Open@Epic has been drafted (see `EPIC_OPEN_OUTREACH_LETTER.md` in this repo).
- **Key parallels for veterinary records**:
  - **MyChart → PetChart concept** — Owner-facing portal for managing pet health records
  - **Care Everywhere → Vet network exchange** — Sharing records across veterinary clinics without centralized databases
  - **Cosmos → Aggregated veterinary research** — De-identified pet health data for population-level veterinary research
  - **FHIR R4 → Veterinary FHIR** — Adapting modern health interoperability standards for animal records

### One Health Intersection

The "One Health" approach recognizes that human, animal, and environmental health are interconnected. Epic's human health infrastructure and PetProData's animal health infrastructure could eventually bridge:
- Zoonotic disease surveillance (diseases that cross between animals and humans)
- Therapy and service animal medical verification for healthcare facilities
- Environmental health data correlation (pet illness clusters as early warning for human health risks)

---

## Roots & Wings Foundation

- **Website**: https://rootswings.org/
- **Mission**: "We help children grow strong from the roots up." Partners with nonprofits supporting low-income children and families across basic needs, early learning, health, and safety & justice.
- **Grantmaking**: Multi-year, unrestricted support. Does not accept unsolicited proposals.
- **Key partners**: No Kid Hungry, Kids Forward, Alameda Health System Foundation, Just Dane

### Relevance to PetProData

1. **Pets in low-income families**: Research consistently shows that pets are critically important to children's emotional development and family wellbeing, yet low-income families often struggle to afford veterinary care. Privacy-preserving pet health records could help coordinate subsidized veterinary care programs without creating surveillance risks for vulnerable families.
2. **Shelter and rescue coordination**: Many organizations in Roots & Wings' network (family shelters, domestic violence shelters, foster care systems) must handle situations where pets are part of the family unit. Privacy-preserving pet records could help ensure continuity of animal care during family transitions without exposing sensitive family circumstances.
3. **Therapy animal programs**: Nonprofits serving children often use therapy animals. Verifying that therapy animals are healthy, vaccinated, and safe without exposing the full medical history of the animal (or the organization's program details) is a natural fit for ZK-verified health attestations.
4. **Youth agricultural and 4-H programs**: Programs that involve children caring for animals need health records that are portable and privacy-preserving, especially when animals move between participants.

---

## X / Twitter References

*(Pending — see tweet from @histories_arch: https://x.com/histories_arch/status/2035798351829245972)*

---

*Last updated: March 22, 2026*
