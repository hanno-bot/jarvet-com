import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  test("homepage has title containing Jarvet", async ({ page }) => {
    await page.goto("/");
    const title = await page.title();
    expect(title.toLowerCase()).toContain("jarvet");
  });

  test("homepage has meta description", async ({ page }) => {
    await page.goto("/");
    const desc = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(desc).toBeTruthy();
    expect(desc!.length).toBeGreaterThan(20);
  });

  test("Open Graph tags are present", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator('meta[property="og:title"]')
    ).toHaveAttribute("content", /.+/);
    await expect(
      page.locator('meta[property="og:description"]')
    ).toHaveAttribute("content", /.+/);
  });

  test("JSON-LD structured data is valid", async ({ page }) => {
    await page.goto("/");
    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(jsonLd).toBeTruthy();

    const parsed = JSON.parse(jsonLd!);
    // Should be a graph or contain Person/ProfessionalService
    const jsonString = JSON.stringify(parsed);
    expect(jsonString).toContain("Person");
    expect(jsonString).toContain("ProfessionalService");
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.status()).toBe(200);
    const text = await page.textContent("body");
    expect(text).toContain("Sitemap");
  });

  test("sitemap.xml is accessible", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.status()).toBe(200);
  });

  test("llms.txt is accessible with key content", async ({ page }) => {
    const response = await page.goto("/llms.txt");
    expect(response?.status()).toBe(200);
    const text = await page.textContent("body");
    expect(text).toContain("Hanno Jarvet");
  });
});
