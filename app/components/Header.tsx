"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm text-gray-900 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center justify-center">
          <img
            src="/company_Logos/Axiatix5.png"
            alt="Axiatix logo"
            className="h-14 md:h-16 object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-8 text-lg bold">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/focus">Our Focus</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="
            bg-white 
            text-primary 
            px-5 py-2.5 
            rounded-md 
            font-semibold 
            shadow-sm
            transition-all duration-200
            hover:bg-primary 
            hover:text-white
          "
        >
          Enquiry Now
        </button>
      </div>
    </header>
  );
}
