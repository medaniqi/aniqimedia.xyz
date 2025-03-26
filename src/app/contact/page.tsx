"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
    errorMessage: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true, error: false });

    try {
      // replace here:
      const response = await fetch("https://formspree.io/f/xldjnqrp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      // Form submitted successfully
      setFormStatus({
        submitted: true,
        submitting: false,
        error: false,
        errorMessage: "",
      });

      // Clear form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitted: false,
        submitting: false,
        error: true,
        errorMessage:
          error.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-10 md:pb-16 relative overflow-hidden">
      {/* Background elements remain the same */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-secondary/30 to-dark"></div>
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
            key={`contact-flight-${index}`}
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

        <motion.div
          className="absolute -top-32 sm:-top-64 -right-32 sm:-right-64 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-10"
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
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
              initial={{ width: 0 }}
              animate={{ width: [0, 32, 48] }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <h2 className="text-amber-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </h2>
            <motion.div
              className="h-px w-8 sm:w-12 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"
              initial={{ width: 0 }}
              animate={{ width: [0, 32, 48] }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
            CONTACT ME
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Let's discuss your project or just say hello. I'm always open to new
            ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact info cards remain the same */}
          <motion.div
            className="lg:col-span-1 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email Card */}
            <motion.div
              className="bg-secondary/20 backdrop-blur-sm border border-amber-500/10 rounded-lg p-4 sm:p-6 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="absolute top-0 left-0 w-10 sm:w-12 h-10 sm:h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[1px] h-4 sm:h-6 bg-gradient-to-b from-amber-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-4 sm:w-6 h-[1px] bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>

              <div className="relative z-10 flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-amber-400">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    Email
                  </h3>
                  <p className="text-white/60 mb-2 sm:mb-3 text-sm sm:text-base">
                    Feel free to reach out anytime
                  </p>
                  <a
                    href="mailto:contact@aniqimedia.com"
                    className="text-amber-400 hover:underline inline-flex items-center group text-sm sm:text-base"
                  >
                    contact@aniqimedia.com
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-secondary/20 backdrop-blur-sm border border-amber-500/10 rounded-lg p-4 sm:p-6 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="absolute top-0 left-0 w-10 sm:w-12 h-10 sm:h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[1px] h-4 sm:h-6 bg-gradient-to-b from-amber-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-4 sm:w-6 h-[1px] bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>

              <div className="relative z-10 flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-amber-400">
                  <MapPin size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    Location
                  </h3>
                  <p className="text-white/60 mb-2 sm:mb-3 text-sm sm:text-base">
                    Based in
                  </p>
                  <p className="text-amber-400 text-sm sm:text-base">
                    Casablanca, Morocco
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-secondary/20 backdrop-blur-sm border border-amber-500/10 rounded-lg p-4 sm:p-6 relative overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <div className="absolute top-0 left-0 w-10 sm:w-12 h-10 sm:h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[1px] h-4 sm:h-6 bg-gradient-to-b from-amber-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-4 sm:w-6 h-[1px] bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>

              <div className="relative z-10 flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-amber-400">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-white/60 mb-2 sm:mb-3 text-sm sm:text-base">
                    Available Mon-Fri
                  </p>
                  <div className="text-amber-400 hover:underline inline-flex items-center text-sm sm:text-base">
                    +212 (777) 777-777
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Updated with Formspree functionality */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-secondary/20 backdrop-blur-sm border border-amber-500/10 rounded-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 sm:w-16 h-10 sm:h-16 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[1px] h-6 sm:h-10 bg-gradient-to-b from-amber-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-6 sm:w-10 h-[1px] bg-gradient-to-r from-amber-400 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 right-0 w-10 sm:w-16 h-10 sm:h-16 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[1px] h-6 sm:h-10 bg-gradient-to-t from-amber-400 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-6 sm:w-10 h-[1px] bg-gradient-to-l from-amber-400 to-transparent"></div>
              </div>

              {/* Contact form - Success state */}
              {formStatus.submitted ? (
                <motion.div
                  className="text-center py-8 sm:py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="mb-4 sm:mb-6 text-amber-400 inline-block"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle
                      size={40}
                      className="sm:w-[60px] sm:h-[60px]"
                    />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <button
                    onClick={() =>
                      setFormStatus({
                        submitted: false,
                        submitting: false,
                        error: false,
                        errorMessage: "",
                      })
                    }
                    className="btn-outline py-2 px-5 sm:py-2 sm:px-6 text-sm sm:text-base"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Error message display */}
                  {formStatus.error && (
                    <motion.div
                      className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md flex items-start"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertTriangle className="h-5 w-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-red-300 text-sm">
                        {formStatus.errorMessage}
                      </p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white/70 mb-1.5 sm:mb-2 text-xs sm:text-sm"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-dark/50 border border-amber-500/20 rounded-md py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white/70 mb-1.5 sm:mb-2 text-xs sm:text-sm"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-dark/50 border border-amber-500/20 rounded-md py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-white/70 mb-1.5 sm:mb-2 text-xs sm:text-sm"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-dark/50 border border-amber-500/20 rounded-md py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-colors duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="message"
                      className="block text-white/70 mb-1.5 sm:mb-2 text-xs sm:text-sm"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-dark/50 border border-amber-500/20 rounded-md py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 transition-colors duration-300"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary px-4 py-2.5 sm:px-6 sm:py-3 flex items-center gap-2 text-sm sm:text-base"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(255, 184, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} className="sm:w-4 sm:h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
