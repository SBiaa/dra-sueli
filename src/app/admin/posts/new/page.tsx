import type { Metadata } from "next";
import { PostForm } from "@/components/admin/PostForm";

export const metadata: Metadata = {
  title: "Novo post",
  robots: { index: false, follow: false },
};

export default function NewPostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-6 font-serif text-3xl text-brand-brown-dark">Novo post</h1>
      <PostForm />
    </div>
  );
}
