import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: ""
      });
    }, 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 },
    loading: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 1,
        repeat: Infinity
      }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring"
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-[#0D0D0D] relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Floating Particles */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-3 h-3 bg-[#D4AF37] rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          x: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-20 w-2 h-2 bg-[#F5EDE3] rounded-full opacity-40"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Get In <span className="text-[#D4AF37] relative">
              Touch
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] rounded-full"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-[#F5EDE3]/80 max-w-2xl mx-auto"
          >
            Ready to capture your special moments? Let's create something beautiful together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Let's Start Your Journey
            </motion.h3>

            {/* Contact Cards */}
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                subtitle: "Mon-Fri from 8am to 6pm"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                content: "hello@studiolens.com",
                subtitle: "We'll respond within 24 hours"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Studio",
                content: "123 Photography Lane, City",
                subtitle: "Book a studio tour"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Working Hours",
                content: "Monday - Sunday: 7am - 10pm",
                subtitle: "Emergency shoots available"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 flex items-start gap-4 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-[#D4AF37] text-[#0D0D0D] p-3 rounded-xl"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-[#D4AF37] font-medium">{item.content}</p>
                  <p className="text-[#F5EDE3]/60 text-sm mt-1">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Send className="w-8 h-8 text-[#0D0D0D]" />
                  </motion.div>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#F5EDE3]/80">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-[#F5EDE3] text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5EDE3]/40 focus:outline-none focus:border-[#D4AF37] transition-all"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-[#F5EDE3] text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5EDE3]/40 focus:outline-none focus:border-[#D4AF37] transition-all"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-[#F5EDE3] text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5EDE3]/40 focus:outline-none focus:border-[#D4AF37] transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label className="block text-[#F5EDE3] text-sm font-medium mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="pre-wedding">Pre-Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="portrait">Portrait</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={inputVariants} whileFocus="focus">
                  <label className="block text-[#F5EDE3] text-sm font-medium mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </motion.div>

                <motion.div variants={inputVariants} whileFocus="focus">
                  <label className="block text-[#F5EDE3] text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5EDE3]/40 focus:outline-none focus:border-[#D4AF37] transition-all resize-none"
                    placeholder="Tell us about your vision and requirements..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={isSubmitting ? "loading" : "hover"}
                  whileTap="tap"
                  animate={isSubmitting ? "loading" : "initial"}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5EDE3] text-[#0D0D0D] font-bold py-4 px-8 rounded-xl relative overflow-hidden group"
                >
                  {/* Shine effect */}
                  <motion.div
                    initial={{ x: "-100%", skewX: "-20deg" }}
                    whileHover={{ x: "200%", skewX: "-20deg" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-[#0D0D0D] border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-[#F5EDE3]/60 text-sm text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Quick Response Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#D4AF37]/10 to-[#F5EDE3]/10 border border-[#D4AF37]/20 rounded-2xl p-6 text-center"
        >
          <p className="text-[#F5EDE3] text-lg">
            💫 <span className="font-semibold text-[#D4AF37]">Quick Response:</span> 
            We guarantee to get back to you within 2 hours during business hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}