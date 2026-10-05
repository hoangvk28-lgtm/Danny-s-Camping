import Image from "next/image";
import Link from "next/link";
import type { Author } from "@/data/authors";

/** Author card shown at the end of guides. */
export function AuthorBox({ author }: { author: Author }) {
  const href = `/author/${author.slug}`;
  return (
    <section aria-labelledby="about-author" className="mt-14 flex gap-5 border-y border-border py-6">
      {author.avatarUrl && (
        <Image src={author.avatarUrl} alt={`${author.name}, ${author.role}`} width={72} height={72} className="h-[72px] w-[72px] shrink-0 rounded-full object-cover" />
      )}
      <div>
        <p className="eyebrow">About the author</p>
        <h2 id="about-author" className="mt-1 text-[1.25rem] leading-tight">
          <Link prefetch={false} href={href} className="!text-ink hover:!text-brand">{author.name}</Link>
        </h2>
        <p className="text-sm text-ink-secondary">{author.role}</p>
        <p className="mt-3 max-w-[64ch] text-[0.9375rem] leading-relaxed">{author.bio}</p>
        <p className="mt-3 text-sm">
          <Link prefetch={false} href={href} className="font-semibold">More from {author.name.split(" ")[0]} →</Link>
          <span aria-hidden className="mx-2 text-ink-secondary">·</span>
          <Link prefetch={false} href="/how-we-review" className="font-semibold">Editorial standards</Link>
        </p>
      </div>
    </section>
  );
}
