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

  // Handle inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fake API submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3s
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

  // **Smooth Fade Animation Only**
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-[#0D0D0D] relative overflow-hidden">

      {/* Soft Gold Glow Only (lightweight) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h2>
          <p className="text-xl text-[#F5EDE3]/80 max-w-2xl mx-auto">
            Ready to capture your special moments? Let’s create magic together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Contact Info */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white">Let’s Start Your Journey</h3>

            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                note: "Mon–Fri, 8am–6pm"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                content: "hello@studiolens.com",
                note: "Reply within 24 hours"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Studio",
                content: "123 Photography Lane",
                note: "Book a studio tour"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Working Hours",
                content: "7am – 10pm",
                note: "Emergency shoots available"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1A1A1A]/60 border border-[#D4AF37]/20 rounded-2xl p-6 flex gap-4"
              >
                <div className="bg-[#D4AF37] text-[#0D0D0D] p-3 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  <p className="text-[#D4AF37]">{item.content}</p>
                  <p className="text-[#F5EDE3]/60 text-sm mt-1">{item.note}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1A1A1A]/60 border border-[#D4AF37]/20 rounded-2xl p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-[#0D0D0D] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#F5EDE3]/80">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Two Columns */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#F5EDE3] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F5EDE3] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#F5EDE3] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F5EDE3] mb-2">Event Type *</label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white"
                    >
                      <option value="">Select Type</option>
                      <option value="wedding">Wedding</option>
                      <option value="engagement">Engagement</option>
                      <option value="portrait">Portrait</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#F5EDE3] mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white"
                  />
                </div>

                <div>
                  <label className="block text-[#F5EDE3] mb-2">Message *</label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white resize-none"
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-[#0D0D0D] font-bold py-4 rounded-xl hover:bg-[#e6c96b] transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </motion.div>
        </div>

        {/* Quick Response */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-2xl p-6 text-center"
        >
          <p className="text-[#F5EDE3] text-lg">
            💫 <span className="text-[#D4AF37] font-semibold">Quick Response:</span>  
            We reply within 2 hours during business hours.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
