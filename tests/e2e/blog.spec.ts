import { test, expect } from "@playwright/test";

test.describe("Blog", () => {
  test("blog listing page renders", async ({ page }) => {
    const response = await page.goto("/updates");
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("at least one post is listed", async ({ page }) => {
    await page.goto("/updates");
    const posts = page.locator("article");
    expect(await posts.count()).toBeGreaterThan(0);
  });

  test("individual blog post renders with content", async ({ page }) => {
    const response = await page.goto(
      "/updates/turning-strategy-into-action"
    );
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    // Should have prose content
    await expect(page.locator(".prose").first()).toBeVisible();
  });
});
