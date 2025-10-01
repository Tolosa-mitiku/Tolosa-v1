"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { 
  Users, 
  ExternalLink, 
  Linkedin, 
  Youtube, 
  Globe,
  Briefcase,
  Award,
  TrendingUp,
  Heart,
  Zap,
  Target,
  ArrowRight,
  Send
} from "lucide-react";

const teamMembers = [
  {
    name: "Tolosa Mitiku",
    role: "Business Manager & Full Stack Developer",
    description: "Leading technical strategy and business development",
    portfolio: null,
    image: "/team/tolosa.png?v=2"
  },
  {
    name: "Tamirat Kebede",
    role: "Business Manager & Developer",
    description: "Co-founder driving innovation and growth",
    portfolio: "https://tamiratkebede.com/",
    image: "/team/tamirat.jpg?v=2"
  },
  {
    name: "Abdi Esayas",
    role: "Business Manager & Developer",
    description: "Co-founder ensuring excellence in delivery",
    portfolio: "https://abdi-esayas.vercel.app/",
    image: "/team/abdi.png?v=2"
  }
];

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with cutting-edge technologies",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "System Architecture",
    description: "Scalable backend systems and cloud infrastructure solutions",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Technical Consulting",
    description: "Expert guidance on technology strategy and implementation",
    color: "from-green-500 to-emerald-500"
  }
];

const stats = [
  { label: "Projects Delivered", value: "20+", icon: Award },
  { label: "Happy Clients", value: "15+", icon: Heart },
  { label: "Team Members", value: "3", icon: Users },
  { label: "Years Experience", value: "5+", icon: TrendingUp }
];

const socialLinks = [
  {
    name: "Website",
    icon: Globe,
    href: "https://afridev-three.vercel.app/",
    color: "hover:text-green-600"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/afridevet",
    color: "hover:text-blue-600"
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@afridevet",
    color: "hover:text-red-600"
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/afridev",
    color: "hover:text-blue-500"
  },
  {
    name: "Upwork",
    icon: Briefcase,
    href: "https://www.upwork.com/agencies/1937186981697230253/",
    color: "hover:text-green-600"
  }
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ x: -5, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.15)" }}
      className="bg-gradient-to-br from-white to-green-50/30 dark:from-gray-900 dark:to-green-900/5 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-green-500/30 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <motion.div 
          className="relative flex-shrink-0"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-white dark:bg-gray-950">
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {member.name}
          </h3>
          
          <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 uppercase tracking-wide">
            {member.role}
          </p>
          
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            {member.description}
          </p>

          {member.portfolio && (
            <motion.a
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-medium hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Portfolio
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-green-500/20 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-start gap-3">
        <motion.div 
          className={`p-2.5 rounded-xl bg-gradient-to-br ${service.color} flex-shrink-0`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {service.title}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AfriDev() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="afridev" className="py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Animated Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Animated Background Blobs */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute inset-8 bg-gradient-to-bl from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"
              />

              {/* Logo Container */}
              <motion.a
                href="https://afridev-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-full h-full p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl border border-white/40 dark:border-gray-800/40 shadow-2xl flex items-center justify-center cursor-pointer hover:shadow-3xl transition-shadow"
              >
                {/* Light Mode Logo */}
                <div className="relative w-full h-full dark:hidden">
                  <Image
                    src="/logos/afridev-logo.svg"
                    alt="AfriDev Organization"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Dark Mode Logo */}
                <div className="relative w-full h-full hidden dark:block">
                  <Image
                    src="/logos/afridev-logo-white.svg"
                    alt="AfriDev Organization"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium mb-4">
              <Users className="w-3 h-3" />
              <span>My Current Venture</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Leading <span className="text-green-600 dark:text-green-500">AfriDev Organization</span>
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              At AfriDev, we combine technical expertise with deep local understanding to deliver solutions that matter. 
              Our team of elite developers and strategists works tirelessly to transform complex challenges into elegant, 
              scalable software products.
            </p>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <motion.a
                href="https://afridev-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-full text-sm font-medium shadow-lg hover:bg-green-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Visit AfriDev Website
              </motion.a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <motion.a
                  href="https://www.linkedin.com/company/afridevet"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </motion.a>

                <motion.a
                  href="https://www.youtube.com/@afridevet"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </motion.a>

                <motion.a
                  href="https://t.me/afridev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.a>

                <motion.a
                  href="https://www.upwork.com/agencies/1937186981697230253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm font-semibold">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">Innovation</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">Excellence</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full">Impact</span>
            </div>
          </motion.div>
        </div>

        {/* Team, Stats & Services - New Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Stats & Services */}
          <div className="flex flex-col gap-8 h-full">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Our Impact
                  </h3>
                </div>
                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800 dark:to-transparent" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gradient-to-br from-white to-green-50/50 dark:from-gray-900 dark:to-green-900/10 rounded-xl p-4 text-center shadow-sm border border-gray-100 dark:border-gray-800 hover:border-green-500/30 hover:shadow-md transition-all duration-300"
                    >
                      <motion.div 
                        className="flex justify-center mb-2"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <Icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                      </motion.div>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Our Capabilities
                  </h3>
                </div>
                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800 dark:to-transparent" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 auto-rows-fr">
                {services.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Co-Founders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            className="lg:pl-8"
          >
            <div className="flex items-center gap-4 mb-6 lg:justify-end">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200 dark:from-transparent dark:to-gray-800 lg:order-1" />
              <div className="flex items-center gap-2 lg:order-2">
                <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  Meet the Team
                </h3>
              </div>
            </div>
            
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200/50 dark:border-green-800/30"
            >
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Connect With Us</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.filter(link => link.name !== "Website").map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 shadow-sm border border-gray-200 dark:border-gray-700 transition-all ${link.color}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
