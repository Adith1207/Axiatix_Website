"use client";

import { Mail, Phone, MapPin, Linkedin, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Background Section */}
      <div className="w-full bg-gradient-to-r from-primary to-[#7b1f1f] px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO + TEXT + SUBSCRIBE */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/company_Logos/Axiatix5.png"
                alt="Axiatix logo"
                className="w-24 md:w-28" // Increased from w-12
              />
            </div>

            <p className="text-sm leading-relaxed mb-6">
              High-quality content is the heart of a successful marketing
              strategy. It drives engagement, trust, and growth.
            </p>

            {/* Subscribe Input Box */}
            <div className="flex items-center bg-white rounded-md overflow-hidden w-max">
              <div className="px-3 text-primary">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="px-3 py-2 text-black outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 font-semibold hover:bg-[#8c2525] transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>› Home</li>
              <li>› About Us</li>
              <li>› Our Focus</li>
              <li>› Contact Us</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>Multi Cloud Services</li>
              <li>Datacenter & Disaster Recovery</li>
              <li>Managed Services</li>
              <li>Cloud Infrastructure Management</li>
              <li>Security & Cybersecurity</li>
              <li>Cloud Cost Optimization</li>
              <li>Unified Endpoint Management</li>
              <li>Generative AI</li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <div className="flex items-start gap-3 mb-3">
              <MapPin size={20} />
              <p className="text-sm">
                No: 35C, 13th Street, Madha Nagar Main Road, Madhananthapuram,
                Porur, Chennai-600125
              </p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Phone size={18} />
              <p className="text-sm">+91-99443 10289</p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Mail size={18} />
              <p className="text-sm">sales@axiatix.com</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-primary hover:scale-105 transition cursor-pointer">
                <X size={18} />
              </div>
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-primary hover:scale-105 transition cursor-pointer">
                <Linkedin size={18} />
              </div>
              <div className="w-9 h-9 bg-white rounded-md flex items-center justify-center text-primary hover:scale-105 transition cursor-pointer">
                <Instagram size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="w-full bg-primary py-4 text-center text-sm border-t border-white/20">
        © Copyright {new Date().getFullYear()}. All Rights Reserved by Axiatix.
        Developed by KP Webtech.
      </div>
    </footer>
  );
}
