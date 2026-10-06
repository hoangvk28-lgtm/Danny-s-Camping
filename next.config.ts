import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root explicitly. An unrelated stray lockfile at
  // /home/admin1/package-lock.json was making Next.js infer the workspace
  // root as the whole home directory instead of this project folder,
  // which made the dev server trace/watch far more of the filesystem
  // than it needed to (contributing to the dev-server memory blowups).
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.clarity.ms; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' *.google-analytics.com *.supabase.co *.clarity.ms; style-src 'self' 'unsafe-inline'; frame-ancestors 'self';" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // non-www → www (301 permanent — tells Google which is canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "dannycamping.com" }],
        destination: "https://www.dannycamping.com/:path*",
        permanent: true,
      },
      { source: "/author", destination: "/about", permanent: true },
      // Singular/plural duplicate keywords from the P1 plan: one guide per topic.
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-4-season-tent", destination: "/tents-shelter/best-4-season-tents", permanent: true },
      { source: "/best-4-season-tent", destination: "/tents-shelter/best-4-season-tents", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-backpacking-sleeping-bag", destination: "/sleep-gear/best-backpacking-sleeping-bags", permanent: true },
      { source: "/best-backpacking-sleeping-bag", destination: "/sleep-gear/best-backpacking-sleeping-bags", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-backpacking-stove", destination: "/camp-kitchen/best-backpacking-stoves", permanent: true },
      { source: "/best-backpacking-stove", destination: "/camp-kitchen/best-backpacking-stoves", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-backpacking-tent", destination: "/tents-shelter/best-backpacking-tents", permanent: true },
      { source: "/best-backpacking-tent", destination: "/tents-shelter/best-backpacking-tents", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-base-layer", destination: "/clothing-footwear/best-base-layers", permanent: true },
      { source: "/best-base-layer", destination: "/clothing-footwear/best-base-layers", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-chair", destination: "/camp-furniture/best-camping-chairs", permanent: true },
      { source: "/best-camping-chair", destination: "/camp-furniture/best-camping-chairs", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-cot", destination: "/sleep-gear/best-camping-cots", permanent: true },
      { source: "/best-camping-cot", destination: "/sleep-gear/best-camping-cots", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-shower", destination: "/camp-furniture/best-camping-showers", permanent: true },
      { source: "/best-camping-shower", destination: "/camp-furniture/best-camping-showers", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-sleeping-bag", destination: "/sleep-gear/best-camping-sleeping-bags", permanent: true },
      { source: "/best-camping-sleeping-bag", destination: "/sleep-gear/best-camping-sleeping-bags", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-stove", destination: "/camp-kitchen/best-camping-stoves", permanent: true },
      { source: "/best-camping-stove", destination: "/camp-kitchen/best-camping-stoves", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-table", destination: "/camp-furniture/best-camping-tables", permanent: true },
      { source: "/best-camping-table", destination: "/camp-furniture/best-camping-tables", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-camping-tent", destination: "/tents-shelter/best-camping-tents", permanent: true },
      { source: "/best-camping-tent", destination: "/tents-shelter/best-camping-tents", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-down-jacket", destination: "/clothing-footwear/best-down-jackets", permanent: true },
      { source: "/best-down-jacket", destination: "/clothing-footwear/best-down-jackets", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-dry-bag", destination: "/campsite-gear/best-dry-bags", permanent: true },
      { source: "/best-dry-bag", destination: "/campsite-gear/best-dry-bags", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-fleece-jacket", destination: "/clothing-footwear/best-fleece-jackets", permanent: true },
      { source: "/best-fleece-jacket", destination: "/clothing-footwear/best-fleece-jackets", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-headlamp", destination: "/campsite-gear/best-headlamps", permanent: true },
      { source: "/best-headlamp", destination: "/campsite-gear/best-headlamps", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-personal-locator-beacon", destination: "/packs-hiking/best-personal-locator-beacons", permanent: true },
      { source: "/best-personal-locator-beacon", destination: "/packs-hiking/best-personal-locator-beacons", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-portable-solar-panel", destination: "/camp-power/best-portable-solar-panels", permanent: true },
      { source: "/best-portable-solar-panel", destination: "/camp-power/best-portable-solar-panels", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-soft-cooler", destination: "/camp-kitchen/best-soft-coolers", permanent: true },
      { source: "/best-soft-cooler", destination: "/camp-kitchen/best-soft-coolers", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-softshell-jacket", destination: "/clothing-footwear/best-softshell-jackets", permanent: true },
      { source: "/best-softshell-jacket", destination: "/clothing-footwear/best-softshell-jackets", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-sun-hat", destination: "/clothing-footwear/best-sun-hats", permanent: true },
      { source: "/best-sun-hat", destination: "/clothing-footwear/best-sun-hats", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-sun-shirt", destination: "/clothing-footwear/best-sun-shirts", permanent: true },
      { source: "/best-sun-shirt", destination: "/clothing-footwear/best-sun-shirts", permanent: true },
      { source: "/:section(tents-shelter|sleep-gear|camp-kitchen|camp-power|camp-furniture|campsite-gear|packs-hiking|clothing-footwear|guide)/best-ultralight-tent", destination: "/tents-shelter/best-ultralight-tents", permanent: true },
      { source: "/best-ultralight-tent", destination: "/tents-shelter/best-ultralight-tents", permanent: true },
      // Round 4 keywords merged into a sibling guide (duplicate intent or no genuine products).
      // P3 keywords that duplicate an existing guide's search intent.
      // Routes inherited from the template that this site does not use.
      { source: "/categories/:slug", destination: "/:slug", permanent: false },
      { source: "/categories", destination: "/", permanent: false },
      { source: "/compare/:path*", destination: "/", permanent: false },
      { source: "/deals", destination: "/", permanent: false },
      { source: "/reviews/:path*", destination: "/", permanent: false },
    ];
  },
  experimental: {
    // Keep local production builds within the 14 GiB workstation's memory
    // budget. This project prerenders 1600+ pages, and the default worker
    // count caused several concurrent Node processes to exhaust RAM + swap.
    cpus: 2,
    staticGenerationMaxConcurrency: 2,
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  // Type-checking already runs locally (`npx tsc --noEmit`) before every push per the
  // pre-commit gate. With 1600+ static guide pages, Next's in-build tsc pass was taking
  // long enough to hit the Vercel Hobby plan's ~45min build timeout, causing build errors
  // and backing up the deploy queue. Skip the redundant in-build check.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default nextConfig;
