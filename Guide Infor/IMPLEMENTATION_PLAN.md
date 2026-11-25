# DannyCamping Informational Guides — Implementation Plan

## Objective

Publish the remaining informational guides from `dannycamping_informational_guide_plan_300.csv` without duplicating the 40 live articles. Every new article must be useful on its own, strengthen a clear topical cluster, and send readers to the most relevant commercial guide naturally.

Target output: 260 additional articles, delivered in 13 batches of 20.

## Phase 0: Inventory and Cannibalization Audit

Before drafting another article:

1. Match every live informational guide to the 300-row plan by canonical slug, normalized title, primary intent, and content scope.
2. Mark each CSV row as `Published`, `Covered by existing article`, `Merge candidate`, or `Planned`.
3. Do not create a second URL when an existing guide already satisfies the same primary intent.
4. For near-duplicates, either expand the existing article or rewrite the planned brief so it answers a materially different question.
5. Lock the canonical slug, silo, parent pillar, money page, and sibling links before drafting.

The initial audit found 34 direct matches and 6 close variants among the 40 published articles. Those six require manual scope mapping before their related plan rows are commissioned.

## Rollout Sequence

Priority is topical authority, not raw CSV order. Finish the remaining Wave 1/P1 coverage before Wave 2/P2 and Wave 3/P3.

| Batch | Priority | Coverage | Article count |
|---|---|---|---:|
| 04 | P1 | Sleep & Comfort + Camp Kitchen/Food/Coolers | 20 |
| 05 | P1 | Weather/Seasonal + Power/Solar/Electronics | 20 |
| 06 | P1 | Hiking/Backpacking + Car Camping/RV | 20 |
| 07 | P1 | Gear Care/Repair + Skills/Safety/LNT | 20 |
| 08 | P2 | Uncovered Camping Basics + Tents, then Sleep | 20 |
| 09 | P2 | Sleep + Camp Kitchen/Food/Coolers | 20 |
| 10 | P2 | Weather/Seasonal + Power/Solar/Electronics | 20 |
| 11 | P2 | Hiking/Backpacking + Car Camping/RV | 20 |
| 12 | P2 | Gear Care/Repair + Skills/Safety/LNT | 20 |
| 13 | P3 | Camping Basics + Tents | 20 |
| 14 | P3 | Sleep + Camp Kitchen/Food/Coolers | 20 |
| 15 | P3 | Weather/Seasonal + Power/Solar/Electronics | 20 |
| 16 | P3 | Hiking/Backpacking + Car Camping/RV | 20 |
| 17 | P3 | Gear Care/Repair + Skills/Safety/LNT | 20 |

Counts in batches 08–17 must be rebalanced after the Phase 0 audit so the final total remains exactly 260 and no covered intent is rewritten.

### Batch 04 — next production batch

Sleep & Comfort:

1. How to Sleep Comfortably While Camping
2. Sleeping Bag vs Camping Blanket
3. Sleeping Bag vs Quilt
4. Sleeping Pad vs Air Mattress
5. Camping Cot vs Air Mattress
6. Camping Cot vs Sleeping Pad
7. What Is R-Value in a Sleeping Pad?
8. What Sleeping Pad R-Value Do I Need?
9. How Thick Should a Camping Mattress Be?
10. How to Keep an Air Mattress Warm While Camping

Camp Kitchen, Food & Coolers:

11. How to Cook While Camping
12. How to Set Up a Camp Kitchen
13. What Food Should You Bring Camping?
14. Easy Camping Meals for Beginners
15. Camping Food That Doesn't Need Refrigeration
16. How Much Food to Bring Camping
17. How Much Water Do You Need for Camping?
18. How to Store Food While Camping
19. How to Keep Food Cold While Camping
20. How Long Does Ice Last in a Cooler?

## Mandatory Article Standard

### Length and depth

- Target 2,000–2,400 words of editorial body content; 1,900 words is the hard minimum after removing metadata, navigation, source lists, and repeated boilerplate.
- Answer the primary question within the first 120 words.
- Include a decision framework, field procedure, scenario comparison, or troubleshooting flow appropriate to the query.
- Include concrete constraints: weather, group size, trip duration, gear type, terrain, skill level, or safety limits.
- Include common mistakes, when the standard advice changes, and a practical checklist.
- Include 4–7 FAQ answers only when they add information not already covered in the body.
- Use primary/authoritative sources for safety, fire, wildlife, food, water, weather, and public-land rules.
- Never claim hands-on testing unless testing was actually performed and documented.

