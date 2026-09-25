import Link from "next/link";
import { Clock, Calendar, Check, Scissors, Sparkles, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | MAXX CUTS Sandton",
  description:
    "Explore our complete service menu and pricing in Sandton: Classic haircut (R180), Skin fade (R200), Beard trim and shape (R120), Hot towel shave (R150), and packages.",
};

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  highlight?: boolean;
  popular?: boolean;
}

const servicesList: ServiceItem[] = [
  {
    id: "classic-haircut",
    name: "Classic haircut",
    price: "R180",
    duration: "45 min",
    description: "Scissor or clipper cut, styled to suit you.",
    popular: true,
  },
  {
    id: "skin-fade",
    name: "Skin fade",
    price: "R200",
    duration: "45 min",
    description: "Clean gradient from skin to length.",
    popular: true,
  },
  {
    id: "beard-trim-and-shape",
    name: "Beard trim and shape",
    price: "R120",
    duration: "30 min",
    description: "Lined up, shaped and finished with oil.",
  },
  {
    id: "cut-and-beard-package",
    name: "Cut and beard package",
    price: "R290",
    duration: "75 min",
    description: "Haircut plus full beard shape-up.",
    highlight: true,
  },
  {
    id: "hot-towel-shave",
    name: "Hot towel shave",
    price: "R150",
    duration: "30 min",
    description: "Traditional straight-razor shave.",
  },
  {
    id: "kids-cut",
    name: "Kids cut (under 12)",
    price: "R130",
    duration: "30 min",
    description: "Patient, quick and tidy.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#0e1626] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header / Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142544]/5 border border-[#dfe4ec] text-[#142544] text-xs font-bold uppercase tracking-wider font-body">
            <Scissors className="w-3.5 h-3.5 text-[#b3202a]" />
            <span>Sandton Atelier Menu</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase text-[#142544] tracking-tight">
            Services & Pricing
          </h1>

          <p className="font-body text-base sm:text-lg text-[#525c70] leading-relaxed">
            Honest pricing with zero hidden surcharges. Every chair booking includes a personalized style consultation, neck razor line-up, and complimentary hot towel finish.
          </p>
        </div>

        {/* Responsive CSS Grid Mapping the 6 exact services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                service.highlight
                  ? "border-2 border-[#b3202a] shadow-lg shadow-[#b3202a]/10"
                  : service.popular
                  ? "border-2 border-[#142544] shadow-md"
                  : "border-2 border-[#dfe4ec] shadow-sm hover:shadow-md hover:border-[#142544]/40"
              }`}
            >
              {/* Badges */}
              {service.highlight && (
                <span className="absolute -top-3.5 left-6 bg-[#b3202a] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-sm">
                  Best Value Combo
                </span>
              )}
              {service.popular && !service.highlight && (
                <span className="absolute -top-3.5 left-6 bg-[#142544] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded shadow-sm">
                  Neighbourhood Favorite
                </span>
              )}

              <div>
                {/* Title & Price */}
                <div className="flex justify-between items-start gap-4 mb-3 pt-2">
                  <h2 className="font-heading text-3xl font-extrabold uppercase text-[#142544] leading-tight">
                    {service.name}
                  </h2>
                  <div className="text-right shrink-0">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#b3202a] block leading-none">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="inline-flex items-center gap-1.5 text-xs text-[#525c70] font-semibold bg-[#f7f5f0] border border-[#dfe4ec] px-2.5 py-1 rounded mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#b3202a]" />
                  <span>{service.duration}</span>
                </div>

                {/* Exact Description */}
                <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Exact Red Book Now CTA Button */}
              <div className="pt-4 border-t border-[#dfe4ec]">
                <Link
                  href={`/booking?service=${service.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b3202a]"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Now</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Grooming Standards / FAQ Info Strip */}
        <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-8 sm:p-10 shadow-sm space-y-6">
          <div className="border-b border-[#dfe4ec] pb-4">
            <h3 className="font-heading text-3xl font-extrabold uppercase text-[#142544]">
              What Is Included In Every Appointment
            </h3>
            <p className="font-body text-sm text-[#525c70]">
              The standard we keep for every client in Sandton.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body text-sm">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#f7f5f0] border border-[#dfe4ec] text-[#b3202a] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-[#142544] mb-1">Single-Blade Razor Detailing</h4>
                <p className="text-xs text-[#525c70] leading-relaxed">
                  Necklines and cheek contours are finished with fresh, single-use surgical steel blades.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#f7f5f0] border border-[#dfe4ec] text-[#b3202a] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-[#142544] mb-1">Eucalyptus Hot Towels</h4>
                <p className="text-xs text-[#525c70] leading-relaxed">
                  Steamed essential-oil towels soothe skin, open pores, and prevent post-shave razor bumps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-[#f7f5f0] border border-[#dfe4ec] text-[#b3202a] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-[#142544] mb-1">Tailored Pomades & Oils</h4>
                <p className="text-xs text-[#525c70] leading-relaxed">
                  Styling matte clays, high-sheen water-based pomades, and cold-pressed cedar beard oils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
