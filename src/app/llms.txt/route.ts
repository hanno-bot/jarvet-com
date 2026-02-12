export function GET() {
  const content = `# Jarvet Consulting
> Bespoke strategic consulting specializing in rapid turnarounds

## About
Jarvet Consulting is the professional practice of Hanno Jarvet, a strategic consultant who helps organizations turn challenges into opportunities. He specializes in rapid turnarounds for businesses facing fast-paced market changes, utilizing innovative methods like Wardley Mapping.

## Services
- Customized Strategic Solutions: Tailored strategies for your organization's unique needs and goals
- Rapid Adaptation to Market Changes: Swift adjustment to fast-paced, ever-changing market conditions
- Enhanced Decision-Making: Deep insights through advanced tools like Wardley Mapping
- Long-Term Success and Growth: Building solid foundations for sustained growth

## The Strategic Turnaround Blueprint (EUR 999)
A comprehensive, customized strategy engagement that includes:
1. A Personalized Blueprint tailored to your organization
2. Three 90-minute Interactive Workshops
3. Exclusive Tools and Resources including Wardley Mapping
4. A Customized Strategic Report with actionable steps

## Ideal For
CEOs, CTOs, founders, and executives aiming to stay ahead of the curve and drive meaningful change.

## Contact
- Email: hanno@jarvet.com
- Website: https://jarvet.com
- Free 30-minute strategy session available

## Location
Worldwide (remote consulting)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