### Originality and uniqueness

- Build a unique outline from the query intent; do not reuse a fixed heading template verbatim across a cluster.
- Give every article at least two DannyCamping-specific scenarios or worked examples.
- Give every article at least one original decision table, checklist, calculation, or diagnostic sequence.
- Define a unique “content promise” and exclusion boundary before drafting so sibling articles do not answer the same question.
- Run title/slug duplication, heading overlap, and paragraph similarity checks against all published informational content.
- Any high-overlap draft must be rewritten, merged, or narrowed before publication.

## Internal Linking Standard

Every article must contain 5–8 intentional internal links:

1. One link to its parent pillar or silo hub.
2. One contextual link to the money/buying-guide page from the CSV.
3. Two to four sibling informational links in the same subcluster.
4. One adjacent-cluster link where it genuinely helps the reader.
5. Optional link to an author, methodology, or safety policy page when relevant.

Rules:

- Use descriptive, varied anchor text; never repeat the exact keyword mechanically.
- Place links where the reader needs the next step, not in a detached “suggested links” dump.
- Resolve every link to its canonical silo URL.
- No orphan article may ship. Each new page must also receive at least two incoming links from existing relevant pages or hubs.
- Re-run the broken-link and redirect audit at the end of every batch.

## Image Standard

Starting with Batch 04 article 66, every article requires four real photographs from free internet sources with a verifiable reuse license. Original diagrams may be added as extra assets but do not replace the four-photo requirement:

1. One 16:9 real hero/context photograph.
2. One real field or in-use photograph.
3. One real equipment/detail photograph.
4. One real comparison, campsite, or scenario photograph.
5. Optional original diagrams, checklists, or decision flows in addition to the four photographs.

Image requirements:

- Prefer Wikimedia Commons, NPS/USDA public-domain media, Unsplash, and Pexels for real photography. Verify the license on the individual asset page; never infer that every image on a government-hosted page is public domain.
- Do not hotlink images. Store optimized local assets under `public/images/informational/<slug>/`.
- Use WebP or AVIF for raster assets; use SVG only for code-native diagrams that remain legible and accessible.
- Target hero width 1600 px and inline width 1200 px; compress without visibly damaging instructional detail.
- Give every image descriptive filenames, accurate alt text, width/height metadata, and a source/license record when applicable.
- Store the original asset-page URL, creator/agency, exact license, download URL, and retrieval date in `image-credits.json` beside the article images.
- Images must explain something in the nearby section; decorative filler does not count toward the 3–4 image requirement.
- Do not reuse the same hero image inside a subcluster unless the composition is substantially different.

## Per-Article Workflow

1. Confirm intent, audience, content promise, exclusion boundary, canonical slug, and silo.
2. Review the benchmark URL plus at least two authoritative sources; record claims requiring citations.
3. Build a unique outline and internal-link map before prose drafting.
4. Draft to 2,000–2,400 useful words.
5. Create/select 3–4 images and write alt text/source metadata.
6. Run factual, safety, originality, overlap, grammar, and link checks.
7. Import into the informational guide registry and validate metadata/schema/sitemap.
8. Review locally on desktop and mobile before committing.

## Batch Acceptance Gate

A batch cannot be pushed unless all 20 articles pass:

- 20 unique canonical slugs and no search-intent collision.
- At least 1,900 editorial words per article; target average at least 2,100.
- Four relevant, licensed real photographs per article with alt text and source/license records; diagrams are additional.
- 5–8 contextual internal links per article and at least two incoming links.
- No broken internal links, missing images, duplicate H1s, or invalid heading hierarchy.
- Metadata, Article schema, FAQ schema where applicable, breadcrumbs, and sitemap entries validate.
- TypeScript, lint, production build, and HTTP spot checks pass.
- Manual localhost review is approved before push.

## Tracking Fields

Add or maintain these fields for every row during production:

- `Implementation_Status`
- `Canonical_Silo`
- `Canonical_URL`
- `Scope_Boundary`
- `Word_Count`
- `Image_Count`
- `Image_License_Checked`
- `Outgoing_Internal_Links`
- `Incoming_Internal_Links`
- `Primary_Sources_Checked`
- `Similarity_Check`
- `Local_QA`
- `Published_Commit`
