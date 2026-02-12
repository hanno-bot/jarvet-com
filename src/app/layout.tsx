import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jarvet.com"),
  title: {
    default: "Jarvet Consulting | Turning Challenges into Opportunities",
    template: "%s | Jarvet Consulting",
  },
  description:
    "Bespoke strategic consulting specializing in rapid turnarounds. Utilizing Wardley Mapping to equip leaders with tailored strategies for immediate impact and long-term success.",
  keywords: [
    "strategic consulting",
    "Wardley Mapping",
    "business strategy",
    "rapid turnaround",
    "strategy formulation",
    "execution planning",
    "growth advisory",
    "Hanno Jarvet",
    "strategic turnaround",
  ],
  authors: [{ name: "Hanno Jarvet", url: "https://jarvet.com" }],
  creator: "Hanno Jarvet",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jarvet.com",
    siteName: "Jarvet Consulting",
    title: "Jarvet Consulting | Turning Challenges into Opportunities",
    description:
      "Bespoke strategic consulting specializing in rapid turnarounds. Utilizing Wardley Mapping to equip leaders with tailored strategies for immediate impact and long-term success.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarvet Consulting | Turning Challenges into Opportunities",
    description:
      "Bespoke strategic consulting specializing in rapid turnarounds. Utilizing Wardley Mapping for immediate impact and long-term success.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jarvet.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jarvet.com/#person",
      name: "Hanno Jarvet",
      url: "https://jarvet.com",
      jobTitle: "Strategic Consultant",
      description:
        "Bespoke strategic consulting specializing in rapid turnarounds for businesses facing fast-paced market changes. Utilizing Wardley Mapping to equip leaders with tailored strategies.",
      email: "hanno@jarvet.com",
      knowsAbout: [
        "Business Strategy",
        "Wardley Mapping",
        "Strategic Turnarounds",
        "Execution Planning",
        "Growth Advisory",
        "Competitive Positioning",
        "Organizational Transformation",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://jarvet.com/#service",
      name: "Jarvet Consulting",
      url: "https://jarvet.com",
      description:
        "Bespoke strategic consulting specializing in rapid turnarounds. Customized strategic solutions, enhanced decision-making through Wardley Mapping, and long-term success planning.",
      provider: { "@id": "https://jarvet.com/#person" },
      serviceType: "Strategic Consulting",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Customized Strategic Solutions",
              description:
                "Tailoring strategies specifically to your organization's unique needs and goals for more effective and impactful outcomes.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rapid Adaptation to Market Changes",
              description:
                "Enabling businesses to swiftly adjust and respond to fast-paced, ever-changing market conditions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enhanced Decision-Making",
              description:
                "Utilizing advanced tools like Wardley Mapping to provide deep insights and clarity for strategic decisions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Long-Term Success and Growth",
              description:
                "Building a solid foundation for sustained growth and positioning your organization for future opportunities.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://jarvet.com/#website",
      url: "https://jarvet.com",
      name: "Jarvet Consulting",
      publisher: { "@id": "https://jarvet.com/#person" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://jarvet.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What exactly does the Strategic Turnaround Blueprint involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Strategic Turnaround Blueprint is a comprehensive, customized strategy plan. It involves analyzing your current business state, identifying key areas for improvement, and developing a tailored strategy using innovative tools like Wardley Mapping.",
          },
        },
        {
          "@type": "Question",
          name: "How is this service different from traditional business consulting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional consulting, which often relies on generic solutions, our service is highly personalized and adaptive. We focus on rapid, agile strategy development tailored to your business's unique needs, using advanced tools like Wardley Mapping.",
          },
        },
        {
          "@type": "Question",
          name: "How much time will this require from me and my team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The initial blueprint process involves three 90-minute workshops, along with some additional time for data gathering and discussions. We aim to minimize disruption to your daily operations while maximizing value and impact.",
          },
        },
        {
          "@type": "Question",
          name: "Why should I book a call with Hanno?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking a call is a great opportunity to discuss your specific challenges and goals directly with an expert. It's a no-obligation, high-value opportunity to explore how the Strategic Turnaround Blueprint can be tailored to your needs.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
          {children}
          <Analytics />
        </body>
    </html>
  );
}
