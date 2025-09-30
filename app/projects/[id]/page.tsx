"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Target, Zap, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Grid3x3, PlayCircle, PauseCircle } from "lucide-react";
import Image from "next/image";
import { getProjectById } from "@/data/projects";
import { useState, useEffect, useCallback } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const project = getProjectById(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const categoryColors = {
    web: "from-blue-500 to-cyan-500",
    mobile: "from-purple-500 to-pink-500",
    fullstack: "from-green-500 to-emerald-500"
  };

  // Navigation handlers
  const nextImage = useCallback(() => {
    if (!project) return;
    setSelectedImage((prev) => (prev + 1) % project.screenshots.length);
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setSelectedImage((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    setZoom(1);
    setImagePosition({ x: 0, y: 0 });
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
      else if (e.key === 'Escape') setIsLightboxOpen(false);
      else if (e.key === '+' || e.key === '=') setZoom((z) => Math.min(z + 0.25, 3));
      else if (e.key === '-') setZoom((z) => Math.max(z - 0.25, 0.5));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextImage, prevImage]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || !isLightboxOpen) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isLightboxOpen, nextImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-primary-600/10 dark:from-primary-500/20 dark:via-accent-500/20 dark:to-primary-600/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className={`px-4 py-2 bg-gradient-to-r ${categoryColors[project.category]} text-white text-sm font-bold rounded-full capitalize`}>
                {project.category}
              </span>
              {project.featured && (
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
                  Featured Project
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Role:</span>
                <span>{project.role}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Duration:</span>
                <span>{project.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  {project.demo.includes('play.google.com') ? 'Download App' : 'Live Demo'}
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold flex items-center gap-2 hover:border-primary-500 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
              )}
              {project.links && project.links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold flex items-center gap-2 hover:border-primary-500 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Screenshots Gallery */}
      {project.screenshots.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with View Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold gradient-text"
              >
                Project Gallery
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-2"
              >
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    viewMode === 'carousel'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <PlayCircle className="w-4 h-4" />
                  Carousel
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Grid3x3 className="w-4 h-4" />
                  Grid
                </button>
              </motion.div>
            </div>

            {/* Carousel View */}
            {viewMode === 'carousel' && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Main Carousel Image */}
                <div className="relative group">
                  <motion.div
                    layoutId="gallery-main"
                    className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImage}
                        initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.screenshots[selectedImage]}
                          alt={`${project.title} screenshot ${selectedImage + 1}`}
                          fill
                          className="object-contain cursor-zoom-in"
                          priority
                          onClick={() => setIsLightboxOpen(true)}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {project.screenshots.length > 1 && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.1, x: -5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </motion.button>
                      </>
                    )}

                    {/* Image Counter & Fullscreen Button */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-sm font-medium"
                      >
                        {selectedImage + 1} / {project.screenshots.length}
                      </motion.div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsLightboxOpen(true)}
                        className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Gradient Overlays for Better Button Visibility */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                </div>

                {/* Thumbnail Strip with Smooth Scroll */}
                <div className="relative flex justify-center">
                  <div className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-hide scroll-smooth snap-x snap-mandatory max-w-full">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        onClick={() => setSelectedImage(index)}
                        className={`relative flex-shrink-0 w-32 h-24 rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 snap-start ${
                          selectedImage === index
                            ? "ring-4 ring-primary-500 shadow-primary-500/50"
                            : "ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-primary-300"
                        }`}
                      >
                        <Image
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className={`object-cover transition-all duration-300 ${
                            selectedImage === index ? "scale-100" : "scale-110 opacity-70"
                          }`}
                        />
                        
                        {/* Thumbnail Number Badge */}
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {project.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsLightboxOpen(true);
                    }}
                    className="relative group cursor-pointer"
                  >
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between text-white">
                            <span className="font-medium">Screenshot {index + 1}</span>
                            <Maximize2 className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Advanced Lightbox Modal */}
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setIsLightboxOpen(false);
                }}
              >
                {/* Header Controls */}
                <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-gradient-to-b from-black/80 to-transparent">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4"
                  >
                    <div className="text-white text-lg font-bold">
                      {project.title}
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                      {selectedImage + 1} / {project.screenshots.length}
                    </div>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsLightboxOpen(false)}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Main Image Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-20 pt-24 pb-32"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage}
                      initial={{ opacity: 0, scale: 0.9, x: 100 }}
                      animate={{ 
                        opacity: 1, 
                        scale: zoom,
                        x: zoom > 1 ? imagePosition.x : 0,
                        y: zoom > 1 ? imagePosition.y : 0
                      }}
                      exit={{ opacity: 0, scale: 0.9, x: -100 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.screenshots[selectedImage]}
                        alt={`${project.title} screenshot ${selectedImage + 1}`}
                        fill
                        className="object-contain select-none"
                        draggable={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                {project.screenshots.length > 1 && (
                  <>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-40"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-40"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </motion.button>
                  </>
                )}

                {/* Bottom Control Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-center gap-3">
                    {/* Zoom Controls */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                      className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ZoomOut className="w-5 h-5" />
                    </motion.button>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium min-w-[80px] text-center"
                    >
                      {Math.round(zoom * 100)}%
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                      className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </motion.button>

                    <div className="w-px h-8 bg-white/20 mx-2" />

                    {/* Auto-play Toggle */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className={`w-11 h-11 rounded-full backdrop-blur-sm flex items-center justify-center text-white transition-colors ${
                        isAutoPlay ? 'bg-primary-500 hover:bg-primary-600' : 'bg-white/10 hover:bg-white/20'
                      }`}
                    >
                      {isAutoPlay ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                    </motion.button>
                  </div>

                  {/* Thumbnail Strip in Lightbox */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 flex gap-2 overflow-x-auto pb-2 justify-center scrollbar-hide"
                  >
                    {project.screenshots.map((screenshot, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setSelectedImage(index);
                          setZoom(1);
                          setImagePosition({ x: 0, y: 0 });
                        }}
                        className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all ${
                          selectedImage === index
                            ? "ring-3 ring-primary-400 shadow-lg shadow-primary-500/50"
                            : "ring-2 ring-white/20 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                {/* Keyboard Hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 text-white/50 text-xs space-y-1 hidden lg:block"
                >
                  <div>← → Navigate</div>
                  <div>ESC Close</div>
                  <div>+/- Zoom</div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      )}

      {/* Features & Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Key Features
                </h3>
              </div>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies & Challenges */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Technologies Used
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Challenges Overcome
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <span>{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          {/* Impact */}
          {project.impact && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Impact & Results</h3>
              <p className="text-lg text-white/90">{project.impact}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/#projects")}
          className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Back to Portfolio
        </motion.button>
      </section>
    </div>
  );
}

