import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Clock,
  AlertCircle,
  CreditCard,
  Gift,
  Smile,
  FileText,
  UserCheck,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions & POPIA Privacy | MAXX CUTS Sandton",
  description:
    "Official terms of service, cancellation policy (4 hours), late arrival rules (15 min), and POPIA-compliant privacy policy for MAXX CUTS Barbershop. Last updated 1 September 2026.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#f7f5f0] text-[#0e1626] min-h-screen py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142544]/5 border border-[#dfe4ec] text-[#142544] text-xs font-bold uppercase tracking-wider font-body">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b3202a]" />
            <span>Legal Notice & Shop Policies</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl font-extrabold uppercase text-[#142544] tracking-tight">
            Terms & Conditions
          </h1>

          <div className="flex items-center justify-center gap-2 text-sm text-[#525c70] font-body font-semibold">
            <span>Last Updated:</span>
            <span className="text-[#b3202a] font-bold">1 September 2026</span>
          </div>

          <p className="font-body text-base text-[#525c70] max-w-2xl mx-auto leading-relaxed pt-2">
            These terms govern all chair bookings, services, and transactions at MAXX CUTS Barbershop, situated on Rivonia Road, Sandton. Please review these policies carefully prior to booking.
          </p>
        </div>

        {/* Legal Sections Container */}
        <div className="space-y-6">
          {/* Section 1: Bookings */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                1
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Bookings
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              Appointments can be scheduled online via our web reservation system or by contacting our Sandton shop. Online bookings are allocated dedicated 45 to 75-minute slots to ensure our barbers have time to give every cut the attention it deserves with a rule that nobody gets rushed. While walk-in patrons are always welcomed subject to chair availability, clients with confirmed reservations receive immediate priority.
            </p>
          </div>

          {/* Section 2: Cancellations */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#b3202a] text-white flex items-center justify-center font-heading text-lg font-bold">
                2
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Cancellations (4 Hours Notice)
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              We understand that schedules shift. Because our barbers commit dedicated time to each appointment, we require a minimum of <strong>4 hours notice</strong> for any cancellation or rescheduling request. This allows our concierge sufficient time to reallocate the reserved chair to waitlisted clients. Repeated cancellations without 4 hours notice may require pre-payment for subsequent bookings.
            </p>
          </div>

          {/* Section 3: Late Arrivals */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                3
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Late Arrivals (15 Minutes Grace Period)
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              To honor our standard that &quot;nobody gets rushed&quot;, appointments must run strictly on schedule. We extend a <strong>15-minute grace period</strong>. If you arrive more than 15 minutes past your booked start time, your barber may need to modify the service (for example, omitting a beard sculpt or hot towel) or reschedule your appointment to avoid encroaching upon the next client&apos;s allocated time.
            </p>
          </div>

          {/* Section 4: Prices and Payment */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                4
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Prices and Payment
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              All prices are quoted in South African Rand (ZAR) inclusive of value-added tax where applicable. The published service prices (e.g., R180 for Classic haircut, R200 for Skin fade) represent the total fee for standard grooming with no hidden surcharge. We accept Cash, major Visa and Mastercard debit and credit cards, and Instant EFT. Full payment is due upon completion of the service.
            </p>
          </div>

          {/* Section 5: Promotions */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                5
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Promotions
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              Promotional codes, including our inaugural welcome voucher (<strong>FIRST10</strong> for 10% off your first cut), apply exclusively to individual haircut services for new clients. Promotions may not be redeemed for cash, cannot be transferred, and cannot be stacked with bundled combination packages (such as the Cut and beard package) or retail product purchases.
            </p>
          </div>

          {/* Section 6: Children */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                6
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Children
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              We welcome young gentlemen under the age of 12 for our dedicated Kids Cut service (R130). For the safety and comfort of the child, a parent or legal guardian must remain present inside the shop throughout the cut. Our barbers are patient and gentle, but we reserve the right to pause or cease a service if a child experiences acute distress or movement that makes razor work unsafe.
            </p>
          </div>

          {/* Section 7: Satisfaction */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                7
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Satisfaction Guarantee
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              Your complete satisfaction with your cut and trim is our paramount standard. If upon returning home you identify any minor detail requiring adjustment, please notify our team within <strong>48 hours</strong> of your appointment. We will gladly welcome you back to the chair for a complimentary touch-up with your barber.
            </p>
          </div>

          {/* Section 8: Liability */}
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center font-heading text-lg font-bold">
                8
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Liability
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#525c70] leading-relaxed">
              MAXX CUTS maintains rigorous safety and sanitisation protocols, including sterile single-use razor blades and dermatologically tested hair preparations. Clients must disclose any known skin allergies, sensitivities, or medical conditions (such as keloid tendencies or blood-thinning treatments) prior to the commencement of straight-razor services. We cannot accept liability for client personal belongings left unattended on the premises.
            </p>
          </div>

          {/* Section 9: POPIA Privacy Policy */}
          <div className="bg-white border-2 border-[#142544] rounded-lg p-6 sm:p-8 shadow-md space-y-4">
            <div className="flex items-center gap-3 border-b border-[#dfe4ec] pb-3">
              <div className="w-8 h-8 rounded bg-[#142544] text-white flex items-center justify-center">
                <Lock className="w-4 h-4 text-[#b3202a]" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-[#142544]">
                Privacy Policy & POPIA Compliance
              </h2>
            </div>

            <div className="font-body text-sm sm:text-base text-[#525c70] space-y-3 leading-relaxed">
              <p>
                MAXX CUTS is strictly committed to protecting your personal information in full compliance with the <strong>Protection of Personal Information Act (Act 4 of 2013, &quot;POPIA&quot;)</strong> of the Republic of South Africa.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Personal Data Collected:</strong> When scheduling an appointment, we collect your name, mobile contact number, email address, and service preferences solely for managing your reservation, sending confirmation SMS/emails, and generating dynamic calendar entries (.ics).
                </li>
                <li>
                  <strong>Purpose of Processing:</strong> Personal data is processed strictly for legitimate service delivery, customer support, and appointment reminders. We do not sell, rent, or lease your personal information to third parties.
                </li>
                <li>
                  <strong>Information Security:</strong> Appropriate technical and operational safeguards are maintained to protect your personal information against unauthorised access, alteration, or loss.
                </li>
                <li>
                  <strong>Your Rights Under POPIA:</strong> You retain the statutory right to request access to your personal information, request correction of erroneous details, or instruct us to delete your client record from our booking database at any time by contacting our information officer at <a href="mailto:privacy@maxxcuts.co.za" className="text-[#b3202a] font-semibold underline">privacy@maxxcuts.co.za</a>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Booking & Contact Callout */}
        <div className="bg-[#142544] text-white rounded-lg p-8 sm:p-10 text-center space-y-5">
          <h3 className="font-heading text-3xl font-bold uppercase text-white">
            Have Questions Regarding Our Terms?
          </h3>
          <p className="font-body text-sm text-[#dfe4ec]/90 max-w-lg mx-auto">
            Our Sandton concierge is available during operating hours (Mon–Fri 09:00–18:00, Sat 08:00–15:00) to assist with any questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-md transition-colors"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book An Appointment</span>
            </Link>
            <a
              href="tel:+27117849299"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors border border-white/20"
            >
              <span>Call (011) 784-9299</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
