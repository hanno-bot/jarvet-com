import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads with 200 status", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.status()).toBe(200);
  });

  test("hero section is visible with updated headline", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1:has-text('Most strategies fail')")).toBeVisible();
    await expect(
      page.locator('[aria-label="Introduction"]').locator("text=Strategic Situational Awareness")
    ).toBeVisible();
  });

  test("all major sections exist", async ({ page }) => {
    await page.goto("/");
    // Check sections by aria-label or id
    await expect(page.locator('[aria-label="Introduction"]')).toBeVisible();
    await expect(page.locator('[aria-label="The challenge"]')).toBeVisible();
    await expect(page.locator('[aria-label="Cost of inaction"]')).toBeVisible();
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator("#what-you-get")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#testimonials")).toBeVisible();
    await expect(page.locator("#faq")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("desktop navigation links are present", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav.locator('a[href="#services"]')).toBeVisible();
    await expect(nav.locator('a[href="#what-you-get"]')).toBeVisible();
    await expect(nav.locator('a[href="#about"]')).toBeVisible();
    await expect(nav.locator('a[href="#testimonials"]')).toBeVisible();
    await expect(nav.locator('a[href="/updates"]')).toBeVisible();
    await expect(nav.locator('a[href="/case-studies"]')).toBeVisible();
  });

  test("footer contains copyright and LinkedIn link", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator('[aria-label="Site footer"]');
    await expect(footer.locator("text=Jarvet Consulting")).toBeVisible();
    await expect(
      footer.locator('a[href="https://www.linkedin.com/in/hannojarvet/"]')
    ).toBeVisible();
  });

  test("CTA buttons link to contact section", async ({ page }) => {
    await page.goto("/");
    const heroCta = page.locator(
      'a:has-text("Book a Free 30-Minute Strategy Session")'
    ).first();
    await expect(heroCta).toHaveAttribute("href", "#contact");
  });
});
