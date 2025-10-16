import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Electro Satellite Tunisie | Leader IPTV & Streaming en Tunisie",
    template: "%s | Electro Satellite Tunisie"
  },
  description: "Leader en Tunisie pour les abonnements IPTV premium, Sharing & Apollo, Box Android 4K, BeIN Sports, Netflix officiel et accessoires streaming. Qualité HD/4K, support 24/7, livraison rapide.",
  keywords: [
    "IPTV Tunisie", "abonnement IPTV", "streaming Tunisie", "Netflix Tunisie",
    "Box Android", "BeIN Sports", "Shahid VIP", "Apollo IPTV", "Xtream",
    "streaming premium", "chaînes TV", "séries", "films", "sport"
  ],
  authors: [{ name: "Younsi Alaeddine" }],
  creator: "Younsi Alaeddine",
  publisher: "Electro Satellite Tunisie",
  metadataBase: new URL("https://electro-satellite.tn"),
  alternates: {
    canonical: "/",
    languages: {
      'fr-TN': '/',
      'ar-TN': '/ar',
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://electro-satellite.tn",
    siteName: "Electro Satellite Tunisie",
    title: "Electro Satellite Tunisie | Leader IPTV & Streaming",
    description: "Abonnements IPTV premium, Box Android, Streaming officiel. Qualité HD/4K, support 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Electro Satellite Tunisie - IPTV & Streaming Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electro Satellite Tunisie | IPTV Premium",
    description: "Leader en Tunisie pour IPTV, Streaming et Box Android",
    images: ["/og-image.jpg"],
    creator: "@electro_satellite_tn",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

// Schema JSON pour le SEO
const schemaJson = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Electro Satellite Tunisie",
  "description": "Leader en Tunisie pour les abonnements IPTV premium, Sharing & Apollo, Box Android 4K, BeIN Sports, Netflix officiel et accessoires streaming.",
  "url": "https://electro-satellite.tn",
  "logo": "https://electro-satellite.tn/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+216-25-288-323",
    "contactType": "customer service",
    "areaServed": "TN",
    "availableLanguage": ["French", "Arabic"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TN",
    "addressLocality": "Tunis"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
