# Danny's Camping

Next.js 16 affiliate buying-guide site for US campers (car camping, family camping, backpacking, overlanding). Live domain: https://www.dannycamping.com

Sections: Tents & Shelter, Sleep Gear, Camp Kitchen, Camp Power, Camp Furniture, Campsite Gear.

```bash
npm run dev            # http://localhost:3000
npx tsc --noEmit       # type check
npm run build          # production build
```

Guides live in `data/guides/<slug>.ts`, are registered in `data/guides.ts`, and are rendered through `data/guides-index.generated.ts` (regenerate with `node scripts/generate-guides-index.mjs`). See `CLAUDE.md` for editorial and pipeline rules.
