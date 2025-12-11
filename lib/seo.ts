/**
 * SEO Configuration and Utilities
 * Centralized SEO constants and helper functions
 */

export const siteConfig = {
  name: "Tolosa Mitiku",
  title: "Tolosa Mitiku | Software Engineer & Architect",
  description:
    "Software Engineer & Architect with 5+ years of experience. Business Manager @ AfriDev Organization. Expert in Full Stack Development, Mobile Development, and System Architecture.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tolosa-mitiku.com",
  ogImage: "/profile.png",
  links: {
    twitter: "https://x.com/woni116",
    github: "https://github.com/Tolosa-mitiku",
    linkedin: "https://www.linkedin.com/in/tolosa-mitiku/",
    instagram: "https://www.instagram.com/woni116/",
    telegram: "https://t.me/Wongelmitiku",
  },
};

export const keywords = [
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
  "Africa to Silicon Valley",
];

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata(
  title: string,
  description?: string,
  path?: string
) {
  const pageTitle = title === siteConfig.title ? title : `${title} | Tolosa Mitiku`;
  const pageDescription = description || siteConfig.description;
  const pageUrl = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      images: [siteConfig.ogImage],
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

