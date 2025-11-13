import { useState } from "react";
import { motion } from "framer-motion"; // <-- REQUIRED: fixes "motion is not defined"
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API delay
    await new Promise((r) => setTimeout(r, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after short delay
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
    }, 2500);
  };

  return (
    <section className="min-h-screen py-16 px-5 bg-[#0D0D0D] relative overflow-hidden">

      {/* Soft Gold Glow (very light) */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#D4AF37]/10 blur-3xl opacity-20 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#D4AF37]/10 blur-3xl opacity-20 translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header (same style as your About header) */}
        <div className="text-center mb-20 mt-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h2>

          {/* animated paragraph only */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#F5EDE3]/80 max-w-2xl mx-auto mt-4 text-lg"
          >
            Ready to capture your special moments? Let’s create magic together.
          </motion.p>
        </div>

        {/* ========== TWO COLUMN LAYOUT ========== */}
<div className="
  grid 
  grid-cols-1 
  lg:grid-cols-2 
  gap-10 
  lg:gap-14 
  items-start
">

  {/* ================= LEFT : CONTACT INFO ================= */}
  <div className="space-y-6 sm:space-y-8 w-full">

    {[
      {
        icon: <Phone className="w-6 h-6" />,
        title: "Phone",
        content: "+1 (555) 123-4567",
        note: "Mon–Fri, 8am–6pm",
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        content: "hello@studiolens.com",
        note: "Reply within 24 hours",
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Studio Address",
        content: "123 Photography Lane",
        note: "Visit by appointment",
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Working Hours",
        content: "7am – 10pm",
        note: "Emergency shoots available",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          bg-[#111]/70 
          border border-[#D4AF37]/25 
          rounded-2xl 
          p-5 
          sm:p-6 
          flex 
          gap-4 
          sm:gap-5
          items-start 
          hover:border-[#D4AF37]/40 
          transition-all
        "
      >
        <div className="bg-[#D4AF37] text-black p-3 sm:p-4 rounded-xl shadow-md">
          {item.icon}
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg sm:text-xl">
            {item.title}
          </h4>
          <p className="text-[#D4AF37] text-base sm:text-lg">
            {item.content}
          </p>
          <p className="text-[#F5EDE3]/70 text-sm mt-1">{item.note}</p>
        </div>
      </div>
    ))}

  </div>

  {/* ================= RIGHT : FORM ================= */}
  <div className="
    bg-[#111]/70 
    border border-[#D4AF37]/25 
    rounded-2xl 
    p-6 
    sm:p-8 
    lg:p-10 
    shadow-lg 
    w-full
  ">
    {isSubmitted ? (
      <div className="text-center py-10">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl">
          <Send className="text-[#0D0D0D] w-7 h-7 sm:w-9 sm:h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Message Sent!
        </h3>
        <p className="text-[#F5EDE3]/80">We’ll get back to you shortly.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

        {/* GRID INPUTS */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} required />
          <Input label="Email *" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
          <Select
            label="Event Type *"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            options={[
              { value: "", text: "Select Event Type" },
              { value: "wedding", text: "Wedding" },
              { value: "engagement", text: "Engagement" },
              { value: "portrait", text: "Portrait" },
            ]}
          />
        </div>

        <Input label="Event Date *" type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />

        {/* MESSAGE */}
        <div>
          <label className="block text-[#F5EDE3] mb-2">Message *</label>
          <textarea
            rows="5"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="
              w-full bg-[#0D0D0D] 
              border border-[#D4AF37]/20 
              rounded-xl 
              px-4 py-3 text-white 
              resize-none 
              focus:border-[#D4AF37] 
              transition-all
            "
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={isSubmitting}
          className="
            w-full 
            bg-[#D4AF37] 
            text-black 
            font-bold 
            py-3 sm:py-4 
            rounded-xl 
            text-lg 
            shadow-xl 
            hover:bg-[#e6c86f] 
            transition-all
          "
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

      </form>
    )}
  </div>
</div>



        {/* Quick Response */}
        <div className="mt-14 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl p-5 text-center">
          <p className="text-[#F5EDE3] text-lg">
            💫 <span className="text-[#D4AF37] font-semibold">Quick Response:</span> We usually reply within 2 hours.
          </p>
        </div>
        {/* MAP */}
        <div className="mt-20">
          <h3 className="text-3xl text-center font-bold text-[#D4AF37] mb-6">
            Visit Our Studio
          </h3>

          <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20 shadow-lg">
            <iframe
              title="Studio Location"
              className="w-full h-72 md:h-96"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610117196!2d72.74109825!3d23.0204978!2m3!1f0!2f0!3f0!3m2!
              1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f29d559ae7%3A0x4a181216d1c44cc!2sAhmedabad%2C%20Gujarat!
              5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Inputs */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-[#F5EDE3] mb-2">{label}</label>
      <input
        {...props}
        className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:outline-none"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-[#F5EDE3] mb-2">{label}</label>
      <select
        {...props}
        className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.text}</option>
        ))}
      </select>
    </div>
  );
}
