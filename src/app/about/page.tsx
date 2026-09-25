import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Started with one chair | Stripe & Steel Barber Co. Sandton",
  description:
    "The shop opened in 2019 in a converted print shop on Rivonia Road. Learn about our rule that nobody gets rushed, single-blade razors, and barbers Thabo, Liam, and Sipho.",
};

interface Barber {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const barbers: Barber[] = [
  {
    id: "thabo-mokoena",
    name: "Thabo Mokoena",
    role: "Fade specialist",
    bio: "Ten years behind the chair. Thabo's fades are the reason people cross town to see us.",
    image:
      "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "liam-daniels",
    name: "Liam Daniels",
    role: "Classic cuts and shaves",
    bio: "Trained in traditional barbering. Ask Liam for a hot towel shave and prepare to relax.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "sipho-khumalo",
    name: "Sipho Khumalo",
    role: "Beards and kids cuts",
    bio: "Calm, precise and great with little ones. Sipho shapes beards that suit your face.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#0e1626] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase text-[#142544] tracking-tight">
            Started with one chair
          </h1>

          <p className="font-body text-base sm:text-lg text-[#525c70] leading-relaxed">
            A proper neighbourhood barbershop in Sandton. Classic cuts, skin fades and hot towel shaves from barbers who take their time.
          </p>
        </div>

        {/* 1. THE STORY SECTION */}
        <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-[#142544] leading-tight">
                Rivonia Road, Sandton
              </h2>
              <div className="font-body text-base text-[#525c70] space-y-4 leading-relaxed">
                <p>
                  The shop opened in 2019 in a converted print shop on Rivonia Road.
                </p>
                <p>
                  We have a rule that nobody gets rushed, and we use single-blade razors for every cut and shave.
                </p>
                <p>
                  A proper neighbourhood barbershop in Sandton. Classic cuts, skin fades and hot towel shaves from barbers who take their time.
                </p>
              </div>
            </div>

            {/* Right Information Block */}
            <div className="lg:col-span-5">
              <div className="bg-[#142544] text-white p-8 rounded-lg space-y-4 shadow-md">
                <h3 className="font-heading text-2xl font-bold uppercase text-white tracking-wide">
                  The Shop
                </h3>
                <div className="font-body text-sm text-[#dfe4ec]/90 space-y-2">
                  <p>
                    <strong className="text-white">Address:</strong> 14 Rivonia Road, Sandton, Johannesburg, 2196
                  </p>
                  <p>
                    <strong className="text-white">Hours:</strong> Mon–Fri 09:00–18:00, Sat 08:00–15:00, Sun Closed
                  </p>
                  <p>
                    <strong className="text-white">Phone:</strong> (011) 784-9299
                  </p>
                  <p>
                    <strong className="text-white">Standard:</strong> A rule that nobody gets rushed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE BARBERS */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#142544]">
              The Barbers
            </h2>
            <p className="font-body text-sm sm:text-base text-[#525c70]">
              Select your preferred barber when booking your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="space-y-5">
                  {/* Barber Header with Portrait */}
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
                    </div>
                  </div>

                  {/* Exact Bio Quote */}
                  <blockquote className="border-l-4 border-[#b3202a] pl-3 py-1 font-body text-sm sm:text-base text-[#0e1626] italic leading-relaxed">
                    “{barber.bio}”
                  </blockquote>
                </div>

                {/* Individual Red Book Now Button */}
                <div className="pt-6 mt-6 border-t border-[#dfe4ec]">
                  <Link
                    href={`/booking?barber=${barber.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book with {barber.name.split(" ")[0]}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BOOK YOUR CHAIR CALLOUT */}
        <div className="bg-white border-2 border-[#142544] rounded-lg p-8 sm:p-12 text-center space-y-6">
          <h3 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase text-[#142544]">
            Book your chair
          </h3>
          <p className="font-body text-base text-[#525c70] max-w-xl mx-auto leading-relaxed">
            A proper neighbourhood barbershop in Sandton. Classic cuts, skin fades and hot towel shaves from barbers who take their time.
          </p>
          <div>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book your chair</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
