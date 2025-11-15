"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="logo" className="w-10" />
          <span className="font-bold text-xl tracking-wide">AXIATIX</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/focus">Our Focus</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="bg-white text-primary px-4 py-2 rounded-md font-semibold shadow-sm hover:bg-light transition">
          Enquiry Now
        </button>
      </div>
    </header>
  );
}
