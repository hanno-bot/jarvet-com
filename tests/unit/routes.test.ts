import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Route Content Validation", () => {
  it("llms.txt route returns key content", async () => {
    // Read the route source to validate content is present
    const routePath = path.join(process.cwd(), "src/app/llms.txt/route.ts");
    const content = fs.readFileSync(routePath, "utf8");

    expect(content).toContain("Hanno Jarvet");
    expect(content).toContain("hanno@jarvet.com");
    expect(content).toContain("text/plain");
  });

  it("sitemap includes all required pages", async () => {
    const sitemapPath = path.join(process.cwd(), "src/app/sitemap.ts");
    const content = fs.readFileSync(sitemapPath, "utf8");

    // The sitemap generator should reference these pages
    expect(content).toContain("jarvet.com");
    expect(content).toContain("/updates");
    expect(content).toContain("/case-studies");
  });

  it("robots.ts allows key crawlers", () => {
    const robotsPath = path.join(process.cwd(), "src/app/robots.ts");
    const content = fs.readFileSync(robotsPath, "utf8");

    expect(content).toContain("GPTBot");
    expect(content).toContain("ClaudeBot");
    expect(content).toContain("sitemap");
  });
});
