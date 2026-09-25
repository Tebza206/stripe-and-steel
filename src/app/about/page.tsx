import Link from "next/link";
import Image from "next/image";
import { Award, Calendar, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Stripe & Steel Barber Co. Sandton",
  description:
    "Founded in 2019 in a converted print shop on Rivonia Road. Learn about our unhurried approach, single-blade razors, and meet master barbers Thabo, Liam, and Sipho.",
};

interface Barber {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
  specialties: string[];
}

const barbers: Barber[] = [
  {
    id: "thabo-mokoena",
    name: "Thabo Mokoena",
    role: "Fade specialist",
    bio: "Ten years behind the chair. Thabo's fades are the reason people cross town to see us.",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=400&auto=format&fit=crop",
    specialties: ["Low & High Skin Fades", "Scissor Over Comb", "Texture Work"],
  },
  {
    id: "liam-daniels",
    name: "Liam Daniels",
    role: "Classic cuts and shaves",
    bio: "Trained in traditional barbering. Ask Liam for a hot towel shave and prepare to relax.",
    experience: "8 Years Experience",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
    specialties: ["Hot Towel Straight Razor", "Classic Pompadours", "Head Shaves"],
  },
  {
    id: "sipho-khumalo",
    name: "Sipho Khumalo",
    role: "Beards and kids cuts",
    bio: "Calm, precise and great with little ones. Sipho shapes beards that suit your face.",
    experience: "7 Years Experience",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    specialties: ["Beard Sculpting", "Gentle Kids Cuts", "Razor Line-Ups"],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#0e1626] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header / Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142544]/5 border border-[#dfe4ec] text-[#142544] text-xs font-bold uppercase tracking-wider font-body">
            <Award className="w-3.5 h-3.5 text-[#b3202a]" />
            <span>Sandton Heritage</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase text-[#142544] tracking-tight">
            Our Story &amp; Barbers
          </h1>

          <p className="font-body text-base sm:text-lg text-[#525c70] leading-relaxed">
            Founded on Rivonia Road with a commitment to unhurried masculine grooming, authentic conversation, and traditional blade craftsmanship.
          </p>
        </div>

        {/* 1. THE STORY SECTION */}
        <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#b3202a] font-bold font-body block">
                Since 2019
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#142544] leading-tight">
                From A Converted Print Shop On Rivonia Road
              </h2>
              <div className="font-body text-base text-[#525c70] space-y-4 leading-relaxed">
                <p>
                  The shop opened in <strong>2019 in a converted print shop on Rivonia Road</strong>. Where giant Heidelberg presses once stamped inks onto paper, we set up vintage porcelain basins, cast-iron barber chairs, and mirror stations designed for precision.
                </p>
                <p>
                  From day one, our ethos has been defined by one foundational standard: <strong>nobody gets rushed</strong>. In an era where 15-minute quick-cuts churn clients through like an assembly line, we deliberately schedule 45-minute and 75-minute appointments so our barbers can give every cut the attention it deserves.
                </p>
                <p>
                  We insist on the timeless use of <strong>single-blade razors</strong>. Every neck taper and facial shave utilizes an individually packaged surgical steel blade disposed of immediately after each service, ensuring immaculate hygiene and razor-sharp clarity without irritation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#142544]">
                <div className="flex items-center gap-1.5 bg-[#f7f5f0] border border-[#dfe4ec] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#b3202a]" />
                  <span>Rule: Nobody Gets Rushed</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f7f5f0] border border-[#dfe4ec] px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#b3202a]" />
                  <span>Single-Blade Razor Standard</span>
                </div>
              </div>
            </div>

            {/* Right Story Visual Block */}
            <div className="lg:col-span-5">
              <div className="bg-[#142544] text-white p-8 rounded-lg space-y-6 shadow-md border-t-4 border-[#b3202a]">
                <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                  The Three Pillars
                </h3>
                <ul className="space-y-4 font-body text-sm text-[#dfe4ec]/90">
                  <li className="flex items-start gap-3">
                    <span className="font-heading text-xl font-bold text-[#b3202a] shrink-0">01</span>
                    <div>
                      <strong className="text-white block font-semibold">Patience in the Chair</strong>
                      Full consultation before clippers or scissors touch your hair.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-heading text-xl font-bold text-[#b3202a] shrink-0">02</span>
                    <div>
                      <strong className="text-white block font-semibold">Blade Hygiene</strong>
                      Single-use surgical blades discarded after every client.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-heading text-xl font-bold text-[#b3202a] shrink-0">03</span>
                    <div>
                      <strong className="text-white block font-semibold">Sandton Community</strong>
                      A respectful, relaxed atmosphere with great coffee and cold drinks.
                    </div>
                  </li>
                </ul>

                <div className="pt-2 border-t border-white/10 text-xs text-white/70 italic">
                  “We measure our craft not by how many chairs we turn, but by the smiles when clients see their neckline in the mirror.”
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BARBER PROFILES */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#b3202a] font-bold font-body block">
              Meet The Craftsmen
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#142544]">
              Our Master Barbers
            </h2>
            <p className="font-body text-sm sm:text-base text-[#525c70]">
              Select your preferred barber when booking your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-5">
                  {/* Barber Header with Professional Unsplash Portrait */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24 shrink-0">
                      <Image
                        src={barber.image}
                        alt={`${barber.name} - ${barber.role}`}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#b3202a] shadow-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-extrabold uppercase text-[#142544] leading-tight">
                        {barber.name}
                      </h3>
                      <span className="text-xs font-bold text-[#b3202a] uppercase tracking-wider block font-body">
                        {barber.role}
                      </span>
                      <div className="inline-block mt-1 px-2 py-0.5 rounded bg-[#f7f5f0] border border-[#dfe4ec] text-[11px] font-semibold text-[#525c70]">
                        {barber.experience}
                      </div>
                    </div>
                  </div>

                  {/* Exact Bio Quote */}
                  <blockquote className="border-l-4 border-[#b3202a] pl-3 py-1 font-body text-sm sm:text-base text-[#0e1626] italic leading-relaxed">
                    “{barber.bio}”
                  </blockquote>

                  {/* Specialties List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase font-bold text-[#525c70] tracking-wider block">
                      Core Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {barber.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-[11px] font-medium bg-[#f7f5f0] border border-[#dfe4ec] text-[#0e1626] px-2 py-0.5 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Red Book Now Button */}
                <div className="pt-6 mt-6 border-t border-[#dfe4ec]">
                  <Link
                    href={`/booking?barber=${barber.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book With {barber.name.split(" ")[0]}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. VISIT US IN SANDTON CALLOUT */}
        <div className="bg-white border-2 border-[#142544] rounded-lg p-8 sm:p-12 text-center space-y-6">
          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-[#142544]">
            Ready For Your Chair?
          </h3>
          <p className="font-body text-base text-[#525c70] max-w-xl mx-auto leading-relaxed">
            Walk-ins are welcomed subject to the chair schedule, but online bookings receive guaranteed priority with zero waiting.
          </p>
          <div>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
