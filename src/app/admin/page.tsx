import type { Metadata } from "next";
import Link from "next/link";
import { PostTable } from "@/components/admin/PostTable";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { getAllPostsForAdmin } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Painel administrativo",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const posts = await getAllPostsForAdmin();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl text-brand-brown-dark">Posts do blog</h1>
        <LogoutButton />
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-gold-dark"
        >
          + Novo post
        </Link>
      </div>

      <div className="mt-6">
        <PostTable posts={posts} />
      </div>
    </div>
  );
}
