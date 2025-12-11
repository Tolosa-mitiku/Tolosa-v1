"use client";

import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Cloud,
  Code,
  Database,
  ExternalLink,
  Globe,
  Server,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

// A2SV Journey Data (Moved from About.tsx)
const a2svJourney = [
  {
    role: "Head of Academy",
    period: "June 2025 – Nov 2025",
    description:
      "Top academic leader overseeing all operations, instructors, curriculum execution, and student outcomes. Built strategic frameworks for academic excellence.",
    color: "bg-purple-500",
  },
  {
    role: "Lead Head of Education",
    period: "Dec 2023 – May 2025",
    description:
      "Led team of Heads of Education. Developed scalable processes, evaluation systems, and improved trainee success rates across multiple cohorts.",
    color: "bg-blue-500",
  },
  {
    role: "Head of Education",
    period: "Nov 2023 – Dec 2023",
    description:
      "Owned entire education pipeline: curriculum scheduling, class allocations, instructor coordination, and learning quality assurance.",
    color: "bg-green-500",
  },
  {
    role: "Head of Education Intern",
    period: "Dec 2022 – Oct 2023",
    description:
      "Coordinated training sessions, prepared materials, tracked student progress, and optimized learning schedules with senior leadership.",
    color: "bg-orange-500",
  },
  {
    role: "Trainee",
    period: "Dec 2021 – Nov 2022",
    description:
      "Completed intensive training in algorithms, data structures, and software engineering. Solved hundreds of problems, built strong technical foundation.",
    color: "bg-yellow-500",
  },
];

const experiences = [
  {
    id: "afridev",
    role: "Business Manager & Co-Founder",
    company: "AfriDev Organization",
    period: "Present",
    icon: Globe,
    logo: "/logos/afridev.svg",
    url: "https://afridev-three.vercel.app/",
    description:
      "Leading a software org delivering world-class digital solutions. Driving technical strategy and growth.",
    achievements: [
      "Co-founded agency delivering 20+ projects for international clients",
      "Managing cross-functional teams and strategic partnerships",
    ],
    technologies: [
      "Business Strategy",
      "Team Leadership",
      "System Architecture",
      "React",
      "Node.js",
    ],
    color: "from-green-600 to-emerald-500",
    hasTimeline: false,
  },
  {
    id: "a2sv",
    role: "Head of Academy (Final Role)",
    company: "Africa to Silicon Valley",
    period: "Dec 2021 – Nov 2025",
    icon: Briefcase,
    logo: "/logos/a2sv.png",
    url: "https://a2sv.org/",
    description:
      "Progressive 4-year leadership journey from Trainee to Head of Academy. Started with intensive training in algorithms and software engineering, then advanced through multiple educational leadership roles, ultimately overseeing all academic operations, curriculum execution, and instructor quality across multiple trainee cohorts.",
    achievements: [
      "Progressed through 5 distinct roles: Trainee → HoE Intern → HoE → Lead HoE → Head of Academy",
      "Managed education for 150+ students across multiple mobile development cohorts",
      "Built and implemented scalable academic management processes used across all A2SV programs",
      "Led and mentored a team of Heads of Education to deliver high-quality training experiences",
      "Designed evaluation systems, reporting structures, and learning tracking frameworks",
      "Improved trainee success rates and retention through structured support systems",
      "Coordinated curriculum planning, instructor quality control, and student engagement strategies",
      "Established strategic frameworks for long-term academic growth and mentorship excellence",
    ],
    technologies: [
      "Dart",
      "Flutter",
      "Leadership",
      "Curriculum Design",
      "Team Management",
      "Mentorship",
      "Educational Operations",
    ],
    color: "from-blue-600 to-cyan-500",
    hasTimeline: true,
  },
  {
    id: "simbo",
    role: "Full Stack Mobile Developer",
    company: "Simbo Software",
    period: "9 months",
    icon: Smartphone,
    logo: "/logos/simbo.png",
    url: "https://simbotechnology.com/",
    description: "Led development of a comprehensive Telehealth system.",
    achievements: [
      "Built secure video chat system using WebSockets and VoIP",
      "Led full-stack development (Node.js, React) and managed delivery",
    ],
    technologies: ["TypeScript", "Node.js", "MongoDB", "React", "WebSockets"],
    color: "from-purple-600 to-pink-500",
    hasTimeline: false,
  },
  {
    id: "eskalate",
    role: "Software Engineer Intern",
    company: "Eskalate",
    period: "Internship",
    icon: Code,
    logo: "/logos/eskalate.svg",
    url: "https://eskalate.io/",
    description: "Built an educational resource sharing platform for students.",
    achievements: [
      "Designed RESTful APIs using Node.js, Docker, and Kubernetes",
      "Implemented CI/CD pipelines and automated testing frameworks",
    ],
    technologies: ["Node.js", "Docker", "Kubernetes", "CI/CD", "Flutter"],
    color: "from-green-600 to-emerald-500",
    hasTimeline: false,
  },
];

