import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoModal from "@/components/PromoModal";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stripe & Steel Barber Co. | Sandton Barbershop",
  description:
    "A proper neighbourhood barbershop in Sandton. Classic cuts, skin fades and hot towel shaves from barbers who take their time.",
  keywords: [
    "Stripe & Steel",
    "Sandton Barbershop",
    "Classic Haircut",
    "Skin Fade",
    "Beard Trim",
    "Hot Towel Shave",
    "Rivonia Road",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f7f5f0] text-[#0e1626] min-h-screen flex flex-col font-body antialiased selection:bg-[#b3202a] selection:text-white">
        {/* Sticky Global Header featuring Logo component and 'Stripe & Steel' */}
        <Header />

        {/* Global Promotional Session Popup */}
        <PromoModal />

        {/* Main Body (Paper #f7f5f0) */}
        <main className="flex-1 flex flex-col bg-[#f7f5f0]">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
