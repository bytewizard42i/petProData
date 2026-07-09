# tDIDz — Temporary Identity Placeholder (dev only)

While real Midnight **DIDz** wiring is in progress, the DIDzMonolith data plane
(HelixChain) uses a **temporary-ID authority** ("tDIDz" = temp DIDz) as a
swappable stand-in for pet/owner identities. This note exists so there is
**no confusion** when you see `TEMP-*` labels or `id_scheme = 'temp'`.

PetProData is the **companion-animal** vertical of the
three-verticals-one-architecture family (SafeHealthData=human, EquinePro=equine,
PetProData=pet). All three share ONE `health_records` table in HelixChain.

- **What it is**: a placeholder that issues labels like `TEMP-ANIMAL-0001`, with
  `commitment = sha256("helix:temp:" + label)`.
- **Why**: lets us build pet health + ownership flows now; swaps to real DIDz
  with **zero business-logic changes** (one-line provider swap).
- **Not production identity.** Real DIDz commitments are non-resolvable by
  design (privacy); the temp scheme's resolvable labels are a dev convenience.

## The four ecosystem classes (do NOT conflate)

Powered by **DIDz + AgenticDID + RWAz + HelixChain**:

| Class | Engine | What it is | Transferable? |
|---|---|---|---|
| Identity | **DIDz** | who/what this is (the pet, the owner) | no |
| Verifiable Credential (VC) | DIDz-branch | a claim ABOUT a holder (vaccination proof, pedigree) | no |
| Asset | **RWAz** | a thing OWNED (the pet as property) | yes |
| Grant | **AgenticDID** | what an agent/vet may DO (manage pet health) | delegated |

In the 5-person demo world, each person's assistant agent holds a
`manage_pet_health` grant scoped to their pet's PetProData record.

**Canonical spec** (authoritative, with full detail + migration path):
`helixchain/docs/IDENTITY_PLACEHOLDER_SCHEME.md`
Reference implementation: `helixchain/hackathon/app/src/identity.ts`
