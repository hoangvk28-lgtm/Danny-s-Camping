import Link from "next/link";

/** Reusable "Why You Can Trust Danny’s Camping" block for buying guides. */
export function TrustBlock({ handsOnTested = false }: { handsOnTested?: boolean }) {
  return (
    <section aria-labelledby="why-trust" className="mt-12 border-l-4 border-accent bg-surface px-5 py-6 sm:px-7">
      <h2 id="why-trust" className="text-[1.375rem] leading-tight sm:text-[1.5rem]">Why You Can Trust Danny’s Camping</h2>
      <p className="mt-3 max-w-[68ch]">
        At Danny’s Camping, we compare products based on campsite fit, verified specifications, usability, setup requirements,
        weight, durability, and real-world trade-offs. We do not rank products purely on marketing claims or commission rates.
      </p>
      {!handsOnTested && (
        <p className="mt-3 max-w-[68ch] text-ink-secondary">
          We have not personally tested every product listed. Where hands-on testing is not available, recommendations are based on
          verified manufacturer specifications, product documentation, use-case fit, and comparative research.
        </p>
      )}
      <p className="mt-3 text-sm">
        <Link prefetch={false} href="/how-we-review" className="font-semibold">How we review camping gear →</Link>
      </p>
    </section>
  );
}
