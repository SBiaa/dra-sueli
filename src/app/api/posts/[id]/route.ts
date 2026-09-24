import { NextResponse } from "next/server";
import { z } from "zod";
import { deletePost, getPostById, isSlugTaken, updatePost } from "@/lib/posts";
import { sanitizeHtml } from "@/lib/sanitize";
import { slugify } from "@/lib/slugify";

const updatePostSchema = z.object({
  title: z.string().trim().min(2).max(200).optional(),
  contentHtml: z.string().trim().min(1).optional(),
  excerpt: z.string().trim().max(500).optional().nullable(),
  coverImageUrl: z.string().url().optional().nullable().or(z.literal("")),
  published: z.boolean().optional(),
  slug: z.string().trim().max(200).optional(),
});

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const post = await getPostById(Number(id));
  if (!post) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const postId = Number(id);
  const existing = await getPostById(postId);
  if (!existing) {
    return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
  }

  const json = await request.json().catch(() => null);
  const parsed = updatePostSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const data = parsed.data;
  const update: Record<string, unknown> = {};

  if (data.title !== undefined) update.title = data.title;
  if (data.contentHtml !== undefined) update.contentHtml = sanitizeHtml(data.contentHtml);
  if (data.excerpt !== undefined) update.excerpt = data.excerpt || null;
  if (data.coverImageUrl !== undefined) update.coverImageUrl = data.coverImageUrl || null;

  if (data.slug !== undefined) {
    const newSlug = slugify(data.slug);
    if (newSlug && newSlug !== existing.slug) {
      if (await isSlugTaken(newSlug, postId)) {
        return NextResponse.json({ error: "Esse link já está em uso por outro post." }, { status: 409 });
      }
      update.slug = newSlug;
    }
  }

  if (data.published !== undefined) {
    update.published = data.published;
    if (data.published && !existing.publishedAt) {
      update.publishedAt = new Date();
    }
    if (!data.published) {
      update.publishedAt = null;
    }
  }

  const post = await updatePost(postId, update);
  return NextResponse.json(post);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await deletePost(Number(id));
  return NextResponse.json({ ok: true });
}
