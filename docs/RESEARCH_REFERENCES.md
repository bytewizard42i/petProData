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

## Roots & Wings Foundation — Founded by Judy Faulkner (Epic's Founder)

- **Website**: https://rootswings.org/
- **Source**: https://x.com/histories_arch/status/2035798351829245972
- **Mission**: "We help children grow strong from the roots up." Partners with nonprofits supporting low-income children and families across basic needs, early learning, health, and safety & justice.
- **Grantmaking**: Multi-year, unrestricted support. Does not accept unsolicited proposals.
- **Key partners**: No Kid Hungry, Kids Forward, Alameda Health System Foundation, Just Dane

### The Judy Faulkner Connection — Epic & Roots & Wings Are the Same Story

**This is critical context: Roots & Wings Foundation was created by Judy Faulkner and her husband — the same Judy Faulkner who founded Epic Systems.**

In 1979, in a basement office in Madison, Wisconsin, Judy Faulkner started Epic Systems with $6,000–$7,000 of her own money plus ~$70,000 from friends and family. No venture capital. No Silicon Valley. Just a conviction that the American healthcare system was killing people because doctors couldn't access the information they needed.

She had watched medical records stay trapped in filing cabinets and incompatible systems. Doctors made critical decisions in the dark, lacking patient histories. People died from preventable mistakes. That systemic failure became her mission — building software that would let patient information follow the patient, no matter where they went.

Decades later, Epic manages medical records for over 300 million patients worldwide. Roughly half of all U.S. hospital beds run on her systems. Her wealth sits between $7–$8 billion. **She never took Epic public. Never accepted venture capital. Never sold out.** Epic remains one of the largest privately held software companies in the world — thousands of employees, zero outside investors.

Now in her eighties, she signed the Giving Pledge in 2015 and committed to give away **99% of her wealth**. She and her husband created Roots & Wings, named after advice she gave her children: *"You need roots and wings. Values to anchor you. Freedom to grow. Everything else is noise."* The foundation distributes tens of millions annually, aiming for $100 million/year.

### Relevance to PetProData

The fact that **Epic and Roots & Wings share the same founder** creates a unique alignment for PetProData:

1. **Pets in low-income families**: Pets are critical to children's emotional development, yet low-income families struggle to afford veterinary care. Privacy-preserving pet health records could help coordinate subsidized veterinary care programs without creating surveillance risks for vulnerable families — directly serving Roots & Wings' mission.
2. **Shelter and rescue coordination**: Many organizations in Roots & Wings' network (family shelters, domestic violence shelters, foster care systems) must handle situations where pets are part of the family unit. Privacy-preserving pet records could help ensure continuity of animal care during family transitions without exposing sensitive family circumstances.
3. **Therapy animal programs**: Nonprofits serving children often use therapy animals. Verifying that therapy animals are healthy, vaccinated, and safe without exposing the full medical history of the animal is a natural fit for ZK-verified health attestations.
4. **One Health bridge**: Faulkner built Epic to make human health records portable. PetProData extends that same vision to companion animals — and the "One Health" intersection (zoonotic disease, therapy animals, service animals) could eventually connect both systems.
5. **Values alignment**: Faulkner rejected Wall Street because healthcare should serve patients, not shareholders. PetProData's privacy-first model serves the same principle — animal owner control over their pet's data.

---

*Last updated: March 22, 2026*
