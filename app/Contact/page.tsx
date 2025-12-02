"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // READ VALUES FROM FOOTER REDIRECT
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const nameParam = searchParams.get("name");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Autofill values
  useEffect(() => {
    if (emailParam) setEmail(emailParam);
    if (nameParam) setName(nameParam.replace(/\./g, " "));
  }, [emailParam, nameParam]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setToastMessage("Message Sent Successfully!");
      // Clear message only, but keep name/email
      e.target.message.value = "";
    } else {
      setToastMessage("Failed to send. Please try again later.");
    }

    setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-[#faf3f3] to-[#f1dede] px-6 relative overflow-hidden">
      {/* Decorative Blurred Circles */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 bg-[#7A1E1E]/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-10 w-80 h-80 bg-[#7A1E1E]/20 rounded-full blur-3xl" />

      {/* Custom Toast Box */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-[#aa2020] text-white shadow-2xl px-6 py-4 rounded-2xl font-semibold border border-[#7A1E1E]/40"
        >
          {toastMessage}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT SIDE INFO */}
        <div className="text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm text-center md:text-left">
            Get in <span className="text-[#b41c1c]">Touch</span>
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center md:text-left">
            Have questions about our services? We're here to assist you every
            step of the way. Let's build something great together.
          </p>

          <div className="space-y-4 text-gray-800 text-lg font-semibold text-center md:text-left">
            <p className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="w-6 h-6 text-[#7A1E1E]" /> +91 9876543210
            </p>

            <p className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="w-6 h-6 text-[#7A1E1E]" /> contact@axiatix.com
            </p>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 w-fit px-8 py-3 rounded-full font-semibold bg-green-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all justify-center"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid gap-6 text-left bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/40"
        >
          <div>
            <label className="block mb-1 text-gray-900 font-semibold">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl border border-black bg-white text-black focus:outline-none focus:border-[#7A1E1E] focus:ring-2 focus:ring-[#7A1E1E]"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-900 font-semibold">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-black bg-white text-black focus:outline-none focus:border-[#7A1E1E] focus:ring-2 focus:ring-[#7A1E1E]"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-900 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="w-full p-4 rounded-xl border border-black bg-white text-black focus:outline-none focus:border-[#7A1E1E] focus:ring-2 focus:ring-[#7A1E1E]"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="mt-4 w-full md:w-auto px-10 py-4 rounded-full font-bold bg-[#aa2020] text-white shadow-lg hover:shadow-[0_0_25px_rgba(122,30,30,0.55)] transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
