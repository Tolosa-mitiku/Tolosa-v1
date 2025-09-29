"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Download, ChevronRight, Users, ArrowRight, Code2, Send } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const socialLinks = [
  { 
    name: "GitHub", 
    icon: Github, 
    href: "https://github.com/Tolosa-mitiku", 
    gradient: "from-gray-700 to-gray-900"
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/tolosa-mitiku/", 
    gradient: "from-blue-500 to-blue-700"
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/woni116/", 
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    href: "https://x.com/woni116", 
    gradient: "from-sky-400 to-blue-600"
  },
  { 
    name: "Telegram", 
    icon: Send, 
    href: "https://t.me/Wongelmitiku", 
    gradient: "from-sky-400 to-blue-500"
  },
];

const Typewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-primary-500 ml-1 align-middle"
      />
    </span>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent opacity-50" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Organization Badge */}
            <motion.a
              href="#afridev"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-300 text-xs font-medium border border-green-500/20 backdrop-blur-sm cursor-pointer hover:bg-green-500/20 transition-colors"
            >
              <Users className="w-3 h-3" />
              <span>Business Manager @ AfriDev Organization</span>
              <ArrowRight className="w-3 h-3" />
            </motion.a>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            >
              <span className="block mb-2">Tolosa Mitiku</span>
              <span className="block text-xl md:text-2xl lg:text-3xl text-gray-500 dark:text-gray-400 font-normal mt-4 min-h-[60px] lg:min-h-[auto]">
                <Typewriter text="Elite Software Engineer & Architect" speed={50} />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed"
            >
              Driving technical innovation and business growth. Currently leading 
              <span className="font-semibold text-green-600 dark:text-green-400"> AfriDev</span>, 
              building scalable systems, and empowering the next generation of engineers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-sm transition-all hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center gap-2"
              >
                View Selected Works
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/Tolosa-Mitiku-Resume.pdf"
                download="Tolosa-Mitiku-Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-2"
              >
                Download CV
                <Download className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.5 + idx * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.15,
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <Icon className="w-5 h-5 relative z-10 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Animated Profile Picture */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Animated Blobs Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-accent-500/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-4 bg-gradient-to-bl from-blue-500/30 to-purple-500/30 rounded-full blur-2xl"
              />

              {/* Floating Image Container */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl backdrop-blur-sm z-10 bg-white/5"
              >
                <Image
                  src="/profile.png"
                  alt="Tolosa Mitiku"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
              </motion.div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-lg flex items-center justify-center z-20"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center z-20 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center">
                  <span className="block text-xs font-bold text-gray-900 dark:text-white">5+</span>
                  <span className="block text-[8px] text-gray-500 uppercase">Years</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
