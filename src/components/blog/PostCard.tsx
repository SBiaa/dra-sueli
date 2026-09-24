import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/schema";

function formatDate(date: Date | string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(date));
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-brown/10 bg-white shadow-sm transition hover:border-brand-gold/50 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-cream-dark">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt=""
            fill
            className="object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src="/images/icon-logo.png"
              alt=""
              width={64}
              height={64}
              className="h-14 w-auto opacity-40"
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-brand-brown-dark/50">{formatDate(post.publishedAt)}</p>
        <h3 className="mt-1 font-serif text-lg text-brand-brown-dark group-hover:text-brand-gold-dark">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm text-brand-brown-dark/70">{post.excerpt}</p>
        )}
        <span className="mt-4 text-sm font-medium text-brand-gold-dark">Ler mais →</span>
      </div>
    </Link>
  );
}
