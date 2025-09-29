export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  duration: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  impact?: string;
  screenshots: string[];
  thumbnail: string;
  github?: string;
  demo?: string;
  links?: { label: string; url: string }[];
  category: "web" | "mobile" | "fullstack";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "rateeat",
    title: "RateEat - Restaurant Rating Platform",
    shortDescription: "Mobile app for discovering and rating restaurants with social features",
    fullDescription: "A comprehensive mobile application that allows users to discover, rate, and review restaurants. Features include social sharing, personalized recommendations, and an intuitive user interface built with Flutter.",
    role: "Full Stack Mobile Developer",
    duration: "5 months",
    technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "REST API", "Firebase"],
    features: [
      "Restaurant discovery with advanced filters",
      "User ratings and detailed reviews",
      "Photo sharing and gallery",
      "Personalized recommendations",
      "Social features and user profiles",
      "Real-time updates and notifications",
      "Map integration for location-based search",
      "Offline mode support"
    ],
    screenshots: [
      "/projects/rateeat/thumbnail.jpg",
      "/projects/rateeat/1.jpg",
      "/projects/rateeat/2.jpg",
      "/projects/rateeat/3.jpg",
      "/projects/rateeat/4.jpg",
      "/projects/rateeat/5.jpg"
    ],
    thumbnail: "/projects/rateeat/thumbnail.jpg",
    demo: "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile",
    category: "mobile",
    featured: true
  },
  {
    id: "zembil",
    title: "Zembil - E-commerce Platform",
    shortDescription: "Full-featured e-commerce mobile application with seamless shopping experience",
    fullDescription: "Zembil is a modern e-commerce mobile application offering a seamless shopping experience. Features include product browsing, cart management, secure checkout, and order tracking.",
    role: "Full Stack Mobile Developer",
    duration: "4 months",
    technologies: ["Flutter", "Dart", "Node.js", "MongoDB", "Stripe", "REST API"],
    features: [
      "Product catalog with advanced search",
      "Shopping cart and wishlist",
      "Secure payment integration with Stripe",
      "Order tracking and history",
      "User authentication and profiles",
      "Product reviews and ratings",
      "Push notifications for offers",
      "Admin dashboard for inventory management"
    ],
    screenshots: [
      "/projects/zembil/thumbnail.jpg",
      "/projects/zembil/1 (2).jpg",
      "/projects/zembil/2 (2).jpg",
      "/projects/zembil/3 (2).jpg",
      "/projects/zembil/Zembil Ecommerce App.jpg"
    ],
    thumbnail: "/projects/zembil/thumbnail.jpg",
    github: "https://github.com/Tolosa-mitiku/Zembil",
    category: "mobile",
    featured: true
  },
  {
    id: "shopally",
    title: "Shopally - Social Shopping Platform",
    shortDescription: "Social shopping experience with collaborative features and recommendations",
    fullDescription: "Shopally combines social media with e-commerce, allowing users to share their shopping experiences, get recommendations from friends, and discover new products through their social network.",
    role: "Full Stack Developer",
    duration: "5 months",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Tailwind CSS"],
    features: [
      "Social feed with shopping posts",
      "Collaborative shopping lists",
      "Friend recommendations",
      "Real-time chat for shopping discussions",
      "Product tagging and sharing",
      "Personalized shopping feed",
      "Integration with multiple e-commerce platforms"
    ],
    screenshots: [
      "/projects/shopally/thumbnail.jpg",
      "/projects/shopally/1.png",
      "/projects/shopally/2.png",
      "/projects/shopally/3.png",
      "/projects/shopally/4.png",
      "/projects/shopally/5.png",
      "/projects/shopally/7.png"
    ],
    thumbnail: "/projects/shopally/thumbnail.jpg",
    github: "https://github.com/A2SV/g6-shopally/tree/main",
    category: "fullstack",
    featured: false
  },
  {
    id: "atrons",
    title: "Atrons - Project Management Platform",
    shortDescription: "Comprehensive project management and team collaboration tool",
    fullDescription: "Atrons is a powerful project management platform designed for teams to collaborate effectively, track progress, and deliver projects on time. Features include task management, time tracking, and team communication.",
    role: "Full Stack Developer",
    duration: "6 months",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "WebSockets", "Tailwind CSS"],
    features: [
      "Task and project management",
      "Kanban and Gantt chart views",
      "Time tracking and reporting",
      "Team collaboration and chat",
      "File sharing and document management",
      "Real-time notifications",
      "Custom workflows and automation",
      "Analytics and insights"
    ],
    screenshots: [
      "/projects/atrons/thumbnail.jpg",
      "/projects/atrons/1.jpg",
      "/projects/atrons/2.jpg",
      "/projects/atrons/3.jpg",
      "/projects/atrons/4.jpg",
      "/projects/atrons/5.jpg"
    ],
    thumbnail: "/projects/atrons/thumbnail.jpg",
    github: "https://github.com/Tolosa-mitiku/Atrons.git",
    category: "fullstack",
    featured: false
  },
  {
    id: "lassanai",
    title: "LassanAI - AI Language Learning Platform",
    shortDescription: "AI-powered language learning platform with personalized study paths",
    fullDescription: "LassanAI leverages artificial intelligence to provide personalized language learning experiences. Features include adaptive learning paths, speech recognition, and real-time feedback.",
    role: "Full Stack Developer",
    duration: "7 months",
    technologies: ["React", "Python", "TensorFlow", "Node.js", "MongoDB", "WebRTC"],
    features: [
      "Personalized learning paths",
      "AI-powered speech recognition",
      "Real-time pronunciation feedback",
      "Interactive exercises and quizzes",
      "Progress tracking and analytics",
      "Mock conversations with AI",
      "Email assistance for learning support",
      "Vocabulary builder with spaced repetition"
    ],
    screenshots: [
      "/projects/lassanai/thumbnail.jpg",
      "/projects/lassanai/home.jpg",
      "/projects/lassanai/learning path.jpg",
      "/projects/lassanai/fundamental.jpg",
      "/projects/lassanai/practice progress .jpg",
      "/projects/lassanai/Text.jpg",
      "/projects/lassanai/Text Analyisis.jpg",
      "/projects/lassanai/free speaking.jpg",
      "/projects/lassanai/mock.jpg",
      "/projects/lassanai/Email Assistance.jpg"
    ],
    thumbnail: "/projects/lassanai/thumbnail.jpg",
    github: "https://github.com/A2SV/g6-lissanai",
    category: "fullstack",
    featured: false
  },
  {
    id: "skillbridge",
    title: "Skill Bridge - Educational Resource Platform",
    shortDescription: "Platform for students to access and share educational resources",
    fullDescription: "Developed during internship at Eskalate, Skill Bridge is a comprehensive platform for High School and College Students to access and share educational resources including books, videos, and quizzes.",
    role: "Software Engineer Intern",
    duration: "3 months",
    technologies: ["Node.js", "Express", "MongoDB", "Flutter", "Docker", "Kubernetes"],
    features: [
      "Resource library with books and videos",
      "Interactive quizzes and assessments",
      "User-generated content sharing",
      "Progress tracking and analytics",
      "Mobile app with Flutter",
      "RESTful API architecture",
      "Containerized deployment with Docker"
    ],
    screenshots: [
      "/projects/skillbridge/thumbnail.jpg",
      "/projects/skillbridge/1.jpg",
      "/projects/skillbridge/2.jpg",
      "/projects/skillbridge/3.jpg",
      "/projects/skillbridge/4.jpg"
    ],
    thumbnail: "/projects/skillbridge/thumbnail.jpg",
    demo: "https://play.google.com/store/apps/details?id=academy.skillbridge.skill_bridge_mobile",
    category: "fullstack",
    featured: false
  },
  {
    id: "advert",
    title: "Advert - Billboard Advertising Platform",
    shortDescription: "City-wide billboard advertising platform with ML-powered content moderation",
    fullDescription: "Led the design and implementation of a comprehensive city-wide billboard advertising platform that enables advertisers to search, reserve, and manage outdoor ad placements via an intuitive dashboard. The platform features advanced content moderation using machine learning to ensure quality and compliance.",
    role: "Lead Developer & Architect",
    duration: "6 months",
    technologies: ["Django", "PostgreSQL", "Celery", "TensorFlow", "React", "Tailwind CSS", "Redux", "REST API"],
    features: [
      "Intuitive dashboard for advertisers to search and reserve billboards",
      "Advanced search with filters by location, size, and availability",
      "Automated profanity detection using TensorFlow ML models",
      "Real-time content moderation system",
      "Scalable backend with Celery for async task processing",
      "Responsive admin dashboard with React and Redux",
      "Payment integration and booking management",
      "Analytics and reporting features"
    ],
    challenges: [
      "Implementing real-time ML-based content moderation",
      "Optimizing database queries for large-scale billboard data",
      "Building intuitive UX for complex booking workflows"
    ],
    impact: "Streamlined billboard advertising process, reducing booking time by 70% and improving content quality through automated moderation",
    screenshots: [
      "/projects/advert/Thumbnail.png",
      "/projects/advert/1.png",
      "/projects/advert/2.png",
      "/projects/advert/3.png",
      "/projects/advert/4.png",
      "/projects/advert/5.png",
      "/projects/advert/6.png"
    ],
    thumbnail: "/projects/advert/Thumbnail.png",
    links: [
      { label: "Frontend Repository", url: "https://github.com/Ethusiasts/AdvertisementPlatform-Frontend" },
      { label: "Backend Repository", url: "https://github.com/Ethusiasts/AdvertisementPlatform-Backend-Api" }
    ],
    category: "fullstack",
    featured: true
  },
  {
    id: "tourvago",
    title: "Tourvago - Travel Booking Platform",
    shortDescription: "Connect travelers with vetted travel agents based on region, interest, and budget",
    fullDescription: "Designed and developed the backend architecture for a travel booking platform that intelligently connects users with vetted travel agents based on their region, interests, and budget. The platform features dynamic search capabilities, secure authentication, and optimized database performance.",
    role: "Backend Developer & Architect",
    duration: "4 months",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "OAuth 2.0", "REST API", "C#"],
    features: [
      "Dynamic search engine for travel agents",
      "User matching algorithm based on region, interest, and budget",
      "Secure authentication with OAuth 2.0",
      "Comprehensive user management system",
      "Booking and reservation functionality",
      "Agent verification and rating system",
      "Optimized database queries for fast response times",
      "RESTful API architecture"
    ],
    challenges: [
      "Designing efficient matching algorithm for user-agent connections",
      "Optimizing database queries to reduce latency",
      "Implementing secure session handling"
    ],
    impact: "Enabled seamless connection between travelers and agents, reducing booking time by 60% and improving user satisfaction",
    screenshots: [],
    thumbnail: "/projects/tourvago/thumbnail.svg",
    links: [
      { label: "Backend Repository", url: "https://github.com/TitansonFlutter/TourVago-Backend-Api" },
      { label: "Flutter App Repository", url: "https://github.com/TitansonFlutter/TouristGuide" }
    ],
    category: "web",
    featured: true
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getProjectsByCategory = (category: string) => 
  projects.filter(p => p.category === category);
