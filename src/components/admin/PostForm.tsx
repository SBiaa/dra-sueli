"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { RichTextEditor } from "./Editor";
import type { Post } from "@/lib/schema";

export function PostForm({ post }: { post?: Post }) {
  const router = useRouter();
  const isEditing = Boolean(post);

  const [title, setTitle] = useState(post?.title ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [contentHtml, setContentHtml] = useState(post?.contentHtml ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(post?.coverImageUrl ?? "");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  async function handleCoverUpload(file: File) {
    setUploadingCover(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Falha ao enviar imagem.");
      }
      const { url } = await res.json();
      setCoverImageUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar imagem.");
    } finally {
      setUploadingCover(false);
    }
  }

  async function handleSave(publish: boolean) {
    setSaving(true);
    setError(null);

    const payload = {
      title,
      contentHtml,
      excerpt: excerpt || undefined,
      coverImageUrl: coverImageUrl || undefined,
      published: publish,
    };

    try {
      const res = await fetch(isEditing ? `/api/posts/${post!.id}` : "/api/posts", {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Não foi possível salvar o post.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium text-brand-brown-dark">
          Título
        </label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-brand-brown/20 bg-white px-4 py-2.5 text-lg text-brand-brown-dark outline-none focus:border-brand-gold"
          placeholder="Título do post"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-brand-brown-dark">
          Imagem de capa (opcional)
        </label>
        {coverImageUrl && (
          <div className="relative mb-3 h-40 w-full max-w-sm overflow-hidden rounded-lg border border-brand-brown/10">
            <Image src={coverImageUrl} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => coverInputRef.current?.click()}
            disabled={uploadingCover}
            className="rounded-full border border-brand-brown/20 px-4 py-2 text-sm font-medium text-brand-brown-dark hover:bg-brand-cream-dark disabled:opacity-50"
          >
            {uploadingCover ? "Enviando..." : coverImageUrl ? "Trocar imagem" : "Adicionar imagem"}
          </button>
          {coverImageUrl && (
            <button
              type="button"
              onClick={() => setCoverImageUrl("")}
              className="text-sm text-red-600 hover:underline"
            >
              Remover
            </button>
          )}
        </div>
        <input
          ref={coverInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleCoverUpload(file);
            e.target.value = "";
          }}
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="mb-1 block text-sm font-medium text-brand-brown-dark">
          Resumo (opcional, aparece na listagem do blog)
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          className="w-full rounded-lg border border-brand-brown/20 bg-white px-4 py-2.5 text-brand-brown-dark outline-none focus:border-brand-gold"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-brand-brown-dark">Texto</label>
        <RichTextEditor content={contentHtml} onChange={setContentHtml} />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="button"
          disabled={saving || !title || !contentHtml}
          onClick={() => handleSave(true)}
          className="rounded-full bg-brand-gold px-6 py-2.5 font-medium text-white transition hover:bg-brand-gold-dark disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Publicar"}
        </button>
        <button
          type="button"
          disabled={saving || !title || !contentHtml}
          onClick={() => handleSave(false)}
          className="rounded-full border border-brand-brown/20 px-6 py-2.5 font-medium text-brand-brown-dark transition hover:bg-brand-cream-dark disabled:opacity-50"
        >
          Salvar como rascunho
        </button>
      </div>
    </div>
  );
}
