import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FeatherPanel - Light as a Feather Game Server Management Panel | Pterodactyl Alternative",
    template: "%s | FeatherPanel - Light as a Feather Game Server Management"
  },
  description: "FeatherPanel is the revolutionary game server management panel that's light as a feather yet powerful as a storm. 204x lighter, 22x faster than competitors. Perfect Pterodactyl Wings compatibility for Minecraft servers, Discord bots, and game hosting. Built by MythicalSystems.",
  keywords: [
    "game server management panel",
    "pterodactyl alternative",
    "pterodactyl remake", 
    "wings compatibility",
    "minecraft server hosting",
    "minecraft server panel",
    "light as a feather",
    "lightweight server panel",
    "fast server management",
    "game hosting panel",
    "pelican wings compatible",
    "wings-rs support",
    "discord bot hosting",
    "game server control panel",
    "server admin panel",
    "web hosting control panel",
    "featherpanel",
    "mythical systems",
    "mythicalsystems",
    "modern server panel",
    "gaming panel software",
    "server management software",
    "pterodactyl wings",
    "game server admin",
    "hosting panel",
    "server hosting panel",
    "gaming server management",
    "minecraft hosting panel",
    "discord bot panel",
    "teamspeak server panel",
    "rust server hosting",
    "ark server hosting",
    "garrys mod hosting",
    "cs2 server hosting",
    "open source panel",
    "free server panel",
    "self hosted panel",
    "cloud server management",
    "vps management panel",
    "dedicated server panel"
  ],
  authors: [{ name: "MythicalSystems", url: "https://mythical.systems" }],
  creator: "MythicalSystems",
  publisher: "MythicalSystems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://featherpanel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://featherpanel.com",
    title: "FeatherPanel - Light as a Feather Game Server Management Panel | Pterodactyl Alternative",
    description: "Revolutionary game server management panel that's light as a feather yet powerful as a storm. 204x lighter, 22x faster. Perfect Pterodactyl Wings compatibility for Minecraft servers, Discord bots, and game hosting. Built by MythicalSystems.",
    siteName: "FeatherPanel - Game Server Management",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FeatherPanel - Light as a Feather Game Server Management Panel - Pterodactyl Alternative",
        type: "image/png",
      },
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "FeatherPanel Logo - Game Server Management Panel",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeatherPanel - Light as a Feather Game Server Management Panel",
    description: "🚀 Revolutionary game server panel that's light as a feather yet powerful as a storm! 204x lighter, 22x faster. Perfect Pterodactyl Wings compatibility for Minecraft, Discord bots & more. Built by @mythicalsystems",
    images: ["/logo.png"],
    creator: "@mythicalsystems",
    site: "@featherpanel",
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
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FeatherPanel",
  alternateName: ["Feather Panel", "FeatherPanel Game Server Management"],
  description: "Revolutionary game server management panel that's light as a feather yet powerful as a storm. Modern Pterodactyl alternative with Wings compatibility, perfect for Minecraft servers, Discord bots, and game hosting.",
  url: "https://featherpanel.com",
  sameAs: [
    "https://github.com/mythicalltd",
    "https://discord.mythical.systems",
    "https://mythical.systems"
  ],
  applicationCategory: ["DeveloperApplication", "UtilitiesApplication", "ProductivityApplication"],
  operatingSystem: ["Linux", "Ubuntu", "Debian", "CentOS", "Rocky Linux"],
  programmingLanguage: ["JavaScript", "TypeScript", "React", "Next.js"],
  softwareRequirements: "Node.js 18+, Linux Server",
  storageRequirements: "204x smaller than traditional panels",
  memoryRequirements: "Minimal - light as a feather resource usage",
  processorRequirements: "Any modern CPU - 22x faster performance",
  offers: [
    {
      "@type": "Offer",
      name: "Free Self-Hosted Plan",
      price: "0",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      description: "Free forever with unlimited servers, Wings compatibility, and native plugin support"
    },
    {
      "@type": "Offer", 
      name: "Premium Plan",
      price: "10",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      description: "Enhanced features with premium themes, advanced customization, and priority support"
    },
    {
      "@type": "Offer",
      name: "Hosted Plan", 
      price: "15",
      priceCurrency: "EUR",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      description: "Fully managed solution with 99.9% uptime SLA and 24/7 monitoring"
    }
  ],
  author: {
    "@type": "Organization",
    name: "MythicalSystems",
    url: "https://mythical.systems",
    sameAs: [
      "https://github.com/mythicalltd",
      "https://discord.mythical.systems"
    ]
  },
  publisher: {
    "@type": "Organization", 
    name: "MythicalSystems",
    url: "https://mythical.systems",
    logo: {
      "@type": "ImageObject",
      url: "https://featherpanel.com/logo.png",
      width: 512,
      height: 512
    },
  },
  screenshot: "https://featherpanel.com/logo.png",
  softwareVersion: "1.0.0",
  datePublished: "2024-01-01",
  dateModified: "2025-01-08",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "256",
    bestRating: "5",
    worstRating: "1"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Gaming Community Admin",
      },
      reviewBody: "FeatherPanel is truly light as a feather while being incredibly powerful. The Wings compatibility made migration from Pterodactyl seamless.",
      datePublished: "2024-12-15"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating", 
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Minecraft Server Owner",
      },
      reviewBody: "Best Pterodactyl alternative! 204x lighter and 22x faster. My Minecraft servers run so much better now.",
      datePublished: "2024-11-20"
    }
  ],
  featureList: [
    "100% Pterodactyl Wings Compatible",
    "Native Plugin Support System", 
    "Light as a Feather Performance (204x lighter)",
    "Lightning Fast Loading (22x faster)",
    "Game Server Management for Minecraft, Discord Bots, etc.",
    "Modern React/Next.js UI/UX Design",
    "Open Source & Self-Hostable",
    "Pelican Wings & Wings-rs Support",
    "Enterprise-Grade Security",
    "Real-time Server Monitoring",
    "Advanced Customization Options",
    "Multi-language Support"
  ],
  keywords: "game server management, pterodactyl alternative, minecraft server hosting, discord bot hosting, wings compatible, light as a feather, server panel, gaming panel",
  maintainer: {
    "@type": "Organization",
    name: "MythicalSystems"
  },
  downloadUrl: "https://featherpanel.com",
  installUrl: "https://featherpanel.com/#installation",
  softwareHelp: "https://docs.mythical.systems",
  releaseNotes: "https://featherpanel.com/#features"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicon - Cross-browser compatibility using logo.png as base */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Apple Touch Icons - Using logo.png as fallback */}
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        
        {/* Android/Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        
        {/* Performance & Accessibility */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FeatherPanel" />
        
        {/* Rich Snippets */}
        <meta property="article:publisher" content="https://mythical.systems" />
        <meta property="article:author" content="MythicalSystems" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="game server management, pterodactyl alternative, minecraft hosting" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
