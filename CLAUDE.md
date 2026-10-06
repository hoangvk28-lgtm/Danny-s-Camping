# Danny's Camping — CLAUDE.md

@AGENTS.md

---

## 0. Communication Rules

- **Always address the user as "cậu"** in every response, without exception.
- **Every internal `<Link>` from `next/link` must include `prefetch={false}`, no exceptions.** Default prefetching of every in-viewport link across thousands of guide pages inflated Vercel ISR Read Units ~50x on the sister site. Add it to every new page/component and to any template script that emits a `<Link>`.

---

## 1. Project Overview

- **Site name:** Danny's Camping (`SITE_NAME = "Danny's Camping"` in `lib/seo.ts`; in JSX use the typographic apostrophe "Danny’s Camping"). Wordmark: `Danny’s <span className="text-brand">Camping</span>`. Tagline: "Camp smarter. Pack lighter."
- **Domain:** `https://www.dannycamping.com` (www canonical; set `NEXT_PUBLIC_SITE_URL`). Contact: `hello@dannycamping.com`, `privacy@dannycamping.com`. Social handle `@dannycamping` (no social profile URLs until real accounts exist).
- **Business model:** Amazon affiliate. Tag is `dannycamping-20` (`lib/affiliate.ts`; placeholder until Associates approval). Every amazonUrl written to the site must be `https://www.amazon.com/dp/<ASIN>?tag=dannycamping-20`.
- **Google Analytics:** intentionally empty for now. Do not add an ID without the user's confirmation.
- **Audience:** US campers: car camping, family camping, backpacking, overlanding. NOT RVs.
- **Silos (URL = `/<silo>/<slug>`):** `tents-shelter`, `sleep-gear`, `camp-kitchen`, `camp-power`, `camp-furniture`, `campsite-gear` (see `data/silos.ts`, `data/categories.ts`, `data/nav.ts`).
- **Byline / author:** "Danny's Camping Editors" (slug `dannycamping-editors`, an Organization, `data/authors.ts`).
- **IndexNow:** key file `public/3ab9628a5cf24654a12eca699958db28.txt`; the `KEY` in `scripts/indexnow.mjs` must match. Do not delete the file. Ping with `node scripts/indexnow.mjs <slug...>`; `.github/workflows/indexnow.yml` auto-pings on pushes touching `data/guides/**`.

### Content types
1. **"Best X" roundup guides:** 33 published, all inherited from the old site's camping section (camping chairs, portable power stations/generators, solar generators, power banks, projectors, coffee warmers). Files: `data/guides/<slug>.ts` + registry entry in `data/guides.ts` (`categorySlug`, `subcategorySlug` = one of the six silos), rendered by `components/guide/RichGuidePage.tsx` via `data/guides-index.generated.ts`. Reference shape: any existing `data/guides/best-*.ts`.
2. **Informational guides:** 0 for now (`data/informational-guides.ts` is empty; rendered by `components/guide/InformationalGuidePage.tsx` when added).

---

## 2. Stack

Next.js 16 (read `node_modules/next/dist/docs/` before writing framework code; it differs from older versions), React 19, TypeScript 5, Tailwind 4. Supabase is optional (falls back to static data when not configured). `next.config.ts` has `typescript.ignoreBuildErrors: true`, so a green Vercel deploy does not prove type-safety: **`npx tsc --noEmit` must report 0 errors before every commit.**

Commands: `npm run dev`, `npm run build`, `npm run lint`, `npx tsc --noEmit`.

---

## 3. SEO Rules

- Use `buildMetadata({ title, description, path, image?, noIndex?, type? })` from `lib/seo.ts` for all metadata. It appends " | Danny's Camping" and sets the canonical; never append the suffix manually or construct canonicals by hand. No trailing slashes.
- **`metaTitle` ≤ 48 characters** (the suffix adds 12; combined ≤ 60). **`metaDescription` 120–160 characters.** Check the real string length with code, never by eye.
- Schema: Article, BreadcrumbList, ItemList (name + URL only) for guides. Forbidden: FAQPage on commercial pages, AggregateRating/Review with editorial or Amazon values, fake prices, `Organization.sameAs` to unmaintained profiles.
- Never change a published slug without a 301 in `next.config.ts`.

