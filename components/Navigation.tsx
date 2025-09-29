"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Home, User, Briefcase, Code, Trophy, Users, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "AfriDev", href: "#afridev", icon: Users },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Competitive", href: "#competitive", icon: Trophy },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we're not on the homepage, navigate to homepage first
    if (pathname !== '/') {
      router.push('/' + href);
    } else {
      // On homepage, just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold gradient-text cursor-pointer"
              >
                Tolosa.dev
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 hover:bg-primary-500/20 dark:hover:bg-primary-500/30 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                ) : (
                  <Moon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-primary-500/10 dark:bg-primary-500/20 hover:bg-primary-500/20 dark:hover:bg-primary-500/30 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                ) : (
                  <Menu className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

