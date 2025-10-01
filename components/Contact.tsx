"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  Send,
  Briefcase,
  Code2,
  Trophy,
  ExternalLink
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "se.tolosa.mitiku@gmail.com",
    href: "mailto:se.tolosa.mitiku@gmail.com",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 936 490 437",
    href: "tel:+251936490437",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
    color: "from-blue-500 to-cyan-500"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Tolosa-mitiku",
    color: "hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900",
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tolosa-mitiku/",
    color: "hover:bg-blue-600 hover:text-white",
    description: "Connect professionally"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/woni116/",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white",
    description: "Follow my journey"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/woni116",
    color: "hover:bg-sky-500 hover:text-white",
    description: "Latest updates"
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/Wongelmitiku",
    color: "hover:bg-sky-400 hover:text-white",
    description: "Message me directly"
  }
];

const professionalLinks = [
  {
    name: "Upwork",
    icon: Briefcase,
    href: "https://www.upwork.com/freelancers/tolosam2",
    color: "from-green-500 to-emerald-500",
    description: "Hire me for freelance work"
  },
  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/u/tolimitiku/",
    color: "from-yellow-500 to-orange-500",
    description: "View my coding profile"
  },
  {
    name: "Codeforces",
    icon: Trophy,
    href: "https://codeforces.com/profile/Tollila",
    color: "from-blue-500 to-cyan-500",
    description: "Check my competitive programming"
  }
];

const ContactCard = ({ info, index }: { info: typeof contactInfo[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = info.icon;

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3 }}
      className={`bg-white dark:bg-gray-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 ${
        info.href ? 'cursor-pointer' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-lg bg-gradient-to-br ${info.color} flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
            {info.label}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {info.value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (info.href) {
    return (
      <a href={info.href} className="block">
        {content}
      </a>
    );
  }

  return content;
};

const SocialLink = ({ link, index }: { link: typeof socialLinks[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = link.icon;

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`group flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 ${link.color}`}
    >
      <Icon className="w-8 h-8 text-gray-600 dark:text-gray-400 group-hover:text-current transition-colors" />
      <div className="text-center">
        <p className="font-bold text-gray-900 dark:text-white group-hover:text-current mb-1">
          {link.name}
        </p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {link.description}
        </p>
      </div>
    </motion.a>
  );
};

const ProfessionalLink = ({ link, index }: { link: typeof professionalLinks[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = link.icon;

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 group"
    >
      <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} flex-shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {link.name}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {link.description}
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
    </motion.a>
  );
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
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
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse-slow">
              <Send className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.label} info={info} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start a Project?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a full-stack developer, mobile app expert, or technical consultant, 
            I&apos;m here to help bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:se.tolosa.mitiku@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/tolosam2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <Briefcase className="w-5 h-5" />
              Hire on Upwork
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 text-center text-gray-600 dark:text-gray-400"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Tolosa Mitiku. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}

