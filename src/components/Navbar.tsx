"use client";
// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["work", "services", "about"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If we're at the top, set active to home
      if (window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", id: "work" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Mobile menu item with better touch feedback
  const mobileNavItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-lg border-b border-amber-500/10 py-3"
          : "bg-transparent py-5"
      }`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Highlight line */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-amber-600/0 via-amber-500 to-amber-600/0"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8 }}
        />
      )}

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgba(255, 184, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              variants={linkVariants}
            >
              ANIQI MEDIA
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="cursor-pointer"
              >
                <motion.div
                  className={`relative px-4 py-2 text-sm uppercase tracking-wide font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-amber-400"
                      : "text-white/80 hover:text-amber-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={linkVariants}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 w-1/2"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              </ScrollLink>
            ))}

            <motion.div variants={linkVariants}>
              <Link href="/contact">
                <motion.button
                  className="btn-primary ml-4 py-2 px-5 text-sm"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255, 184, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET IN TOUCH
                </motion.button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            variants={linkVariants}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-dark/95 backdrop-blur-lg border-b border-amber-500/10 overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    variants={mobileNavItemVariants}
                    whileTap={{
                      scale: 0.98,
                      backgroundColor: "rgba(255, 184, 0, 0.05)",
                    }}
                    className="rounded-md"
                  >
                    <ScrollLink
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={800}
                      className="cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div
                        className={`flex items-center py-4 px-3 rounded-md ${
                          activeSection === link.id
                            ? "text-amber-400 bg-amber-500/10"
                            : "text-white/80"
                        }`}
                      >
                        <ChevronRight
                          className={`w-4 h-4 mr-3 transition-opacity duration-300 ${
                            activeSection === link.id
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        <span className="uppercase tracking-wide text-sm font-medium">
                          {link.name}
                        </span>
                      </div>
                    </ScrollLink>
                  </motion.div>
                ))}

                <motion.div
                  variants={mobileNavItemVariants}
                  className="pt-3 px-1"
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="btn-primary w-full py-4 text-center text-sm uppercase tracking-wide font-medium">
                      Get In Touch
                    </button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
