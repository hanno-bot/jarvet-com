import { describe, it, expect } from "vitest";
import { getAllPosts } from "@/lib/posts";

describe("Blog Posts", () => {
  const posts = getAllPosts();

  it("returns a non-empty array", () => {
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  it("posts are sorted newest-first", () => {
    for (let i = 1; i < posts.length; i++) {
      expect(
        new Date(posts[i - 1].date).getTime()
      ).toBeGreaterThanOrEqual(new Date(posts[i].date).getTime());
    }
  });

  it("each post has required frontmatter", () => {
    for (const post of posts) {
      expect(post.title, `Post "${post.slug}" missing title`).toBeTruthy();
      expect(post.date, `Post "${post.slug}" missing date`).toBeTruthy();
      expect(post.summary, `Post "${post.slug}" missing summary`).toBeTruthy();
      expect(
        Array.isArray(post.tags),
        `Post "${post.slug}" tags should be an array`
      ).toBe(true);
    }
  });

  it("slugs are URL-safe", () => {
    for (const post of posts) {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("no future-dated posts", () => {
    const now = new Date();
    for (const post of posts) {
      expect(
        new Date(post.date).getTime(),
        `Post "${post.slug}" is dated in the future`
      ).toBeLessThanOrEqual(now.getTime());
    }
  });
});
