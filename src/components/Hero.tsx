"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import pic from "@/assets/Images/pic.png";

// Text animation library
import { TypeAnimation } from "react-type-animation";

// Number animation component
const AnimatedCounter = ({ value, duration = 2, className }: any) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value.replace("+", ""));
    const incrementTime = Math.floor((duration * 1000) / end);

    // Don't start animation with 0 increment time
    if (incrementTime === 0) {
      setCount(end);
      return;
    }

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isInView]);

  return (
    <span ref={countRef} className={className}>
      {count}
      {value.includes("+") ? "+" : ""}
    </span>
  );
};

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
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

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-16 md:pt-20 pb-16 overflow-hidden"
    >
      {/* Background with clean aesthetics */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-secondary to-dark"></div>

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

        {/* Flying elements */}
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={`flight-path-${index}`}
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
              x: { duration: 15 + index * 5, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              delay: index * 2,
            }}
          />
        ))}

        {/* Circular glow */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Content Column */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-block bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-amber-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                Creative Professional
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 md:space-y-4"
            >
              <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                <TypeAnimation
                  sequence={[
                    "Creative Director",
                    1000,
                    "Digital Designer",
                    1000,
                    "Creative Director",
                    500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={1}
                />
              </h4>

              <h3 className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                &
              </h3>

              <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                <TypeAnimation
                  sequence={["Multimedia Strategist", 500]}
                  wrapper="span"
                  speed={50}
                />
              </h4>

              {/* Animated underline */}
              <motion.div
                className="h-1 w-16 md:w-24 bg-amber-500 rounded-full mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={{ width: [0, 64, 96] }}
                transition={{ delay: 2, duration: 0.8 }}
              />
            </motion.div>

            {/* Mobile Profile Image - Only show on mobile */}
            <motion.div
              className="relative mx-auto w-48 h-48 lg:hidden"
              variants={itemVariants}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-amber-500/30"
                animate={{
                  rotate: 360,
                  boxShadow: [
                    "0 0 15px rgba(255, 184, 0, 0.1)",
                    "0 0 25px rgba(255, 184, 0, 0.3)",
                    "0 0 15px rgba(255, 184, 0, 0.1)",
                  ],
                }}
                transition={{
                  rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />

              <motion.div
                className="absolute inset-[8px] rounded-full overflow-hidden border-2 border-amber-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-amber-900/20 to-secondary">
                  <Image src={pic} alt="Profile" className="w-full" />
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-4 md:space-y-6"
              variants={itemVariants}
            >
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
                I help brands and creators{" "}
                <span className="text-amber-400 font-medium relative inline-block">
                  stand out
                </span>
                in the noise.
              </p>

              <div className="relative pl-4 md:pl-5 border-l-2 border-amber-500/40 py-2 text-left">
                <p className="text-sm sm:text-base text-amber-300/80 italic leading-relaxed">
                  Designing, filming, and scaling brands that make
                  scroll-addicts say{" "}
                  <span className="text-yellow-400 font-semibold">
                    'Wait... what?'
                  </span>
                  <motion.div
                    className="absolute -top-1 -right-1"
                    animate={{ rotate: 15, scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <Sparkles size={14} className="text-yellow-400" />
                  </motion.div>
                </p>
              </div>
            </motion.div>

            {/* Stats Row with Animated Counters */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4"
              variants={itemVariants}
            >
              {[
                { value: "8+", label: "Years Experience", delay: 2.0 },
                { value: "150+", label: "Projects", delay: 2.2 },
                { value: "50+", label: "Clients", delay: 2.4 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: stat.delay, duration: 0.5 }}
                >
                  <motion.div
                    className="relative"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: stat.delay,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {/* Pulsing background effect for numbers */}
                    <motion.div
                      className="absolute inset-0 bg-amber-500/5 rounded-full blur-md"
                      animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.3,
                      }}
                    />
                    <AnimatedCounter
                      value={stat.value}
                      duration={2.5}
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
                    />
                  </motion.div>
                  <motion.div
                    className="text-white/60 text-xs sm:text-sm mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: stat.delay + 0.2 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-5 pt-2 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <ScrollLink
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <motion.button
                  className="btn-primary group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>View My Work</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                  </motion.div>
                </motion.button>
              </ScrollLink>

              <Link href="/contact">
                <motion.button
                  className="btn-outline relative group overflow-hidden px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">Get In Touch</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/30 to-amber-600/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.7 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content Column - Profile Visualization */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
          >
            <div className="relative w-full h-[500px]">
              {/* Main circular frame */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-amber-500/30"
                animate={{
                  rotate: 360,
                  boxShadow: [
                    "0 0 20px rgba(255, 184, 0, 0.1)",
                    "0 0 30px rgba(255, 184, 0, 0.3)",
                    "0 0 20px rgba(255, 184, 0, 0.1)",
                  ],
                }}
                transition={{
                  rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              />

              {/* Orbiting elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`orbit-${i}`}
                  className="absolute top-1/2 left-1/2 w-5 h-5"
                  style={{
                    transformOrigin: "0px 150px",
                    zIndex: 10 - i,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full bg-amber-400"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(255, 184, 0, 0.5)",
                        "0 0 15px rgba(255, 184, 0, 0.8)",
                        "0 0 5px rgba(255, 184, 0, 0.5)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  />
                </motion.div>
              ))}

              {/* Profile image area */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full overflow-hidden border-2 border-amber-500/50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{
                  borderColor: "rgba(255, 184, 0, 0.8)",
                  scale: 1.05,
                }}
              >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-amber-900/20 to-secondary">
                  <Image src={pic} alt="Profile" className="w-full" />
                </div>

                {/* Glowing overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on smaller mobile screens, shown on sm and up */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ScrollLink
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="cursor-pointer"
        >
          <motion.div
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              className="text-amber-400 text-sm mb-4 tracking-widest uppercase font-medium"
              animate={{
                textShadow: [
                  "0 0 3px rgba(255, 184, 0, 0.2)",
                  "0 0 8px rgba(255, 184, 0, 0.6)",
                  "0 0 3px rgba(255, 184, 0, 0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Explore
            </motion.span>

            {/* Futuristic scroll button container */}
            <motion.div
              className="relative w-12 h-12 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              {/* Spinning outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-amber-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing middle ring */}
              <motion.div
                className="absolute inset-[3px] rounded-full border border-amber-500/40"
                animate={{
                  scale: [1, 1.1, 1],
                  borderColor: [
                    "rgba(255, 184, 0, 0.2)",
                    "rgba(255, 184, 0, 0.6)",
                    "rgba(255, 184, 0, 0.2)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Inner container with chevron */}
              <motion.div
                className="relative w-8 h-8 rounded-full flex items-center justify-center bg-amber-500/10 border border-amber-500/50 group-hover:bg-amber-500/20 transition-colors duration-300"
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(255, 184, 0, 0.3)",
                    "0 0 12px rgba(255, 184, 0, 0.7)",
                    "0 0 5px rgba(255, 184, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <ChevronDown className="text-amber-400 h-4 w-4" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Radial particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`scroll-particle-${i}`}
                className="absolute w-1 h-1 rounded-full bg-amber-400"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  x: [0, Math.cos((i * (Math.PI * 2)) / 5) * 40],
                  y: [0, Math.sin((i * (Math.PI * 2)) / 5) * 40],
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
