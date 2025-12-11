import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tolosa-mitiku.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tolosa Mitiku | Software Engineer & Architect",
    template: "%s | Tolosa Mitiku"
  },
  description: "Software Engineer & Architect with 5+ years of experience. Business Manager @ AfriDev Organization. Specialized in Full Stack Development, Mobile Development, and System Architecture. Expert in React, Node.js, Flutter, TypeScript, and scalable system design.",
  keywords: [
    "Tolosa Mitiku",
    "Software Engineer",
    "Full Stack Developer",
    "Mobile Developer",
    "System Architect",
    "AfriDev Organization",
    "React Developer",
    "Node.js Developer",
    "Flutter Developer",
    "TypeScript",
    "JavaScript",
    "Python",
    "Dart",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "REST APIs",
    "GraphQL",
    "WebSockets",
    "Tech Lead",
    "Software Architecture",
    "Portfolio",
    "Ethiopia Software Engineer",
    "A2SV",
    "Africa to Silicon Valley"
  ],
  authors: [{ name: "Tolosa Mitiku", url: siteUrl }],
  creator: "Tolosa Mitiku",
  publisher: "Tolosa Mitiku",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: { url: "/api/icon", type: "image/jpeg" },
    apple: { url: "/api/icon", type: "image/jpeg" },
    shortcut: "/api/icon",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Tolosa Mitiku | Software Engineer & Architect",
    description: "Software Engineer & Architect with 5+ years of experience. Business Manager @ AfriDev Organization. Expert in Full Stack Development, Mobile Development, and System Architecture.",
    siteName: "Tolosa Mitiku Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Tolosa Mitiku - Software Engineer & Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolosa Mitiku | Software Engineer & Architect",
    description: "Software Engineer & Architect with 5+ years of experience. Expert in Full Stack Development, Mobile Development, and System Architecture.",
    creator: "@woni116",
    images: ["/profile.png"],
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
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/api/icon" />
        <link rel="shortcut icon" type="image/png" href="/api/icon" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mesh-bg fixed inset-0 z-[-1]" />
          <AnimatedBackground />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

