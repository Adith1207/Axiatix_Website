"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  X,
  SendHorizontal,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleRedirect() {
    if (!email) return;

    const nameFromEmail = email.split("@")[0];
    window.location.href = `/Contact?email=${email}&name=${nameFromEmail}`;
  }

  return (
    <footer className="text-white">
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

            {/* EMAIL SUBSCRIBE */}
            <div className="flex items-center bg-white rounded-full overflow-hidden max-w-md w-full shadow-sm">
              <div className="pl-4 pr-2 text-gray-500">
                <Mail size={18} />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 py-3 text-sm text-gray-700 outline-none"
              />

              <button
                onClick={handleRedirect}
                className="bg-primary text-white px-3 py-3 h-full text-sm font-semibold hover:bg-[#8c2525] transition-all"
              >
                <SendHorizontal />
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#a42a2a]">
                  › Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#a42a2a]">
                  › About Us
                </Link>
              </li>
              <li>
                <Link href="/Our_Focus" className="hover:text-[#a42a2a]">
                  › Our Focus
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-[#a42a2a]">
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
                  className="hover:text-[#a42a2a]"
                >
                  › Multi Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/disaster"
                  className="hover:text-[#a42a2a]"
                >
                  › Datacenter & Disaster Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed_services"
                  className="hover:text-[#a42a2a]"
                >
                  › Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="hover:text-[#a42a2a]">
                  › Cloud Infrastructure Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/security"
                  className="hover:text-[#a42a2a]"
                >
                  › Security & Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud_cost"
                  className="hover:text-[#a42a2a]"
                >
                  › Cloud Cost Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/unified_endpoint"
                  className="hover:text-[#a42a2a]"
                >
                  › Unified Endpoint Management
                </Link>
              </li>
              <li>
                <Link href="/services/genAI" className="hover:text-[#a42a2a]">
                  › Generative AI
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <div className="flex items-start gap-3 mb-3">
              <MapPin size={20} className="text-[#7A1E1E]" />
              <p className="text-sm">
                Springs Haven 27/1, Ark Colony, Eldams Road, Alwarpet, Chennai -
                600018
              </p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Phone size={18} className="text-[#7A1E1E]" />
              <p className="text-sm">+91-9626018181</p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Mail size={18} className="text-[#7A1E1E]" />
              <p className="text-sm">contact@axiatix.com</p>
            </div>

            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://x.com/axiatix"
                className="social-btn"
              >
                <X size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/axiatix/"
                className="social-btn"
              >
                <Linkedin size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/axiatixconsulting"
                className="social-btn"
              >
                <Instagram size={18} />
              </a>
              <a
                target="_blank"
                href="https://facebook.com"
                className="social-btn"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#0c0c0c] to-[#1a1a1a] py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Axiatix. Developed by Adith Narayan G.
      </div>
    </footer>
  );
}
