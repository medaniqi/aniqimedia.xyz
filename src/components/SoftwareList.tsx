import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import photoshop from "@/assets/Images/photoshop.png";
import illustrator from "@/assets/Images/illustrator.png";
import capcut from "@/assets/Images/capcut-icon.png";

const SoftwareList = () => {
  const softwareIcons = [
    { name: "Photoshop", icon: photoshop },
    { name: "Illustrator", icon: illustrator },
    { name: "Capcut", icon: capcut },
  ];

  return (
    <motion.div
      className="mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-center text-xl font-semibold mb-6 gold-gradient-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tools & Software I Use
      </motion.h3>

      {/* Horizontal line with gradient */}
      <motion.div
        className="w-24 h-[2px] mx-auto mb-8 relative overflow-hidden"
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 bg-size-200"
          animate={{
            backgroundPosition: ["0% center", "200% center"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 py-4"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {softwareIcons.map((software, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center w-16 h-16 grayscale hover:grayscale-0 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              },
            }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-full h-full bg-purple-900/20 flex items-center justify-center rounded-md overflow-hidden backdrop-blur-sm relative group border border-purple-500/10"
              whileHover={{
                borderColor: "rgba(138, 43, 226, 0.4)",
                boxShadow: "0 0 15px rgba(138, 43, 226, 0.3)",
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(138, 43, 226, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              <Image
                src={software.icon}
                alt={software.name}
                width={40}
                height={40}
                className="w-[40px] relative z-10"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-4 text-sm text-cyan-300/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        And many more professional tools to bring your vision to life
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="w-6 h-6 absolute -bottom-3 left-1/2 transform -translate-x-1/2 opacity-30 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <div className="absolute top-0 left-1/2 w-[1px] h-6 bg-gradient-to-b from-purple-500 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default SoftwareList;
