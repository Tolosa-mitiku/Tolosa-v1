"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { ExternalLink, Github, Layers, Smartphone, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const categories = [
  { id: "all", name: "All Work", icon: Layers },
  { id: "fullstack", name: "Full Stack", icon: Globe },
  { id: "mobile", name: "Mobile", icon: Smartphone },
  { id: "web", name: "Web", icon: Globe },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    window.location.href = `/projects/${project.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col cursor-pointer"
      >
        {/* Thumbnail Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-200 dark:text-gray-800 select-none">
                  {project.title.substring(0, 2)}
                </span>
              </div>
            </>
          )}
          
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <div className="p-3 bg-white rounded-full text-gray-900 shadow-lg">
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Action Icons - Always Visible */}
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
              >
                <Github className="w-4 h-4 text-white" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-primary-500/90 backdrop-blur-sm rounded-lg hover:bg-primary-600 transition-colors shadow-lg"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.a>
            )}
            {project.links && project.links.length > 0 && (
              <motion.a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg hover:bg-gray-900 transition-colors shadow-lg"
                title={project.links[0].label}
              >
                <Github className="w-4 h-4 text-white" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-gray-900 translate-z-20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                {project.category}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs border border-gray-100 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-black/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
              A curated selection of my work in web, mobile, and system architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                    : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Tolosa-mitiku"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            View all projects on GitHub <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
