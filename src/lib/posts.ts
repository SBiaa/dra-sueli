import { and, desc, eq, ne } from "drizzle-orm";
import { db } from "./db";
import { posts, type NewPost } from "./schema";

export async function getPublishedPosts() {
  return db
    .select()
    .from(posts)
    .where(eq(posts.published, true))
    .orderBy(desc(posts.publishedAt));
}

export async function getPublishedPostBySlug(slug: string) {
  const rows = await db
    .select()
    .from(posts)
    .where(and(eq(posts.slug, slug), eq(posts.published, true)))
    .limit(1);
  return rows[0] ?? null;
}

export async function getAllPostsForAdmin() {
  return db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function getPostById(id: number) {
  const rows = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return rows[0] ?? null;
}

export async function isSlugTaken(slug: string, excludeId?: number) {
  const rows = await db
    .select({ id: posts.id })
    .from(posts)
    .where(excludeId ? and(eq(posts.slug, slug), ne(posts.id, excludeId)) : eq(posts.slug, slug))
    .limit(1);
  return rows.length > 0;
}

export async function createPost(input: NewPost) {
  const rows = await db.insert(posts).values(input).returning();
  return rows[0];
}

export async function updatePost(id: number, input: Partial<NewPost>) {
  const rows = await db
    .update(posts)
    .set({ ...input, updatedAt: new Date() })
    .where(eq(posts.id, id))
    .returning();
  return rows[0] ?? null;
}

export async function deletePost(id: number) {
  await db.delete(posts).where(eq(posts.id, id));
}
