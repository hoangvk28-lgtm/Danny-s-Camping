import { partnerSites, rotatedPrimaryPartners, type PartnerSite } from "@/data/partner-sites";

// These are plain <a> elements on purpose: they point at other domains, so
// next/link (and the project's prefetch={false} rule) does not apply. They are
// editorial links, so they stay dofollow - no rel="nofollow"/"sponsored".
const REL = "noopener noreferrer";

/**
 * Site-wide row of network links, rendered inside the footer so it appears on
 * every page, including the noindexed guide articles (noindex, follow still
 * lets crawlers follow these).
 */
export function PartnerNetworkFooter() {
  return (
    <nav aria-labelledby="footer-network" className="mt-10 border-t border-border pt-6">
      <h2 id="footer-network" className="eyebrow !text-ink-secondary">
        More from our network
      </h2>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem]">
        {partnerSites.map((site) => (
          <li key={site.host}>
            <a
              href={site.url}
              rel={REL}
              className="!text-ink hover:!text-brand focus-ring"
              title={site.blurb}
            >
              {site.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * Richer card section with the blurb as context. Used on the indexable pages
 * (homepage and the silo hubs), where the link sits in real content rather than
 * in boilerplate.
 */
export function PartnerNetworkSection({
  seed,
  count = 3,
  heading = "Also worth reading",
  className = "",
}: {
  /** Page-specific string (e.g. the silo slug) so hubs lead with different sites. */
  seed: string;
  count?: number;
  heading?: string;
  className?: string;
}) {
  const sites: PartnerSite[] = rotatedPrimaryPartners(seed, count);
  if (sites.length === 0) return null;

  return (
    <section aria-labelledby={`network-${seed}`} className={className}>
      <h2 id={`network-${seed}`} className="eyebrow !text-ink-secondary">
        {heading}
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site) => (
          <li key={site.host} className="border-t border-ink pt-3">
            <a href={site.url} rel={REL} className="!text-ink hover:!text-brand focus-ring font-semibold">
              {site.label}
            </a>
            <p className="mt-1 text-sm text-ink-secondary">{site.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
