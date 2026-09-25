"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Calendar,
  Clock,
  Scissors,
  CheckCircle,
  RotateCcw,
  Sparkles,
  MapPin,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

// Exact Services & Pricing Data
const SERVICES = [
  {
    id: "classic-haircut",
    name: "Classic haircut",
    price: "R180",
    duration: 45,
    label: "Classic haircut - R180 (45 min)",
  },
  {
    id: "skin-fade",
    name: "Skin fade",
    price: "R200",
    duration: 45,
    label: "Skin fade - R200 (45 min)",
  },
  {
    id: "beard-trim-and-shape",
    name: "Beard trim and shape",
    price: "R120",
    duration: 30,
    label: "Beard trim and shape - R120 (30 min)",
  },
  {
    id: "cut-and-beard-package",
    name: "Cut and beard package",
    price: "R290",
    duration: 75,
    label: "Cut and beard package - R290 (75 min)",
  },
  {
    id: "hot-towel-shave",
    name: "Hot towel shave",
    price: "R150",
    duration: 30,
    label: "Hot towel shave - R150 (30 min)",
  },
  {
    id: "kids-cut",
    name: "Kids cut (under 12)",
    price: "R130",
    duration: 30,
    label: "Kids cut (under 12) - R130 (30 min)",
  },
] as const;

// Exact Barbers
const BARBERS = [
  { id: "thabo-mokoena", name: "Thabo Mokoena", specialty: "Fade specialist" },
  { id: "liam-daniels", name: "Liam Daniels", specialty: "Classic cuts and shaves" },
  { id: "sipho-khumalo", name: "Sipho Khumalo", specialty: "Beards and kids cuts" },
] as const;

// 30-minute intervals between 09:00 and 17:00
const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
] as const;