const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Python", "Dart", "C#"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    category: "Frameworks & Libraries",
    icon: Server,
    items: ["Node.js", "Django", "Flutter", "React", "Next.js", "Express"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server"],
    color: "from-green-500 to-teal-500",
  },
  {
    category: "Technologies & Tools",
    icon: Cloud,
    items: [
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD",
      "GraphQL",
      "REST APIs",
      "WebSockets",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const ExperienceCard = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = exp.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary-500/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Experience Content */}
        <div className="flex-1">
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
              <div
                className={`relative w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200 shadow-sm`}
              >
                {exp.logo ? (
                  <div className="relative w-full h-full p-2">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo - ${exp.role}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ) : (
                  <Icon className="w-8 h-8" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded w-fit mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  {exp.company}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {exp.description}
            </p>
          </a>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-500 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium border border-gray-100 dark:border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline for A2SV (Side) */}
        {exp.hasTimeline && (
          <div className="w-full lg:w-96 lg:border-l lg:border-gray-100 lg:dark:border-gray-800 lg:pl-6 pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-100 dark:border-gray-800 flex-shrink-0">
            <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary-500" />
              Career Progression
            </h4>
            <div className="relative space-y-4 ml-1">
              {/* Zig-Zag Gradient Line */}
              <svg
                className="absolute left-[6px] top-2 bottom-2 w-[2px] h-full"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <linearGradient
                    id="zigzag-gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                    <stop offset="50%" stopColor="rgb(59, 130, 246)" />
                    <stop offset="100%" stopColor="rgb(234, 179, 8)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 0 L 8 20 L -4 40 L 6 60 L -2 80 L 4 100 L -3 120 L 5 140 L -2 160 L 3 180 L -2 200 L 0 220 L -2 240 L 0 260 L -1 280 L 0 300 L 0 320 L 0 340 L 0 360 L 0 380 L 0 400"
                  stroke="url(#zigzag-gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {a2svJourney.map((role, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-3 group/item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                >
                  {/* Dot */}
                  <div
                    className={`relative z-10 w-3 h-3 rounded-full ${role.color} mt-1 shrink-0 ring-4 ring-white dark:ring-gray-900 group-hover/item:scale-125 group-hover/item:ring-8 transition-all duration-300 shadow-sm`}
                  />

                  <div className="flex-1 pb-1">
                    <h5 className="text-xs font-bold text-gray-900 dark:text-white group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors leading-tight">
                      {role.role}
                    </h5>
                    <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 mb-1 mt-0.5">
                      {role.period}
                    </p>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-primary-500/20 transition-all group"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.color}`}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {skill.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.05 * i }}
            whileHover={{ scale: 1.08, y: -2 }}
            className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-100 dark:border-gray-700 hover:border-primary-500/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Skills
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A track record of delivering robust solutions and continuous
            technical growth.
          </p>
        </motion.div>

        {/* Work History */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> Work History
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Technical Arsenal */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Code className="w-5 h-5" /> Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCategory key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
