import { NextResponse } from "next/server";
import { z } from "zod";
import { createPost, getAllPostsForAdmin, isSlugTaken } from "@/lib/posts";
import { sanitizeHtml } from "@/lib/sanitize";
import { slugify } from "@/lib/slugify";

const createPostSchema = z.object({
  title: z.string().trim().min(2).max(200),
  contentHtml: z.string().trim().min(1),
  excerpt: z.string().trim().max(500).optional(),
  coverImageUrl: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(false),
  slug: z.string().trim().max(200).optional(),
});

export async function GET() {
  const allPosts = await getAllPostsForAdmin();
  return NextResponse.json(allPosts);
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = createPostSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const { title, contentHtml, excerpt, coverImageUrl, published, slug: providedSlug } = parsed.data;

  let slug = slugify(providedSlug || title);
  if (!slug) {
    return NextResponse.json({ error: "Título inválido para gerar o link do post." }, { status: 400 });
  }

  let attempt = slug;
  let counter = 2;
  while (await isSlugTaken(attempt)) {
    attempt = `${slug}-${counter}`;
    counter += 1;
  }
  slug = attempt;

  const post = await createPost({
    title,
    slug,
    contentHtml: sanitizeHtml(contentHtml),
    excerpt: excerpt || null,
    coverImageUrl: coverImageUrl || null,
    published,
    publishedAt: published ? new Date() : null,
  });

  return NextResponse.json(post, { status: 201 });
}
