# HelixChain Integration (pointer)

**petProData (PetProData)** integrates with **HelixChain**, the ecosystem's
privacy-preserving data plane + AI agent (powered by
**DIDz + AgenticDID + RWAz + HelixChain**).

**This repo primarily writes:** `health_records` with `vertical='petprodata'`,
`subject_type='pet'` — the **companion-animal** vertical. In the demo, each
owner's assistant agent holds a `manage_pet_health` grant scoped to their pet.

**Integration contract (summary):**
- every subject/owner is a 32-byte **commitment**, never a name
- use the identity layer (DIDz ⇄ tID swappable at runtime) — never hard-code a provider
- store **coarse** data only (age buckets, condition categories) + a `*_hash` anchor
- pick the right class: **DIDz** identity / **VC** credential / **RWAz** asset / **AgenticDID** grant

**Canonical integration schema:** `helixchain/docs/HELIXCHAIN_INTEGRATION.md`
**Alternate-ID (tDIDz) scheme:** `helixchain/docs/IDENTITY_PLACEHOLDER_SCHEME.md`
(local pointer: `docs/TEMP_ID_PLACEHOLDER.md`)
