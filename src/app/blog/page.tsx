import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos sobre Direito Previdenciário e Civil, em linguagem simples.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const publishedPosts = await getPublishedPosts();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold-dark">
        Blog
      </p>
      <h1 className="font-serif text-4xl text-brand-brown-dark">Artigos</h1>
      <p className="mt-4 max-w-2xl text-brand-brown-dark/75">
        Conteúdo sobre Direito Previdenciário e Civil, explicado em linguagem simples.
      </p>

      {publishedPosts.length === 0 ? (
        <p className="mt-12 text-brand-brown-dark/60">
          Em breve, novos artigos por aqui. Volte mais tarde!
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