// Zod Validation Schema
const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (minimum 2 characters)"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s-]{9,}$/, "Please enter a valid phone number (minimum 9 digits)"),
  serviceId: z
    .string()
    .min(1, "Please select a service"),
  barberName: z
    .string()
    .min(1, "Please select a barber"),
  date: z
    .string()
    .min(1, "Please select an appointment date")
    .refine(
      (val) => {
        if (!val) return false;
        const [year, month, day] = val.split("-").map(Number);
        const dayOfWeek = new Date(year, month - 1, day).getDay();
        return dayOfWeek !== 0; // 0 = Sunday
      },
      {
        message: "The shop is closed on Sundays. Please choose Monday to Saturday.",
      }
    ),
  time: z
    .string()
    .min(1, "Please select a time slot"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface ConfirmedBooking {
  reference: string;
  fullName: string;
  email: string;
  phone: string;
  serviceName: string;
  price: string;
  duration: number;
  barberName: string;
  date: string;
  time: string;
}

function BookingFormInner() {
  const searchParams = useSearchParams();
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [isProcessingCalendar, setIsProcessingCalendar] = useState(false);

  const todayStr = new Date().toISOString().split("T")[0];

  const preselectedService = searchParams.get("service") || "";
  const preselectedBarber = searchParams.get("barber") || "";
  const promoCode = searchParams.get("promo") || "";

  const initialService = SERVICES.find(
    (s) => s.id === preselectedService || s.name.toLowerCase() === preselectedService.toLowerCase()
  );

  const initialBarber = BARBERS.find(
    (b) => b.id === preselectedBarber || b.name.toLowerCase().includes(preselectedBarber.toLowerCase())
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      serviceId: initialService ? initialService.id : "",
      barberName: initialBarber ? initialBarber.name : "",
      date: "",
      time: "",
    },
  });

  useEffect(() => {
    if (initialService) {
      setValue("serviceId", initialService.id);
    }
    if (initialBarber) {
      setValue("barberName", initialBarber.name);
    }
  }, [initialService, initialBarber, setValue]);

  const onSubmit = (data: BookingFormData) => {
    const selectedService = SERVICES.find((s) => s.id === data.serviceId)!;

    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    const reference = `SS-${randomDigits}`;

    const confirmation: ConfirmedBooking = {
      reference,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      serviceName: selectedService.name,
      price: selectedService.price,
      duration: selectedService.duration,
      barberName: data.barberName,
      date: data.date,
      time: data.time,
    };

    setConfirmedBooking(confirmation);
  };

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    if (!confirmedBooking) return "#";

    const [year, month, day] = confirmedBooking.date.split("-").map(Number);
    const [startHour, startMinute] = confirmedBooking.time.split(":").map(Number);

    const startDate = new Date(year, month - 1, day, startHour, startMinute);
    const endDate = new Date(startDate.getTime() + confirmedBooking.duration * 60 * 1000);

    const formatGCalDate = (d: Date) =>
      d.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const dates = `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`;
    const title = `${confirmedBooking.serviceName} with ${confirmedBooking.barberName} at Stripe & Steel Barber Co.`;
    const location = "14 Rivonia Road, Sandton, Johannesburg, 2196";
    const details = `Appointment: ${confirmedBooking.serviceName}\nPrice: ${confirmedBooking.price}\nBarber: ${confirmedBooking.barberName}\nReference: ${confirmedBooking.reference}\nTo change: 011 555 0142`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
      location
    )}`;
  };

  // Add to Apple or Outlook Calendar (Blob + window.location.href navigation)
  const handleAddToAppleOrOutlook = async () => {
    if (!confirmedBooking) return;
    setIsProcessingCalendar(true);

    try {
      const response = await fetch("/api/calendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceName: confirmedBooking.serviceName,
          duration: confirmedBooking.duration,
          barberName: confirmedBooking.barberName,
          date: confirmedBooking.date,
          time: confirmedBooking.time,
          customerName: confirmedBooking.fullName,
          price: confirmedBooking.price,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate calendar event");
      }

      const icsBlob = await response.blob();
      const blobUrl = window.URL.createObjectURL(icsBlob);

      // Directly set window.location.href to open native device "Add Event" screen
      window.location.href = blobUrl;

      // Revoke the object URL after a few seconds
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 5000);
    } catch (err) {
      console.error("Error opening calendar event:", err);
      alert("Unable to open calendar event. Please try again.");
    } finally {
      setIsProcessingCalendar(false);
    }
  };

  return (
    <div className="bg-[#f7f5f0] text-[#0e1626] min-h-screen py-12 md:py-20 font-body">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================== */}
        {/* VIEW 1: CONFIRMATION STATE                                     */}
        {/* ============================================================== */}
        {confirmedBooking ? (
          <div className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in zoom-in-95 duration-300">
            {/* Confirmation Header */}
            <div className="text-center space-y-3 pb-6 border-b border-[#dfe4ec]">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#b3202a] font-bold block">
                Booking Confirmed
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase text-[#142544] tracking-tight">
                Your Chair Is Reserved
              </h1>
              <p className="text-sm text-[#525c70] max-w-md mx-auto">
                We have logged your appointment at our Sandton atelier. A confirmation has been generated with your booking reference.
              </p>
            </div>

            {/* Booking Reference Pill */}
            <div className="bg-[#f7f5f0] border-2 border-dashed border-[#dfe4ec] rounded-lg p-4 text-center">
              <span className="text-xs uppercase font-bold text-[#525c70] tracking-wider block">
                Booking Reference
              </span>
              <span className="font-heading text-3xl font-extrabold text-[#142544] tracking-wider block mt-1">
                {confirmedBooking.reference}
              </span>
            </div>

            {/* Appointment Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-white p-2">
              <div className="p-4 rounded-lg bg-[#f7f5f0] border border-[#dfe4ec] space-y-1">
                <span className="text-xs text-[#525c70] uppercase font-bold block">
                  Service & Fee
                </span>
                <p className="font-bold text-[#142544] text-base">
                  {confirmedBooking.serviceName}
                </p>
                <p className="text-sm font-extrabold text-[#b3202a]">
                  {confirmedBooking.price}{" "}
                  <span className="text-xs font-normal text-[#525c70]">
                    ({confirmedBooking.duration} min)
                  </span>
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f5f0] border border-[#dfe4ec] space-y-1">
                <span className="text-xs text-[#525c70] uppercase font-bold block">
                  Selected Barber
                </span>
                <p className="font-bold text-[#142544] text-base">
                  {confirmedBooking.barberName}
                </p>
                <p className="text-xs text-[#525c70]">Stripe & Steel Barber Co.</p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f5f0] border border-[#dfe4ec] space-y-1">
                <span className="text-xs text-[#525c70] uppercase font-bold block">
                  Date & Time
                </span>
                <p className="font-bold text-[#142544] text-base">
                  {confirmedBooking.date}
                </p>
                <p className="text-xs font-semibold text-[#142544]">
                  Starting at {confirmedBooking.time}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f5f0] border border-[#dfe4ec] space-y-1">
                <span className="text-xs text-[#525c70] uppercase font-bold block">
                  Client Details
                </span>
                <p className="font-bold text-[#142544] text-base">
                  {confirmedBooking.fullName}
                </p>
                <p className="text-xs text-[#525c70]">{confirmedBooking.phone}</p>
              </div>
            </div>

            {/* Location Notice */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#dfe4ec] text-xs text-[#525c70]">
              <MapPin className="w-5 h-5 text-[#b3202a] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#142544] block font-semibold">
                  Location & Arrival Note
                </strong>
                14 Rivonia Road, Sandton, Johannesburg, 2196. Please arrive 5 minutes prior to your allocated slot. Cancellations require 4 hours notice (011 555 0142).
              </div>
            </div>

            {/* CALENDAR ACTIONS */}
            <div className="pt-2 space-y-3">
              {/* Primary Button: Add to Apple or Outlook Calendar */}
              <button
                type="button"
                onClick={handleAddToAppleOrOutlook}
                disabled={isProcessingCalendar}
                className="w-full flex items-center justify-center gap-2.5 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold text-base py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-60"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>
                  {isProcessingCalendar
                    ? "Opening Calendar..."
                    : "Add to Apple or Outlook Calendar"}
                </span>
              </button>

              {/* Secondary Button: Add to Google Calendar */}
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-[#142544] text-[#142544] hover:text-white font-bold text-base py-3.5 px-6 rounded-lg border-2 border-[#142544] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Add to Google Calendar</span>
              </a>
            </div>

            {/* Book Another Appointment link */}
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => {
                  setConfirmedBooking(null);
                  reset();
                }}
                className="text-xs text-[#525c70] hover:text-[#142544] inline-flex items-center gap-1.5 font-semibold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Schedule another appointment</span>
              </button>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* VIEW 2: MULTI-STEP BOOKING FORM                                */
          /* ============================================================== */
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142544]/5 border border-[#dfe4ec] text-[#142544] text-xs font-bold uppercase tracking-wider">
                <Scissors className="w-3.5 h-3.5 text-[#b3202a]" />
                <span>Chair Reservation</span>
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl font-extrabold uppercase text-[#142544] tracking-tight">
                Book Your Chair
              </h1>
              <p className="text-base text-[#525c70] max-w-lg mx-auto leading-relaxed">
                Select your service, preferred barber, and schedule your appointment. Online bookings receive immediate confirmation.
              </p>

              {promoCode && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#b3202a]/10 border border-[#b3202a]/30 text-[#b3202a] text-xs font-bold uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#b3202a]" />
                  <span>Promo Code Applied: {promoCode} (10% Discount)</span>
                </div>
              )}
            </div>

            {/* Form Container */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white border-2 border-[#dfe4ec] rounded-lg p-6 sm:p-10 shadow-sm space-y-8"
              noValidate
            >
              {/* SECTION 1: SERVICE & BARBER */}
              <div className="space-y-5">
                <div className="border-b border-[#dfe4ec] pb-2">
                  <h2 className="font-heading text-2xl font-bold uppercase text-[#142544] flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[#142544] text-white text-xs flex items-center justify-center font-bold">
                      1
                    </span>
                    Select Service & Barber
                  </h2>
                </div>

                {/* Service Select */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="serviceSelect"
                    className="block text-sm font-bold text-[#142544]"
                  >
                    Select Service <span className="text-[#b3202a]">*</span>
                  </label>
                  <select
                    id="serviceSelect"
                    {...register("serviceId")}
                    className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                      errors.serviceId ? "border-[#b3202a]" : "border-[#dfe4ec]"
                    }`}
                  >
                    <option value="">-- Choose a service --</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  {errors.serviceId && (
                    <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.serviceId.message}
                    </p>
                  )}
                </div>

                {/* Barber Select */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="barberSelect"
                    className="block text-sm font-bold text-[#142544]"
                  >
                    Preferred Barber <span className="text-[#b3202a]">*</span>
                  </label>
                  <select
                    id="barberSelect"
                    {...register("barberName")}
                    className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                      errors.barberName ? "border-[#b3202a]" : "border-[#dfe4ec]"
                    }`}
                  >
                    <option value="">-- Choose your barber --</option>
                    {BARBERS.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} ({b.specialty})
                      </option>
                    ))}
                  </select>
                  {errors.barberName && (
                    <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.barberName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SECTION 2: DATE & TIME */}
              <div className="space-y-5">
                <div className="border-b border-[#dfe4ec] pb-2">
                  <h2 className="font-heading text-2xl font-bold uppercase text-[#142544] flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[#142544] text-white text-xs flex items-center justify-center font-bold">
                      2
                    </span>
                    Date & Time Slot
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Input */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="dateInput"
                      className="block text-sm font-bold text-[#142544]"
                    >
                      Appointment Date <span className="text-[#b3202a]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="dateInput"
                        min={todayStr}
                        {...register("date")}
                        className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                          errors.date ? "border-[#b3202a]" : "border-[#dfe4ec]"
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.date.message}
                      </p>
                    )}
                    <span className="text-[11px] text-[#525c70] block">
                      *Shop is open Mon–Sat. Closed Sundays.
                    </span>
                  </div>

                  {/* Time Slot Select */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="timeSelect"
                      className="block text-sm font-bold text-[#142544]"
                    >
                      Time Slot <span className="text-[#b3202a]">*</span>
                    </label>
                    <select
                      id="timeSelect"
                      {...register("time")}
                      className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                        errors.time ? "border-[#b3202a]" : "border-[#dfe4ec]"
                      }`}
                    >
                      <option value="">-- Choose time slot --</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.time.message}
                      </p>
                    )}
                    <span className="text-[11px] text-[#525c70] block">
                      *30-minute booking intervals
                    </span>
                  </div>
                </div>
              </div>

              {/* SECTION 3: CUSTOMER DETAILS */}
              <div className="space-y-5">
                <div className="border-b border-[#dfe4ec] pb-2">
                  <h2 className="font-heading text-2xl font-bold uppercase text-[#142544] flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-[#142544] text-white text-xs flex items-center justify-center font-bold">
                      3
                    </span>
                    Your Information
                  </h2>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullNameInput"
                    className="block text-sm font-bold text-[#142544]"
                  >
                    Full Name <span className="text-[#b3202a]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullNameInput"
                      placeholder="e.g. Sipho Ndlovu"
                      {...register("fullName")}
                      className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                        errors.fullName ? "border-[#b3202a]" : "border-[#dfe4ec]"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="emailInput"
                      className="block text-sm font-bold text-[#142544]"
                    >
                      Email Address <span className="text-[#b3202a]">*</span>
                    </label>
                    <input
                      type="email"
                      id="emailInput"
                      placeholder="sipho@example.co.za"
                      {...register("email")}
                      className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                        errors.email ? "border-[#b3202a]" : "border-[#dfe4ec]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone (Minimum 9 digits) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phoneInput"
                      className="block text-sm font-bold text-[#142544]"
                    >
                      Mobile Phone Number <span className="text-[#b3202a]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneInput"
                      placeholder="e.g. 082 123 4567"
                      {...register("phone")}
                      className={`w-full bg-[#f7f5f0] border rounded-lg px-4 py-3 text-sm text-[#0e1626] font-medium focus:outline-none focus:ring-2 focus:ring-[#b3202a] transition-all ${
                        errors.phone ? "border-[#b3202a]" : "border-[#dfe4ec]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs font-semibold text-[#b3202a] flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#dfe4ec]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#b3202a] hover:bg-[#991b24] text-white font-bold text-base py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>
                    {isSubmitting ? "Confirming Chair..." : "Confirm Chair Reservation"}
                  </span>
                </button>
                <p className="text-[11px] text-[#525c70] text-center mt-2.5">
                  By confirming, you agree to our 4-hour cancellation policy and POPIA-compliant data handling.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center p-8">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-4 border-[#142544] border-t-[#b3202a] rounded-full animate-spin mx-auto" />
            <p className="font-heading text-xl uppercase font-bold text-[#142544]">
              Loading Chair Reservation...
            </p>
          </div>
        </div>
      }
    >
      <BookingFormInner />
    </Suspense>
  );
}
