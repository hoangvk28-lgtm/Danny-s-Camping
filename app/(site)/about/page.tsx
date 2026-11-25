import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, SITE_NAME } from "@/lib/seo";
import { silos } from "@/data/silos";

export const metadata: Metadata = buildMetadata({
  title: "About Danny's Camping",
  description:
    "Danny’s Camping publishes straight-talking camping buying guides, comparing gear on published specs, fit and trade-offs so you can buy with confidence.",
  path: "/about",
});

const principles = [
  {
    title: "Start with the trip",
    body: "Every guide begins with the constraints that actually decide a purchase: group size, season and weather, packed weight, power needs and how you like to camp.",
  },
  {
    title: "Show the trade-offs",
    body: "Each pick comes with who it suits and when to skip it. We would rather tell you a cheaper option will do than sell you more than the job needs.",
  },
  {
    title: "Say where the facts come from",
    body: "Our comparisons use published specifications, included hardware, compatibility details and warranty terms. We do not claim hands-on testing unless a guide says so explicitly.",
  },
];

export default function AboutPage() {
  return (
    <article className="mx-auto w-full max-w-[760px] px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 text-[2.25rem] leading-tight sm:text-[2.75rem]">A better night outside runs on the right gear.</h1>
      <p className="mt-4 text-[1.125rem] leading-relaxed">
        {SITE_NAME} publishes buying guides for the tools and gear that keep a campsite comfortable, from tents and sleep gear to camp kitchens and power stations. Our aim is simple: help you choose the right thing the first time.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Danny’s Camping continues the spirit of the original Danny’s Camping Guide, with practical gear advice, buying guides, and camping
        know-how. The site is run by <Link prefetch={false} href="/author/danny-walker">Danny Walker</Link>, founder and lead editor. At Danny’s Camping, we focus on
        gear that makes sense at a real campsite, and we pay close attention to weight, setup, comfort, power needs, and storage, not just headline specs.
      </p>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">How we work</h2>
      <ol className="mt-4 divide-y divide-border">
        {principles.map((p, i) => (
          <li key={p.title} className="py-5">
            <h3 className="flex gap-3 text-[1.25rem]">
              <span aria-hidden className="text-brand">{String(i + 1).padStart(2, "0")}</span>
              {p.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed">{p.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">What we cover</h2>
      <ul className="mt-4 divide-y divide-border">
        {silos.map((s) => (
          <li key={s.slug} className="py-4">
            <Link prefetch={false} href={`/${s.slug}`} className="font-[family-name:var(--font-display)] text-[1.25rem] !text-ink hover:!text-brand">
              {s.name}
            </Link>
            <p className="mt-1 text-base">{s.description}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">Beyond the campsite</h2>
      <p className="mt-4 text-base leading-relaxed">
        A lot of camping gear questions follow you home. For the indoor side of the same problems, we read
        <a href="https://www.sweetlivingroom.com/guide/indoor-outdoor-rugs-explained" target="_blank" rel="noopener noreferrer" className="underline">SweetLivingRoom on indoor outdoor rugs</a>, which covers the
        material and drainage trade-offs that also decide how an awning mat wears, and
        <a href="https://www.sweetlivingroom.com/guide/best-storage-ottomans" target="_blank" rel="noopener noreferrer" className="underline">its roundup of storage ottomans</a> for the gear that has to live in the
        house between trips. For everyday tools and appliances outside our own niche, <a href="https://www.senseireview.com/guide/best-coolers" target="_blank" rel="noopener noreferrer" className="underline">SenseiReview on coolers</a>
        is a useful second opinion.
      </p>

      <h2 className="mt-12 border-b border-ink pb-3 text-[1.75rem]">How we make money</h2>
      <p className="mt-4 text-base leading-relaxed">
        {SITE_NAME} is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no
        extra cost to you. Commissions never decide which products we recommend or how they are ranked. Read our{" "}
        <Link prefetch={false} href="/affiliate-disclosure">affiliate disclosure</Link> and{" "}
        <Link prefetch={false} href="/how-we-review">how we review</Link> for details.
      </p>
      <p className="mt-4 text-base leading-relaxed">
        Questions or corrections? <Link prefetch={false} href="/contact">Get in touch</Link>.
      </p>
    </article>
  );
}
