import { test, expect } from "@playwright/test";

test.describe("Case Studies", () => {
  test("page renders with 200 status", async ({ page }) => {
    const response = await page.goto("/case-studies");
    expect(response?.status()).toBe(200);
  });

  test("has page heading", async ({ page }) => {
    await page.goto("/case-studies");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("all 5 case studies are present", async ({ page }) => {
    await page.goto("/case-studies");
    const articles = page.locator("article");
    expect(await articles.count()).toBe(5);
  });

  test("CTA section exists at bottom", async ({ page }) => {
    await page.goto("/case-studies");
    await expect(
      page.locator('a[href="/#contact"], a[href="#contact"]').first()
    ).toBeVisible();
  });
});
