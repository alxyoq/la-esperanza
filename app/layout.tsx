import type { Metadata } from "next";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { fullAddress, site } from "@/app/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mexicanhope.com"),
  title: {
    default: "La Esperanza | Mexican Restaurant & Bar in Lindenwold, NJ",
    template: "%s | La Esperanza",
  },
  description: site.description,
  keywords: [
    "Mexican restaurant Lindenwold NJ",
    "authentic Mexican food South Jersey",
    "La Esperanza Mexican Restaurant",
    "mole poblano",
    "Mexican catering South Jersey",
    "Mexican restaurant near Clementon NJ",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
    images: [
      {
        url: "/images/hero-feast.webp",
        width: 1672,
        height: 941,
        alt: "A table of La Esperanza-inspired Mexican specialties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
    images: ["/images/hero-feast.webp"],
  },
  icons: {
    icon: "/images/la-esperanza-mark.png",
    shortcut: "/images/la-esperanza-mark.png",
    apple: "/images/la-esperanza-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.fullName,
    alternateName: site.name,
    description: site.description,
    url: "https://mexicanhope.com",
    telephone: site.phoneHref,
    email: site.email,
    image: "https://mexicanhope.com/images/hero-feast.webp",
    servesCuisine: ["Mexican", "Latin American"],
    priceRange: "$$",
    acceptsReservations: true,
    menu: "https://mexicanhope.com/menu",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    sameAs: [site.social.instagram, site.social.facebook],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <span className="sr-only">{fullAddress}</span>
      </body>
    </html>
  );
}
