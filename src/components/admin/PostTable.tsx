"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Post } from "@/lib/schema";

function formatDate(date: Date | string | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(
    new Date(date),
  );
}

export function PostTable({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const [pendingId, setPendingId] = useState<number | null>(null);

  async function togglePublished(post: Post) {
    setPendingId(post.id);
    try {
      await fetch(`/api/posts/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !post.published }),
      });
      router.refresh();
    } finally {
      setPendingId(null);
    }
  }

  async function handleDelete(post: Post) {
    if (!confirm(`Excluir o post "${post.title}"? Essa ação não pode ser desfeita.`)) return;
    setPendingId(post.id);
    try {
      await fetch(`/api/posts/${post.id}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setPendingId(null);
    }
  }

  if (posts.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-brand-brown/20 p-8 text-center text-brand-brown-dark/60">
        Nenhum post ainda. Clique em &quot;Novo post&quot; para escrever o primeiro.
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-brand-brown/10 bg-white">
      <table className="w-full text-sm">
        <thead className="bg-brand-cream-dark/60 text-left text-brand-brown-dark/70">
          <tr>
            <th className="px-4 py-3 font-medium">Título</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Atualizado em</th>
            <th className="px-4 py-3 font-medium text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-brown/10">
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="px-4 py-3 text-brand-brown-dark">{post.title}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    post.published
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {post.published ? "Publicado" : "Rascunho"}
                </span>
              </td>
              <td className="px-4 py-3 text-brand-brown-dark/70">{formatDate(post.updatedAt)}</td>
              <td className="px-4 py-3">
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    disabled={pendingId === post.id}
                    onClick={() => togglePublished(post)}
                    className="text-brand-gold-dark hover:underline disabled:opacity-50"
                  >
                    {post.published ? "Despublicar" : "Publicar"}
                  </button>
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="text-brand-brown-dark hover:underline"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    disabled={pendingId === post.id}
                    onClick={() => handleDelete(post)}
                    className="text-red-600 hover:underline disabled:opacity-50"
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
