"use client";

import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  X,
  SendHorizontal,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* MAIN FOOTER AREA */}
      <div className="w-full bg-[#f8f8f8] px-6 py-20 text-gray-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LOGO + TEXT + SUBSCRIBE */}
          <div className="max-w-sm">
            <img
              src="/company_Logos/Axiatix5.png"
              alt="Axiatix logo"
              className="w-28 md:w-32 mb-4"
            />

            <p className="text-sm leading-relaxed mb-6">
              High-quality content is the heart of a successful marketing
              strategy. It drives engagement, trust, and growth.
            </p>

            {/* EMAIL SUBSCRIBE — Styled like the reference */}
            <div className="flex items-center bg-white rounded-full overflow-hidden max-w-md w-full shadow-sm">
              {/* Icon */}
              <div className="pl-4 pr-2 text-gray-500">
                <Mail size={18} />
              </div>

              {/* Input */}
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 py-3 text-sm text-gray-700 outline-none"
              />

              {/* Subscribe Button */}
              <button
                className="
                    bg-primary
                    text-white
                    px-3
                    py-3
                    h-full
                    text-sm
                    font-semibold
                    hover:bg-[#8c2525]
                    transition-all
                  "
              >
                <SendHorizontal></SendHorizontal>
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Our_Focus"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Our Focus
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/multi-cloud"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Multi Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/disaster"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Datacenter & Disaster Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed_services"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/support"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Cloud Infrastructure Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Security & Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud_cost"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Cloud Cost Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/unified_endpoint"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Unified Endpoint Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/genAI"
                  className="hover:text-[#a42a2a] transition-colors"
                >
                  › Generative AI
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            {/* ADDRESS */}
            <div className="flex items-start gap-3 mb-3">
              <MapPin size={20} />
              <p className="text-sm leading-relaxed">
                Springs Haven 27/1, Ark Colony,
                <br />
                Eldams Road, Alwarpet,
                <br />
                Chennai - 600018
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 mb-3">
              <Phone size={18} />
              <p className="text-sm">+91-9626018181</p>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 mb-6">
              <Mail size={18} />
              <p className="text-sm">sales@axiatix.com</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              <div
                className="
                  w-9 h-9 
                  bg-white 
                  rounded-md 
                  flex items-center justify-center 
                  text-primary 
                  cursor-pointer
                  transition-all duration-200
                  hover:bg-primary 
                  hover:text-white 
                  shadow-sm
                "
              >
                <X size={18} />
              </div>

              <div
                className="
                  w-9 h-9 
                  bg-white 
                  rounded-md 
                  flex items-center justify-center 
                  text-primary 
                  cursor-pointer
                  transition-all duration-200
                  hover:bg-primary 
                  hover:text-white 
                  shadow-sm
                "
              >
                <Linkedin size={18} />
              </div>

              <div
                className="
                  w-9 h-9 
                  bg-white 
                  rounded-md 
                  flex items-center justify-center 
                  text-primary 
                  cursor-pointer
                  transition-all duration-200
                  hover:bg-primary 
                  hover:text-white 
                  shadow-sm
                "
              >
                <Instagram size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="w-full bg-gradient-to-r from-[#0c0c0c] to-[#1a1a1a] py-4 text-center text-sm border-t border-white/10 text-gray-400">
        © Copyright {new Date().getFullYear()}. All Rights Reserved by Axiatix.
        Developed by Adith Narayan G.
      </div>
    </footer>
  );
}
