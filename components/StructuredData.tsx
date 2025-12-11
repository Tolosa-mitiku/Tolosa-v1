export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tolosa Mitiku",
    url: "https://tolosa-mitiku.com",
    image: "https://tolosa-mitiku.com/profile.png",
    jobTitle: "Software Engineer & Architect",
    worksFor: {
      "@type": "Organization",
      name: "AfriDev Organization",
      url: "https://afridev-three.vercel.app/",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Africa to Silicon Valley (A2SV)",
      url: "https://a2sv.org/",
    },
    description: "Software Engineer & Architect with 5+ years of experience. Business Manager @ AfriDev Organization. Expert in Full Stack Development, Mobile Development, and System Architecture.",
    sameAs: [
      "https://github.com/Tolosa-mitiku",
      "https://www.linkedin.com/in/tolosa-mitiku/",
      "https://www.instagram.com/woni116/",
      "https://x.com/woni116",
      "https://t.me/Wongelmitiku",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Dart",
      "C#",
      "Node.js",
      "Django",
      "Flutter",
      "React",
      "Next.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD",
      "GraphQL",
      "REST APIs",
      "WebSockets",
      "Full Stack Development",
      "Mobile Development",
      "System Architecture",
      "Software Engineering",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Experience",
        name: "Business Manager & Co-Founder",
        educationalLevel: "Senior",
        recognizedBy: {
          "@type": "Organization",
          name: "AfriDev Organization",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Experience",
        name: "Head of Academy",
        educationalLevel: "Leadership",
        recognizedBy: {
          "@type": "Organization",
          name: "Africa to Silicon Valley (A2SV)",
        },
      },
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tolosa Mitiku Portfolio",
    url: "https://tolosa-mitiku.com",
    description: "Professional portfolio of Tolosa Mitiku, Software Engineer & Architect",
    author: {
      "@type": "Person",
      name: "Tolosa Mitiku",
    },
    inLanguage: "en-US",
  };

  const profilePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      name: "Tolosa Mitiku",
      jobTitle: "Software Engineer & Architect",
      url: "https://tolosa-mitiku.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageStructuredData) }}
      />
    </>
  );
}

