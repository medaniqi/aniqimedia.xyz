"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Element } from "react-scroll";
import { motion, useAnimation, useInView } from "framer-motion";
import { ExternalLink, ArrowRight, Globe, Award, Users } from "lucide-react";

// Import your project images
import img1 from "@/assets/Images/image1.png";
import img2 from "@/assets/Images/image2.png";
import img3 from "@/assets/Images/image3.png";

const WorkSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Project data with enhanced details
  const projects = [
    {
      title: "DWORFZ NFT PROJECT",
      role: "UI/UX DESIGNER & COMMUNITY ARCHITECT",
      description:
        "Crafted Ragnarok's viral NFT platform and lore-driven landing page. Rejuvenated their function by 20% with UI/UX focuses—turning NFTs into loyal fans. Built an 8K+ Discord army from 0, blending storytelling and strategic engagement.",
      image: img1,
      delay: 0,
      stats: [
        {
          icon: <Globe className="w-4 h-4" />,
          value: "20%",
          label: "UX Improvement",
        },
        {
          icon: <Users className="w-4 h-4" />,
          value: "8K+",
          label: "Community Members",
        },
        {
          icon: <Award className="w-4 h-4" />,
          value: "12",
          label: "Unique Collections",
        },
      ],
      tags: ["NFT", "UI/UX", "Community Building", "Blockchain"],
    },
    {
      title: "MARTIL GYM",
      role: "BRANDING, SOCIAL MEDIA STRATEGY",
      description:
        "Built a fitness brand from 50+ logos, viral reels, and FOMO-worthy stories. Skyrocketed reach to 7K in 7 days, converting scrollers into 100+ subs month one. Proved creativity and strategy can turn empty spaces into packed communities.",
      image: img3,
      delay: 0.2,
      stats: [
        {
          icon: <Globe className="w-4 h-4" />,
          value: "7K",
          label: "Reach in 7 Days",
        },
        {
          icon: <Users className="w-4 h-4" />,
          value: "100+",
          label: "Monthly Subscribers",
        },
        {
          icon: <Award className="w-4 h-4" />,
          value: "50+",
          label: "Brand Assets",
        },
      ],
      tags: ["Branding", "Social Media", "Growth Strategy", "Video Production"],
    },
    {
      title: "TRES COPAS",
      role: "FOUNDER, CREATIVE DIRECTOR & MARKETING",
      description:
        "Turned a blank canvas into a hotspot: logos, menus, and social campaigns that hit 15K+ Instagram reach. Sparked opening month revenue by 150% with viral food reels and coffee hype. Proved that strategic blend of visual vibes and raving monsters.",
      image: img2,
      delay: 0.4,
      stats: [
        {
          icon: <Globe className="w-4 h-4" />,
          value: "15K+",
          label: "Instagram Reach",
        },
        {
          icon: <Users className="w-4 h-4" />,
          value: "150%",
          label: "Revenue Increase",
        },
        {
          icon: <Award className="w-4 h-4" />,
          value: "24",
          label: "Content Pieces",
        },
      ],
      tags: ["Restaurant", "Branding", "Social Media", "Video Production"],
    },
  ];

  return (
    <Element name="work" id="work">
      <motion.section
        ref={ref}
        className="py-16 md:py-24 relative overflow-hidden bg-dark"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/30 to-dark"></div>

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 184, 0, 0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 184, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "center center",
            }}
          ></div>

          {/* Flight path elements */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={`work-flight-${index}`}
              className="absolute"
              style={{
                top: `${30 + index * 20}%`,
                left: "-100px",
                width: "60px",
                height: "1px",
                background: `linear-gradient(90deg, transparent, rgba(255, 184, 0, ${
                  0.05 + index * 0.03
                }), transparent)`,
                filter: `blur(${1 + index}px)`,
                zIndex: -1,
              }}
              animate={{
                x: "calc(100vw + 100px)",
                y: [0, 10, 0, -10, 0],
              }}
              transition={{
                x: {
                  duration: 15 + index * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                delay: index * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center mb-10 md:mb-16"
            variants={titleVariants}
          >
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <motion.div
                  className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
                  initial={{ width: 0 }}
                  animate={{ width: [0, 32, 48] }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <h2 className="text-amber-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Portfolio
                </h2>
                <motion.div
                  className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
                  initial={{ width: 0 }}
                  animate={{ width: [0, 32, 48] }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                MY RECENT WORKS
              </h2>
            </div>

            <Link href="/projects">
              <motion.div
                className="flex items-center text-amber-400 group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="mr-2 font-medium text-sm sm:text-base">
                  VIEW ALL
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                variants={projectVariants}
                custom={index}
                transition={{ delay: project.delay }}
              >
                {/* Mobile layout (flex-col) on all screens, desktop (flex-row) on lg screens */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  {/* Project image with enhanced styling */}
                  <motion.div
                    className="w-full lg:w-1/2 relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Outline effect */}
                    <motion.div
                      className="absolute -inset-0.5 rounded-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255, 184, 0, 0.5), rgba(255, 215, 0, 0.2))",
                        filter: "blur(2px)",
                      }}
                    />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 z-10 pointer-events-none overflow-hidden">
                      <div className="absolute top-0 left-0 w-[2px] h-8 sm:h-12 bg-gradient-to-b from-amber-400 to-transparent"></div>
                      <div className="absolute top-0 left-0 w-8 sm:w-12 h-[2px] bg-gradient-to-r from-amber-400 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 right-0 w-16 sm:w-20 h-16 sm:h-20 z-10 pointer-events-none overflow-hidden">
                      <div className="absolute bottom-0 right-0 w-[2px] h-8 sm:h-12 bg-gradient-to-t from-amber-400 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-8 sm:w-12 h-[2px] bg-gradient-to-l from-amber-400 to-transparent"></div>
                    </div>

                    {/* Improved overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark/40 to-dark/80 opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 z-10 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                        transform: "translateX(-100%)",
                      }}
                      animate={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                        width={600}
                        height={400}
                      />
                    </div>
                  </motion.div>

                  {/* Project content with enhanced details */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.6 },
                      },
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100px" }}
                      transition={{ delay: 0.8 + project.delay, duration: 0.6 }}
                      className="h-px bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 mb-4 mx-auto lg:mx-0"
                    />

                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 text-center lg:text-left">
                      {project.title}
                    </h3>

                    <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-5">
                      <span className="text-amber-400 text-xs sm:text-sm font-medium mr-2">
                        ROLE:
                      </span>
                      <span className="text-white/80 text-sm sm:text-base">
                        {project.role}
                      </span>
                    </div>

                    {/* Tag Cloud */}
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-5 justify-center lg:justify-start">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-white/70 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                      {project.description}
                    </p>

                    {/* Key Stats - 3 columns on all screens */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-dark/40 border border-amber-500/10 rounded-lg p-2 sm:p-3 text-center"
                        >
                          <div className="text-amber-400 mb-1 flex justify-center">
                            {stat.icon}
                          </div>
                          <div className="text-base sm:text-xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-white/50 text-xs">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center lg:text-left">
                      <Link
                        href={`/project/${project.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <motion.button
                          className="btn-outline flex items-center gap-2 text-xs sm:text-sm mx-auto lg:mx-0"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span>View Project Details</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                          >
                            <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          </motion.div>
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default WorkSection;
