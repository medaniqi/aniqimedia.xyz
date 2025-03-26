"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Element } from "react-scroll";
import { motion, useAnimation, useInView } from "framer-motion";
import { Camera, Briefcase, Calendar, Award, Users } from "lucide-react";
import pic from "@/assets/Images/pic.png";
import Image from "next/image";

const AboutSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  // Experience data
  const stats = [
    {
      value: "8+",
      label: "Years Experience",
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
      delay: 0,
    },
    {
      value: "150+",
      label: "Projects Completed",
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6" />,
      delay: 0.1,
    },
    {
      value: "50+",
      label: "Happy Clients",
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      delay: 0.2,
    },
    {
      value: "10+",
      label: "Industry Awards",
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      delay: 0.3,
    },
  ];

  return (
    <Element name="about" id="about">
      <motion.section
        ref={ref}
        className="py-16 md:py-24 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 184, 0, 0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 184, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "center center",
            }}
          ></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 184, 0, 0.6) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 184, 0, 0.6) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* About Content */}
            <motion.div
              variants={sectionVariants}
              className="text-center lg:text-left"
            >
              {/* Section title */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <motion.div
                    className="h-px w-8 md:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
                    initial={{ width: 0 }}
                    animate={{ width: [0, 32, 48] }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  <h2 className="text-amber-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                    Who I Am
                  </h2>
                  <motion.div
                    className="h-px w-8 md:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
                    initial={{ width: 0 }}
                    animate={{ width: [0, 32, 48] }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  ABOUT ME
                </h2>
              </motion.div>

              {/* About text */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 md:space-y-6"
              >
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  I help brands and creators stand out in the noise. Designing,
                  filming, and scaling brands that make scroll-addicts say
                  'Wait... what?'
                </p>

                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  With over 8 years of experience in digital design and
                  marketing, I've helped businesses of all sizes create
                  memorable brands and engaging content that resonates with
                  their audience. My approach combines strategic thinking with
                  creative execution to deliver results that exceed
                  expectations.
                </p>

                <motion.div
                  className="border-l-2 border-amber-500/30 pl-4 py-2 my-4 md:my-6 text-left"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <p className="text-amber-300 italic text-sm md:text-base">
                    "Design is not just what it looks like and feels like.
                    Design is how it works."
                  </p>
                  <p className="text-white/50 text-xs md:text-sm mt-2">
                    — Steve Jobs
                  </p>
                </motion.div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-3 md:gap-5 mt-6 md:mt-8 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <Link href="/contact">
                  <motion.button
                    className="btn-primary flex items-center gap-2 text-xs sm:text-sm px-4 py-2 md:px-6 md:py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get In Touch
                  </motion.button>
                </Link>

                <Link href="/projects">
                  <motion.button
                    className="btn-outline flex items-center gap-2 text-xs sm:text-sm px-4 py-2 md:px-6 md:py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    See All Projects
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile visualization */}
            <motion.div className="relative" variants={sectionVariants}>
              {/* Stats grid - 2x2 on all screens */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-secondary/20 backdrop-blur-sm border border-amber-500/10 rounded-lg p-3 sm:p-4 md:p-6 flex flex-col items-center text-center group relative overflow-hidden"
                    variants={statVariants}
                    custom={index}
                    whileHover={{ y: -5 }}
                    transition={{ delay: stat.delay }}
                  >
                    {/* Highlight effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2 md:mb-4 text-amber-400"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Value */}
                    <motion.h3
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h3>

                    {/* Label */}
                    <p className="text-white/60 text-xs sm:text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Profile image area */}
              <motion.div
                className="relative h-60 sm:h-64 md:h-72 mt-4 md:mt-6 rounded-lg overflow-hidden border border-amber-500/20"
                variants={itemVariants}
                transition={{ delay: 0.4 }}
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-dark/80 to-secondary flex items-center justify-center">
                  {/* Geometric elements */}
                  <motion.div
                    className="absolute top-8 left-8 md:top-10 md:left-10 w-12 h-12 md:w-20 md:h-20 border border-amber-500/20 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: 360,
                    }}
                    transition={{
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />

                  <motion.div
                    className="absolute bottom-8 right-8 md:bottom-10 md:right-10 w-10 h-10 md:w-16 md:h-16 border border-amber-500/20"
                    style={{
                      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                    }}
                    animate={{
                      rotate: -360,
                      borderRadius: [
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                        "70% 30% 30% 70% / 70% 70% 30% 30%",
                        "30% 70% 70% 30% / 30% 30% 70% 70%",
                      ],
                    }}
                    transition={{
                      rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      borderRadius: {
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-amber-500/30 bg-dark/50 mx-auto mb-2 md:mb-4 overflow-hidden flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "rgba(255, 184, 0, 0.5)",
                      }}
                    >
                      <Image src={pic} alt="picture" className="w-full" />
                    </motion.div>

                    <motion.h3
                      className="text-lg md:text-xl font-semibold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      Mohamed Hnidi
                    </motion.h3>

                    <motion.p
                      className="text-amber-300 text-xs sm:text-sm md:text-base"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      Creative Director & Multimedia Strategist
                    </motion.p>
                  </div>
                </div>

                {/* Animated particles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`about-particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      backgroundColor: `rgba(255, 184, 0, ${
                        Math.random() * 0.5 + 0.3
                      })`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      boxShadow: `0 0 ${
                        Math.random() * 5 + 2
                      }px rgba(255, 184, 0, 0.3)`,
                    }}
                    animate={{
                      y: [0, -(Math.random() * 50 + 20)],
                      x: [0, Math.random() * 30 - 15],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>

              {/* Skills */}
              <motion.div
                className="mt-4 md:mt-6 bg-amber-900/10 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4 md:p-6"
                variants={itemVariants}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">
                  Core Skills
                </h3>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    "UI/UX Design",
                    "Video Editing",
                    "Branding",
                    "Motion Graphics",
                    "Web Design",
                    "Social Media",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.2,
                        }}
                      />
                      <span className="text-white/80 text-sm md:text-base">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default AboutSection;
