import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("Updates link navigates to /updates", async ({ page }) => {
    await page.goto("/");
    await page.click('nav a[href="/updates"]');
    await expect(page).toHaveURL("/updates");
  });

  test("Case Studies link navigates to /case-studies", async ({ page }) => {
    await page.goto("/");
    await page.click('nav a[href="/case-studies"]');
    await expect(page).toHaveURL("/case-studies");
  });

  test("JARVET logo navigates home", async ({ page }) => {
    await page.goto("/updates");
    await page.click('a:has-text("JARVET")');
    await expect(page).toHaveURL("/");
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Menu should be hidden initially
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();

    // Open menu
    await menuButton.click();
    await expect(page.locator('button[aria-label="Close menu"]')).toBeVisible();

    // Close menu
    await page.click('button[aria-label="Close menu"]');
    await expect(
      page.locator('button[aria-label="Open menu"]')
    ).toBeVisible();
  });

  test("blog post link from listing works", async ({ page }) => {
    await page.goto("/updates");
    // Click the first blog post link
    const firstPost = page.locator("article a, a:has(h3)").first();
    if ((await firstPost.count()) > 0) {
      await firstPost.click();
      await expect(page).toHaveURL(/\/updates\/.+/);
      // Post page should have an h1
      await expect(page.locator("h1")).toBeVisible();
    }
  });
});
