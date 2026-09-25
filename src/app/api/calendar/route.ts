import { NextResponse } from "next/server";
import { createEvent, DateArray, EventAttributes } from "ics";

interface CalendarPayload {
  serviceName: string;
  duration: number;
  barberName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  customerName: string;
  price?: string;
}

export async function POST(request: Request) {
  try {
    const body: CalendarPayload = await request.json();

    const {
      serviceName,
      duration,
      barberName,
      date,
      time,
      customerName,
      price = "",
    } = body;

    if (!serviceName || !duration || !barberName || !date || !time || !customerName) {
      return NextResponse.json(
        { error: "Missing required fields for calendar generation." },
        { status: 400 }
      );
    }

    // Parse date (YYYY-MM-DD) and time (HH:MM)
    const [yearStr, monthStr, dayStr] = date.split("-");
    const [hourStr, minuteStr] = time.split(":");

    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10); // 1-indexed for ics
    const day = parseInt(dayStr, 10);
    const startHour = parseInt(hourStr, 10);
    const startMinute = parseInt(minuteStr, 10);

    const startArray: DateArray = [year, month, day, startHour, startMinute];

    // Calculate exact end array by adding duration in minutes
    const startDate = new Date(year, month - 1, day, startHour, startMinute);
    const endDate = new Date(startDate.getTime() + duration * 60 * 1000);

    const endArray: DateArray = [
      endDate.getFullYear(),
      endDate.getMonth() + 1,
      endDate.getDate(),
      endDate.getHours(),
      endDate.getMinutes(),
    ];

    // Strict Data Mapping
    const title = `${serviceName} with ${barberName} at Stripe & Steel Barber Co.`;
    const location = "14 Rivonia Road, Sandton, Johannesburg, 2196";
    const description = [
      `Appointment: ${serviceName}`,
      price ? `Price: ${price}` : "",
      `Barber: ${barberName}`,
      `Client: ${customerName}`,
      `Duration: ${duration} minutes`,
      "To change: 011 555 0142",
    ]
      .filter(Boolean)
      .join("\n");

    const eventAttributes: EventAttributes = {
      title,
      location,
      description,
      start: startArray,
      end: endArray,
      status: "CONFIRMED",
      busyStatus: "BUSY",
      organizer: {
        name: "Stripe & Steel Barber Co.",
        email: "concierge@stripeandsteel.co.za",
      },
      alarms: [
        {
          action: "display",
          description: `Reminder: ${title}`,
          trigger: { minutes: 60, before: true },
        },
      ],
    };

    // Use ics package to generate valid calendar event string
    const { error, value } = createEvent(eventAttributes);

    if (error || !value) {
      console.error("ics generation error:", error);
      return NextResponse.json(
        { error: error?.message || "Failed to generate .ics file." },
        { status: 500 }
      );
    }

    // Return the raw .ics string
    return new Response(value, {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'attachment; filename="appointment.ics"',
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Calendar API exception:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
