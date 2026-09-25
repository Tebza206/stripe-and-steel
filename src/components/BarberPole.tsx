import React from "react";

interface BarberPoleProps {
  className?: string;
}

export default function BarberPole({ className = "" }: BarberPoleProps) {
  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}
      aria-label="Barber Pole Decoration"
    >
      <style>{`
        @keyframes barberPoleScroll {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 0 204px;
          }
        }

        .barber-pole-animation {
          animation: barberPoleScroll 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .barber-pole-animation {
            animation: none !important;
          }
        }
      `}</style>

      {/* Main Barber Pole Cylinder */}
      <div
        className="barber-pole-animation relative shrink-0 overflow-hidden"
        style={{
          width: "170px",
          height: "440px",
          borderRadius: "85px",
          border: "8px solid #142544",
          boxShadow: "0 0 0 6px #f7f5f0, 0 0 0 9px #b3202a, 0 20px 25px -5px rgba(20, 37, 68, 0.15)",
          background:
            "repeating-linear-gradient(-55deg, #b3202a 0 34px, #ffffff 34px 68px, #142544 68px 102px)",
          backgroundSize: "100% 204px",
        }}
      >
        {/* Subtle glass cylinder highlight reflection for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "77px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, transparent 40%, transparent 60%, rgba(0,0,0,0.15) 85%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </div>
    </div>
  );
}
