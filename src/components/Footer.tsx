"use client";

import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://twitter.com/handle",
      icon: (
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      ),
    },
    {
      href: "https://instagram.com/handle",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      href: "https://linkedin.com/in/handle",
      icon: (
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      ),
    },
  ];

  const footerLinks = [
    { name: "Work", to: "work" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.footer
      className="py-8 sm:py-10 md:py-12 border-t border-purple-800/30 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Web3/Anime-style background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-900/5"></div>

        {/* Cyberpunk grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(138, 43, 226, 0.3) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(138, 43, 226, 0.3) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Glowing orbs */}
        <div className="absolute -top-16 sm:-top-32 -right-16 sm:-right-32 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute -bottom-16 sm:-bottom-32 -left-16 sm:-left-32 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-cyan-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
        >
          <motion.div
            className="mb-6 md:mb-0 text-center md:text-left"
            variants={itemVariants}
          >
            <Link href="/">
              <motion.div
                className="text-xl sm:text-2xl font-bold gold-gradient-text"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(255, 184, 0, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                ANIQI MEDIA
              </motion.div>
            </Link>
            <motion.p
              className="text-purple-300/80 mt-1 sm:mt-2 text-xs sm:text-sm"
              variants={itemVariants}
            >
              © {currentYear} ANIQI Media
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 mb-6 md:mb-0"
            variants={containerVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  boxShadow: "0 0 15px rgba(138, 43, 226, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {link.icon}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-4 sm:mt-6 md:mt-8 flex justify-center"
          variants={containerVariants}
        >
          <motion.nav
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-purple-300/80"
            variants={itemVariants}
          >
            {footerLinks.map((link, index) =>
              link.to ? (
                <ScrollLink
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="cursor-pointer"
                >
                  <motion.span
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 8px rgba(138, 43, 226, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.span>
                </ScrollLink>
              ) : (
                <Link key={index} href={link.href || "#"}>
                  <motion.span
                    className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 8px rgba(138, 43, 226, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              )
            )}
          </motion.nav>
        </motion.div>

        <motion.div
          className="mt-4 sm:mt-6 text-center text-[10px] sm:text-xs text-purple-400/50"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="relative">
            <span className="relative z-10">
              Crafted with passion and precision
            </span>
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg blur-sm z-0"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
