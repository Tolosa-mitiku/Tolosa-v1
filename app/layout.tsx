import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tolosa Mitiku",
  description: "Elite Software Engineer with 5+ years of experience. Specialized in Full Stack Development, Mobile Development, and System Architecture.",
  keywords: ["Software Engineer", "Full Stack Developer", "Mobile Developer", "React", "Node.js", "Flutter", "TypeScript"],
  authors: [{ name: "Tolosa Mitiku" }],
  icons: {
    icon: { url: "/api/icon", type: "image/png" },
    apple: { url: "/api/icon", type: "image/png" },
    shortcut: "/api/icon",
  },
  openGraph: {
    title: "Tolosa Mitiku",
    description: "Elite Software Engineer with 5+ years of experience",
    type: "website",
  },
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

