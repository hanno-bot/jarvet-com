import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const srcDir = path.join(process.cwd(), "src");

function readFile(relativePath: string): string {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
}

function getAllSourceFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllSourceFiles(fullPath));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

describe("Config Validation", () => {
  it("ContactForm uses a real Formspree ID, not a placeholder", () => {
    const content = readFile("src/components/ContactForm.tsx");
    expect(content).not.toContain("YOUR_FORM_ID");
    expect(content).toMatch(/formspree\.io\/f\/[a-zA-Z0-9]+/);
  });

  it("no placeholder strings in source files", () => {
    const sourceFiles = getAllSourceFiles(srcDir);
    const placeholderPatterns = [
      /YOUR_FORM_ID/,
      /REPLACE_ME/,
      /TODO_REPLACE/,
      /xxx-placeholder/,
    ];

    for (const file of sourceFiles) {
      const content = fs.readFileSync(file, "utf8");
      const relativePath = path.relative(process.cwd(), file);
      for (const pattern of placeholderPatterns) {
        expect(
          content,
          `Found placeholder "${pattern.source}" in ${relativePath}`
        ).not.toMatch(pattern);
      }
    }
  });

  it("metadataBase is set to https://jarvet.com", () => {
    const content = readFile("src/app/layout.tsx");
    expect(content).toContain("https://jarvet.com");
    expect(content).toContain("metadataBase");
  });

  it("canonical URLs use https", () => {
    const content = readFile("src/app/layout.tsx");
    // Should not contain http://jarvet.com (non-https)
    expect(content).not.toMatch(/http:\/\/jarvet\.com/);
  });
});
