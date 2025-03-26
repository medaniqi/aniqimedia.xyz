"use client";
import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Camera,
  Code,
  Palette,
  Film,
  BrainCircuit,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import SoftwareList from "@/components/SoftwareList";

const ServicesSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Clean animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i,
      },
    }),
  };

  // Service data
  const services = [
    {
      title: "UI/UX DESIGN",
      icon: <Palette size={24} />,
      description: "Apps and websites that help users & brands that stick.",
    },
    {
      title: "VIDEO EDITING",
      icon: <Film size={24} />,
      description: "From concept to moving page—your story, amplified.",
    },
    {
      title: "SOCIAL MEDIA",
      icon: <Camera size={24} />,
      description: "Find exactly what it takes to explode, even your 5w5d TM.",
    },
    {
      title: "BRANDING",
      icon: <Code size={24} />,
      description: "Memorable identities that capture audience attention.",
    },
    {
      title: "CREATIVE STRATEGY",
      icon: <BrainCircuit size={24} />,
      description: "Strategic plans that align with your business goals.",
    },
    {
      title: "MEDIA BUYING",
      icon: <DollarSign size={24} />,
      description: "Ads that don't just click—they catch in.",
    },
  ];

  return (
    <Element name="services" id="services">
      <motion.section
        ref={ref}
        className="py-24 relative overflow-hidden"
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
            className="absolute -bottom-64 -right-64 w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 184, 0, 0.4) 0%, transparent 70%)",
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
            className="absolute -top-64 -left-64 w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255, 184, 0, 0.4) 0%, transparent 70%)",
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
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <h2 className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                What I Offer
              </h2>
              <motion.div
                className="h-px w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              SERVICES
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Comprehensive creative solutions to help your brand stand out and
              connect with your audience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={sectionVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-secondary/20 backdrop-blur-sm border border-amber-500/10 rounded-lg p-6 relative overflow-hidden group"
                variants={cardVariants}
                custom={index}
                whileHover={{ y: -0.1, transition: { duration: 0.3 } }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-amber-400 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-6 h-[1px] bg-gradient-to-r from-amber-400 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-amber-400 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-[1px] bg-gradient-to-l from-amber-400 to-transparent"></div>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                ></motion.div>

                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <motion.div
                      className="w-12 h-12 rounded-md bg-amber-500/10 flex items-center justify-center mr-4 text-amber-400"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-white/60 mb-4 flex-grow">
                    {service.description}
                  </p>

                  <motion.div
                    className="flex items-center text-amber-400 text-sm font-medium mt-auto group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Learn more</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="bg-amber-900/10 backdrop-blur-sm border border-amber-500/20 rounded-lg p-8 relative overflow-hidden">
              {/* Subtle shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Why Choose My Services?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-2 border-amber-500/30 pl-4">
                    <h4 className="text-amber-400 text-lg font-semibold mb-2">
                      Creative Excellence
                    </h4>
                    <p className="text-white/70">
                      Unique, eye-catching designs and strategies tailored to
                      your specific brand needs.
                    </p>
                  </div>

                  <div className="border-l-2 border-amber-500/30 pl-4">
                    <h4 className="text-amber-400 text-lg font-semibold mb-2">
                      Data-Driven Approach
                    </h4>
                    <p className="text-white/70">
                      All creative decisions backed by analytics and audience
                      insights for maximum impact.
                    </p>
                  </div>

                  <div className="border-l-2 border-amber-500/30 pl-4">
                    <h4 className="text-amber-400 text-lg font-semibold mb-2">
                      Collaborative Process
                    </h4>
                    <p className="text-white/70">
                      Work closely with you to ensure your vision is realized
                      while adding expert guidance.
                    </p>
                  </div>

                  <div className="border-l-2 border-amber-500/30 pl-4">
                    <h4 className="text-amber-400 text-lg font-semibold mb-2">
                      Timely Delivery
                    </h4>
                    <p className="text-white/70">
                      Efficient workflow processes to ensure your projects are
                      completed on schedule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <SoftwareList />
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default ServicesSection;
