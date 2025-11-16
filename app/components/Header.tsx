"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ServicesDropdown from "./ServicesDropdown";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" }, // used for mobile only
    { label: "Our Focus", href: "/focus" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className="
          w-full fixed top-0 left-0 z-50
          bg-white shadow-md border-b border-gray-200
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/company_Logos/Axiatix5.png"
              alt="Axiatix logo"
              className="h-14 md:h-16 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 text-lg font-medium">
            {menuItems.map((item) => {
              // Replace "Services" with dropdown component
              if (item.label === "Services") {
                return <ServicesDropdown key="services-dropdown" />;
              }

              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative transition-all duration-300 
                    ${
                      active
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }
                  `}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary transition-all duration-300
                      scale-x-0 group-hover:scale-x-100 origin-left
                      ${active ? "scale-x-100" : ""}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <button
            className="
              hidden md:block bg-primary text-white
              px-5 py-2.5 rounded-md font-semibold shadow-sm
              transition-all duration-300 hover:bg-[#8c2525] hover:shadow-lg hover:-translate-y-[2px]
            "
          >
            Enquiry Now
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="block md:hidden text-primary"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white shadow-2xl border-l border-gray-200 z-[60] 
          transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <img
            src="/company_Logos/Axiatix5.png"
            alt="Axiatix logo"
            className="h-14 object-contain"
          />
          <button onClick={() => setMobileOpen(false)}>
            <X size={32} className="text-primary" />
          </button>
        </div>

        {/* Mobile nav (services stays as link here) */}
        <nav className="flex flex-col px-6 py-6 gap-6 text-lg font-semibold text-gray-800">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`relative py-1 transition-colors duration-300 
                  ${active ? "text-primary" : "hover:text-primary"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 mt-6">
          <button
            className="w-full bg-primary text-white py-3 rounded-md font-semibold shadow-md
              transition-all duration-300 hover:bg-[#8c2525] hover:shadow-xl active:scale-95"
          >
            Enquiry Now
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-[55]"
        ></div>
      )}
    </>
  );
}
