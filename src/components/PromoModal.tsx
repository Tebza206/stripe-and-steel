"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Scissors, Check, Copy } from "lucide-react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem("maxxcuts_promo_seen");
      if (dismissed) {
        return;
      }
    } catch {
      // sessionStorage safety
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("maxxcuts_promo_seen", "true");
    } catch {
      // safe fallback
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("FIRST10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDismiss}
            className="fixed inset-0 bg-[#0e1626]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-title"
            className="relative w-full max-w-md bg-[#f7f5f0] border-2 border-[#dfe4ec] rounded-lg shadow-2xl overflow-hidden z-10"
          >
            {/* Top decorative barber red accent bar */}
            <div className="h-2 w-full bg-[#b3202a]" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-[#525c70] hover:text-[#0e1626] hover:bg-[#dfe4ec]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b3202a]"
              aria-label="Close promotion dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 text-center space-y-5">
              {/* Badge Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#142544] text-white mx-auto shadow-md">
                <Scissors className="w-7 h-7 rotate-45" />
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#142544]/10 text-[#142544] text-xs font-bold uppercase tracking-wider font-body">
                  <Sparkles className="w-3.5 h-3.5 text-[#b3202a]" />
                  <span>Welcome Invitation</span>
                </div>
                <h3
                  id="promo-title"
                  className="font-heading text-3xl sm:text-4xl font-extrabold text-[#142544] pt-1 tracking-tight uppercase"
                >
                  10% Off Your First Cut
                </h3>
                <p className="text-sm text-[#525c70] leading-relaxed max-w-sm mx-auto font-body">
                  Experience traditional hot towel treatments, razor tapers, and bespoke styling. Enjoy an exclusive 10% saving on your inaugural appointment.
                </p>
              </div>

              {/* Coupon Code Pill */}
              <div className="bg-white border-2 border-dashed border-[#dfe4ec] rounded-lg p-3 flex items-center justify-between gap-3 shadow-inner">
                <div className="text-left pl-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#525c70] block">
                    Promo Code
                  </span>
                  <span className="font-mono text-lg font-extrabold text-[#b3202a] tracking-wider">
                    FIRST10
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e1626] bg-[#f7f5f0] hover:bg-[#dfe4ec] border border-[#dfe4ec] px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-[#b3202a]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#525c70]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <Link
                  href="/booking?promo=FIRST10"
                  onClick={handleDismiss}
                  className="w-full flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold text-base py-3 px-4 rounded-lg shadow-lg shadow-[#b3202a]/20 transition-all transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b3202a] focus:ring-offset-2 focus:ring-offset-[#f7f5f0]"
                >
                  <span>Claim 10% Off & Book Now</span>
                </Link>

                <button
                  type="button"
                  onClick={handleDismiss}
                  className="w-full py-2 text-xs text-[#525c70] hover:text-[#0e1626] transition-colors font-medium rounded-lg"
                >
                  No thanks, continue browsing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
