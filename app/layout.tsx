import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "g2m.xyz | Productized GTM & Paid Media Agency",
  description:
    "Productized GTM and Paid Media management for B2B SaaS brands. Deploy faster, scale profitably, and grow pipeline without adding headcount.",
  keywords: [
    "Paid Media Management",
    "Go To Market Strategy",
    "B2B SaaS Growth",
    "Productized GTM Agency",
    "Performance Marketing",
  ],
  openGraph: {
    title: "g2m.xyz | Productized GTM & Paid Media Agency",
    description:
      "A dedicated growth squad for paid media execution, GTM strategy, and B2B SaaS pipeline acceleration.",
    url: "https://g2m.xyz",
    siteName: "g2m.xyz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://g2m.xyz/og/g2m-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "g2m.xyz Productized GTM and Paid Media Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "g2m.xyz | Productized GTM & Paid Media Agency",
    description:
      "Go to market execution and paid media management for B2B SaaS growth teams.",
    images: ["https://g2m.xyz/og/g2m-og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "g2m.xyz",
    url: "https://g2m.xyz",
    description:
      "Productized GTM and Paid Media Agency delivering subscription-based growth execution for B2B SaaS.",
    areaServed: "Global",
    serviceType: ["Paid Media Management", "Go To Market Strategy", "B2B SaaS Growth"],
    knowsAbout: ["Performance Marketing", "Demand Generation", "Growth Strategy", "Media Buying"],
    audience: {
      "@type": "Audience",
      audienceType: "B2B SaaS companies",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geist.variable} font-sans`}>{children}</body>
    </html>
  );
}