## 4. Affiliate & Honesty Rules

- Outbound affiliate links: `rel="noopener noreferrer sponsored"`, `target="_blank"`.
- Every affiliate page shows the disclosure bar. Keep this sentence pattern: "We may earn a commission when you buy through Amazon links. This guide is based on product specs, buyer feedback, use cases, and comparison criteria — not paid placement."
- **Never write "we tested", "we tried", "in our lab", "we measured".** Use "we evaluated", "we researched", "based on product specs and buyer feedback".
- **Never display Amazon star ratings or review counts** in rendered content. Fields may exist in data but must not render.
- No em dash or en dash in generated guide copy. Use "Danny's Camping" as the brand name in visible copy.
- Editorial score label: "Danny’s Camping Fit Score" (0–10, one decimal, via `scoreToColor()`); never as AggregateRating.

## 5. Guide Quality Rules (apply to every new guide)

- Required exports in `data/guides/<slug>.ts`: `products` (5–6 picks, each with `imageUrl`, 3–4 short pros of roughly 2–14 words, 2–3 cons, 2–3 `specs` chips, never empty), `howWeEvaluated` (4–5), `howToChoose` (6 sub-sections whose every row names a real pick from `products`), `buyingCriteria` (5+ substantive 3–4 sentence entries: what it is, why it matters, how to check it), `faq` (5–6 entries using `{ q, a }` keys), `relatedGuides` (non-empty, real slugs), `introParagraphs`.
- Product `description` = 2–3 paragraphs (split on `\n\n`): what it is and key specs, how it compares with named neighbours, who it is best for. Rendered under "Why it made the shortlist"; limitations go in `cons` only.
- Mine real listing features; rewrite in reviewer voice, never paste Amazon bullets. Never fabricate specs, standards or statistics. Do a competitor content-gap research pass once per topic cluster before writing.
- Copy must never expose the drafting process ("not stated in the text we saw", "the excerpt we reviewed", "the facts provided"). State missing specs as buyer tips.
- Intro paragraphs and other templated prose must be genuinely unique per article (no fill-in-the-blank templates; check for repeated 8+ word phrases across a batch).
- Sibling keywords in one cluster must have distinct product sets: no pair sharing more than 2 ASINs, distinct #1 picks. Skip keywords with fewer than 4 genuinely matching products.
- New guides do NOT get a literal `app/(site)/guide/<slug>/page.tsx`; do not run `scripts/generate-guide-page.mjs`. After registering a guide, run `node scripts/generate-guides-index.mjs`, then `npx tsc --noEmit`.
- Never call Supabase from a static guide page component.

## 6. Batch Workflow (cost-conscious)

1. Pick keywords per cluster; confirm `data/guides/<slug>.ts` does not exist.
2. Fetch Amazon pools with `node scripts/search-pool.mjs` (Creators API credentials live in gitignored `.env.local`; confirm which partner tag the credential accepts, but written URLs always use `dannycamping-20`).
3. Prefilter pools with a script before any agent reads them; give writers a trimmed pool.
4. Research once per cluster; writer agents must not run their own searches. One writer subagent at a time, sequential chunks, following `scripts/best-brief.md`.
5. Validate (`scripts/gen-p2-batch.mjs`; its LEAK regex must not be weakened), register, regenerate the guides index, `tsc`, then curl each new URL for 200, the right tag count and no "we tested".
6. Commit locally; push only when the user asks. Never paste batch HTML or pool JSON into chat.

## 7. Never

- Commit `.env.local` or secrets.
- Change the canonical domain or remove the non-www redirect in `next.config.ts`.
- Reintroduce RV content, RV copy, or old-site brand names anywhere.
