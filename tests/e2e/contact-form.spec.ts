import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test("form fields are present", async ({ page }) => {
    await page.goto("/#contact");
    await expect(page.locator("#name")).toBeVisible();
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#message")).toBeVisible();
  });

  test("submit button is visible", async ({ page }) => {
    await page.goto("/#contact");
    await expect(
      page.locator('button[type="submit"]:has-text("Send Message")')
    ).toBeVisible();
  });

  test("form fields have required attribute", async ({ page }) => {
    await page.goto("/#contact");
    await expect(page.locator("#name")).toHaveAttribute("required", "");
    await expect(page.locator("#email")).toHaveAttribute("required", "");
    await expect(page.locator("#message")).toHaveAttribute("required", "");
  });

  test("form does NOT submit to placeholder endpoint", async ({ page }) => {
    await page.goto("/#contact");

    // Intercept fetch calls to check the endpoint
    let submittedUrl = "";
    await page.route("**/formspree.io/**", (route) => {
      submittedUrl = route.request().url();
      // Abort the request — we don't want to actually submit in tests
      route.abort();
    });

    // Fill the form
    await page.fill("#name", "Test User");
    await page.fill("#email", "test@example.com");
    await page.fill("#message", "This is a test submission");
    await page.click('button[type="submit"]');

    // Wait a beat for the fetch to fire
    await page.waitForTimeout(1000);

    // The URL should contain a real form ID, not the placeholder
    expect(submittedUrl).not.toContain("YOUR_FORM_ID");
    expect(submittedUrl).toMatch(/formspree\.io\/f\/[a-zA-Z0-9]+/);
  });
});
