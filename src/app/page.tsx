import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import Logo from "@/components/Logo";
import BarberPole from "@/components/BarberPole";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f5f0] text-[#0e1626]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#dfe4ec]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#142544_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Core Copy */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142544]/5 border border-[#dfe4ec] text-[#142544] text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#b3202a]" />
                <span>Established 2019 • Rivonia Road, Sandton</span>
              </div>

              {/* Exact H1 requested */}
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-[#142544] leading-[0.95] tracking-tight">
                Sharp cuts. <br />
                <span className="text-[#b3202a]">Straight lines.</span>
              </h1>

              {/* Exact Subtext requested */}
              <p className="font-body text-lg sm:text-xl text-[#525c70] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A proper neighbourhood barbershop in Sandton. Classic cuts, skin fades and hot towel shaves from barbers who take their time.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/booking"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-base px-8 py-4 rounded-lg shadow-lg shadow-[#b3202a]/25 transition-all transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b3202a]"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book your chair</span>
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#142544] text-[#142544] hover:text-white font-semibold text-base px-8 py-4 rounded-lg border-2 border-[#142544] transition-all duration-200"
                >
                  <span>See prices</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#525c70] font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3202a]" />
                  Dedicated 45-minute slots
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3202a]" />
                  Single-blade razor precision
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#b3202a]" />
                  No rushing, ever
                </span>
              </div>
            </div>

            {/* Right Column: Unsplash Image framed with the animated BarberPole */}
            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end gap-5 xl:gap-8">
              {/* High-Quality Unsplash Image of Modern Barbershop Interior */}
              <div className="relative flex-1 min-w-[280px] h-[360px] sm:h-[440px] md:h-[480px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#dfe4ec]">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop"
                  alt="Stripe & Steel Barber Co. Modern Barbershop Interior in Sandton"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                  className="object-cover rounded-xl"
                />

                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142544]/85 via-transparent to-black/20 pointer-events-none" />

                {/* Floating atelier badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#142544]/95 backdrop-blur-md border border-white/20 p-4 rounded-lg flex items-center justify-between text-white shadow-xl">
                  <div className="flex items-center gap-3">
                    <Logo className="w-10 h-10 shrink-0" />
                    <div>
                      <span className="font-heading text-lg font-bold uppercase tracking-wide block leading-none text-white">
                        Stripe &amp; Steel Barber Co.
                      </span>
                      <span className="text-[11px] text-[#dfe4ec]/80">
                        Converted Print Shop • 14 Rivonia Road, Sandton
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-[#b3202a] text-white px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                    Open Today
                  </span>
                </div>
              </div>

              {/* Standalone Custom CSS Animated Barber Pole Component */}
              <div className="hidden lg:flex shrink-0 items-center justify-center">
                <div className="scale-[0.80] xl:scale-100 transition-transform origin-center">
                  <BarberPole />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXACT INFO STRIP: Business Hours & Address */}
      <section className="bg-[#142544] text-white py-6 border-b border-[#dfe4ec]/20 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20">
                <MapPin className="w-5 h-5 text-[#b3202a]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold block">
                  Location
                </span>
                <p className="text-sm font-bold text-white leading-tight">
                  14 Rivonia Road, Sandton, Johannesburg, 2196
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 border-y md:border-y-0 md:border-x border-white/10 py-4 md:py-0 md:px-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20">
                <Clock className="w-5 h-5 text-[#b3202a]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold block">
                  Business Hours
                </span>
                <p className="text-sm font-bold text-white leading-tight">
                  Mon to Fri 09:00 to 18:00
                </p>
                <p className="text-xs text-white/80">
                  Saturday 08:00 to 15:00 • Sunday Closed
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="tel:+27117849299"
                className="hidden lg:flex items-center gap-1.5 text-xs text-white/80 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#b3202a]" />
                <span className="font-mono">(011) 784-9299</span>
              </a>
              <Link
                href="/booking"
                className="bg-[#b3202a] hover:bg-[#991b24] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Book Chair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES PREVIEW */}
      <section className="py-16 md:py-24 bg-[#f7f5f0] border-b border-[#dfe4ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#b3202a] font-bold font-body block">
                The Menu
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#142544]">
                Popular Services
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#142544] hover:text-[#b3202a] transition-colors"
            >
              <span>View complete price list</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold uppercase text-[#142544]">
                    Classic Haircut
                  </h3>
                  <span className="font-heading text-2xl font-extrabold text-[#b3202a]">
                    R180
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#525c70] font-medium mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#525c70]" />
                  <span>45 min</span>
                </div>
                <p className="text-sm text-[#525c70] leading-relaxed mb-6 font-body">
                  Scissor or clipper cut, styled to suit you. Precision taper and tailored styling to fit your profile.
                </p>
              </div>
              <Link
                href="/booking?service=classic-haircut"
                className="w-full text-center bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors shadow-sm"
              >
                Book Now
              </Link>
            </div>

            <div className="bg-white border-2 border-[#142544] rounded-lg p-6 shadow-md relative flex flex-col justify-between">
              <span className="absolute -top-3 right-6 bg-[#142544] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                Barber Pick
              </span>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold uppercase text-[#142544]">
                    Skin Fade
                  </h3>
                  <span className="font-heading text-2xl font-extrabold text-[#b3202a]">
                    R200
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#525c70] font-medium mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#525c70]" />
                  <span>45 min</span>
                </div>
                <p className="text-sm text-[#525c70] leading-relaxed mb-6 font-body">
                  Clean gradient from skin to length. Blended down to zero with foil shaver precision and foil finish.
                </p>
              </div>
              <Link
                href="/booking?service=skin-fade"
                className="w-full text-center bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors shadow-sm"
              >
                Book Now
              </Link>
            </div>

            <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-bold uppercase text-[#142544]">
                    Cut &amp; Beard Package
                  </h3>
                  <span className="font-heading text-2xl font-extrabold text-[#b3202a]">
                    R290
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#525c70] font-medium mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#525c70]" />
                  <span>75 min</span>
                </div>
                <p className="text-sm text-[#525c70] leading-relaxed mb-6 font-body">
                  Haircut plus full beard shape-up. Hot towel application, cheek line razor finish, and botanical beard balm.
                </p>
              </div>
              <Link
                href="/booking?service=cut-and-beard-package"
                className="w-full text-center bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors shadow-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SUMMARY & THE PHILOSOPHY */}
      <section className="py-16 md:py-24 bg-white border-b border-[#dfe4ec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#b3202a] font-bold font-body block">
                The Heritage
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#142544] leading-tight">
                Nobody Gets Rushed. <br />
                That’s The Only Rule.
              </h2>
              <div className="space-y-4 text-base text-[#525c70] font-body leading-relaxed">
                <p>
                  We opened in 2019 inside a converted print shop on Rivonia Road. We didn’t want a conveyer-belt salon. We wanted a sanctuary where gentlemen could sit down, unwind, and receive an immaculate haircut or shave from craftsmen who care.
                </p>
                <p>
                  Every haircut begins with a consultation, continues with single-blade razor detailing, and concludes with a warm towel and tailored styling tonic.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#142544] font-bold hover:text-[#b3202a] transition-colors border-b-2 border-[#142544] pb-1 uppercase tracking-wider text-sm font-heading"
                >
                  <span>Meet Thabo, Liam &amp; Sipho</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-[#f7f5f0] border-2 border-[#dfe4ec] rounded-lg p-8 space-y-6">
              <h3 className="font-heading text-2xl font-bold uppercase text-[#142544] border-b border-[#dfe4ec] pb-3">
                What Sandton Says
              </h3>

              <div className="space-y-5">
                <div className="border-l-4 border-[#b3202a] pl-4 space-y-1">
                  <p className="text-sm italic text-[#0e1626] font-body">
                    “Thabo is a master with the clippers. I’ve lived in Johannesburg for 12 years and have never had a cleaner fade.”
                  </p>
                  <span className="text-xs text-[#525c70] font-semibold block">
                    — Marco D., Sandton City
                  </span>
                </div>

                <div className="border-l-4 border-[#142544] pl-4 space-y-1">
                  <p className="text-sm italic text-[#0e1626] font-body">
                    “Liam’s hot towel shave is an essential Friday ritual before the weekend. Unhurried, impeccably clean, and pure relaxation.”
                  </p>
                  <span className="text-xs text-[#525c70] font-semibold block">
                    — David K., Morningside
                  </span>
                </div>

                <div className="border-l-4 border-[#b3202a] pl-4 space-y-1">
                  <p className="text-sm italic text-[#0e1626] font-body">
                    “Took my 7-year-old son to Sipho. First time my boy actually enjoyed a cut without fidgeting. Brilliant with kids.”
                  </p>
                  <span className="text-xs text-[#525c70] font-semibold block">
                    — Sean T., Bryanston
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM BOOKING CTA BANNER */}
      <section className="bg-[#142544] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Logo className="w-16 h-16 mx-auto shadow-md" />
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Reserve Your Chair Today
          </h2>
          <p className="font-body text-base sm:text-lg text-[#dfe4ec]/90 max-w-xl mx-auto leading-relaxed">
            Select your barber, pick your slot, and receive an instant calendar appointment download. Walk-ins subject to availability.
          </p>
          <div className="pt-2">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg shadow-[#b3202a]/30 transition-all transform active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
