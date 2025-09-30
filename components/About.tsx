"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, TrendingUp, Users, ArrowUpRight } from "lucide-react";

const a2svJourney = [
  {
    role: "Head of Academy",
    period: "June 2025 – Nov 2025",
    icon: Award,
    description: "Served as the top academic leader for A2SV programs, overseeing all educational operations.",
    achievements: [
      "Managed curriculum execution across generations",
      "Coordinated high-level academic decisions",
      "Strengthened student readiness"
    ],
    color: "bg-purple-500"
  },
  {
    role: "Lead Head of Education",
    period: "Dec 2023 – May 2025",
    icon: Users,
    description: "Led and mentored a team of Heads of Education to manage large trainee cohorts.",
    achievements: [
      "Designed evaluation systems",
      "Improved academic planning efficiency",
      "Enhanced trainee success rates"
    ],
    color: "bg-blue-500"
  },
  {
    role: "Head of Education",
    period: "Nov 2023 – Dec 2023",
    icon: GraduationCap,
    description: "Took ownership of the entire education pipeline for A2SV trainees.",
    achievements: [
      "Ensured high-quality learning experiences",
      "Introduced learning tracking improvements",
      "Enhanced trainee-mentor communication"
    ],
    color: "bg-green-500"
  },
  {
    role: "Head of Education Intern",
    period: "Dec 2022 – Oct 2023",
    icon: TrendingUp,
    description: "Supported the Education team in planning and delivering training sessions.",
    achievements: [
      "Managed student progress tracking",
      "Optimized learning schedules",
      "Identified student challenges"
    ],
    color: "bg-orange-500"
  },
  {
    role: "Trainee",
    period: "Dec 2021 – Nov 2022",
    icon: TrendingUp,
    description: "Completed intensive training focused on data structures and algorithms.",
    achievements: [
      "Solved hundreds of algorithmic problems",
      "Collaborated on high-impact tasks",
      "Built strong technical foundation"
    ],
    color: "bg-yellow-500"
  }
];

const TimelineItem = ({ item, index }: { item: typeof a2svJourney[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center justify-between md:justify-normal gap-8 mb-12 ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Content Card */}
      <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:border-primary-500/30 transition-colors"
        >
          <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse"}`}>
            <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
              <Icon className={`w-5 h-5 ${item.color.replace('bg-', 'text-')}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.period}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>
          
          <ul className={`space-y-2 ${index % 2 === 0 ? "items-start" : "items-start md:items-end"} flex flex-col`}>
            {item.achievements.map((achievement, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          className={`w-4 h-4 rounded-full border-4 border-white dark:border-gray-950 ${item.color} shadow-lg`}
        />
      </div>

      {/* Empty Spacer for Layout */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of continuous learning, leadership, and technical excellence at <a href="https://a2sv.org/" className="text-primary-600 hover:underline">A2SV</a>.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto pl-8 md:pl-0">
          {/* Animated Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 -translate-x-1/2 z-0"
          />

          <div className="relative z-10 space-y-12">
            {a2svJourney.map((item, index) => (
              <TimelineItem key={item.role} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Trainees Mentored", value: "150+" },
            { label: "Leadership Roles", value: "5" },
            { label: "Years of Growth", value: "4" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
