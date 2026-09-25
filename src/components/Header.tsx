"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Booking", href: "/booking" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#142544] text-white ${
        isScrolled
          ? "shadow-lg shadow-[#142544]/25 border-b border-[#dfe4ec]/20"
          : "border-b border-[#dfe4ec]/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with exact Logo component & Stripe & Steel brand text */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#b3202a] rounded-lg p-1"
          >
            <Logo className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-extrabold tracking-wider text-white uppercase leading-none">
                Stripe &amp; Steel
              </span>
              <span className="text-[10px] tracking-[0.25em] text-white/70 uppercase font-body font-medium">
                Barber Co. • Sandton
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-white font-semibold bg-white/15"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#b3202a] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Area */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+27117849299"
              className="text-white/80 hover:text-white text-xs flex items-center gap-1.5 transition-colors p-2 rounded-lg"
              title="Call Barber Concierge"
            >
              <Phone className="w-3.5 h-3.5 text-white/90" />
              <span className="font-mono font-medium">(011) 784-9299</span>
            </a>

            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:shadow-[#b3202a]/30 transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b3202a] focus:ring-offset-2 focus:ring-offset-[#142544]"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center gap-1.5 bg-[#b3202a] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-sm"
            >
              <span>Book</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#142544] border-b border-[#dfe4ec]/20"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-white/15 text-white font-semibold border-l-4 border-[#b3202a]"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:+27117849299"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white/80 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-white/90" />
                  <span>Direct: (011) 784-9299</span>
                </a>
                <Link
                  href="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold py-3 rounded-lg text-center transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
