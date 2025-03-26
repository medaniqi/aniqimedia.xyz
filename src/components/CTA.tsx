"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const CTASection = () => {
  return (
    <motion.section
      className="py-16 md:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-secondary/40 to-dark"></div>

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
            key={`cta-flight-${index}`}
            className="absolute"
            style={{
              top: `${20 + index * 20}%`,
              left: "-100px",
              width: "120px",
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(255, 184, 0, ${
                0.05 + index * 0.05
              }), transparent)`,
              filter: `blur(${1 + index}px)`,
              zIndex: -1,
            }}
            animate={{
              x: "calc(100vw + 100px)",
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              x: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              delay: index * 2,
            }}
          />
        ))}

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full opacity-5"
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
          className="max-w-3xl mx-auto text-center"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
              initial={{ width: 0 }}
              animate={{ width: [0, 32, 48] }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <h2 className="text-amber-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Ready When You Are
            </h2>
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
              initial={{ width: 0 }}
              animate={{ width: [0, 32, 48] }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>

          <motion.p
            className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Interested in working together or have a question? I'm here to help
            you turn your ideas into amazing digital realities.
          </motion.p>

          <Link href="/contact">
            <motion.button
              className="btn-primary px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 mx-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 184, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span>Get In Touch</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.div>
            </motion.button>
          </Link>

          {/* Decorative element */}
          <motion.div
            className="w-16 sm:w-20 md:w-24 h-px mx-auto mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0"
            initial={{ width: 0 }}
            whileInView={{ width: [0, 64, 80, 96] }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
