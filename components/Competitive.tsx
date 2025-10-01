"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, TrendingUp, Award, ExternalLink, Star } from "lucide-react";

const platforms = [
  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/u/tolimitiku/",
    stats: {
      label: "Problems Solved",
      value: "500+",
      description: "Consistently solving algorithmic challenges"
    },
    color: "from-yellow-500 to-orange-500",
    achievements: [
      "Active problem solver",
      "Strong foundation in algorithms",
      "Regular contest participant"
    ]
  },
  {
    name: "Codeforces",
    icon: Trophy,
    href: "https://codeforces.com/profile/Tollila",
    stats: {
      label: "Rating",
      value: "Specialist",
      description: "Competitive programming enthusiast"
    },
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Contest regular",
      "Problem-solving expertise",
      "Growing rating trajectory"
    ]
  }
];

const achievements = [
  {
    icon: Trophy,
    title: "Consistent Practice",
    description: "Daily problem-solving routine maintaining algorithmic sharpness",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Steady improvement in competitive programming skills and ratings",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Award,
    title: "Strong Foundation",
    description: "Solid understanding of data structures and algorithms",
    color: "from-blue-500 to-indigo-500"
  }
];

const skills = [
  "Dynamic Programming",
  "Graph Algorithms",
  "Tree Data Structures",
  "Greedy Algorithms",
  "Binary Search",
  "Two Pointers",
  "Sliding Window",
  "Backtracking",
  "Bit Manipulation",
  "String Algorithms",
  "Sorting & Searching",
  "Mathematical Algorithms"
];

const PlatformCard = ({ platform, index }: { platform: typeof platforms[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = platform.icon;

  return (
    <motion.a
      ref={ref}
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="block bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`p-4 rounded-xl bg-gradient-to-br ${platform.color}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {platform.name}
      </h3>

      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {platform.stats.label}
        </p>
        <p className={`text-4xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent mb-1`}>
          {platform.stats.value}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {platform.stats.description}
        </p>
      </div>

      <ul className="space-y-2">
        {platform.achievements.map((achievement, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <span>{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </motion.a>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
    >
      <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {achievement.title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400">
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default function Competitive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competitive" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 animate-pulse-slow">
              <Trophy className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Competitive Programming Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharpening problem-solving skills through consistent practice and competitive challenges
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Algorithm Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see my problem-solving approach? Check out my profiles!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://leetcode.com/u/tolimitiku/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Code2 className="w-5 h-5" />
              Visit LeetCode
            </motion.a>
            <motion.a
              href="https://codeforces.com/profile/Tollila"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Trophy className="w-5 h-5" />
              Visit Codeforces
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

