"use client";

import Calendar from "@/components/calendar";
import { SAMPLE_BOOKINGS, Booking } from "@/lib/sample-data";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CalendarEvent } from "@/types/calendar";

export default function CalendarPage() {
  const [bookings, setBookings] = useState<Booking[]>(SAMPLE_BOOKINGS.data);

  // Transform bookings to calendar events
  const transformBookingsToEvents = (bookings: Booking[]): CalendarEvent[] => {
    return bookings.map((booking) => ({
      id: booking.id.toString(),
      title: `${booking.number_of_adults + booking.number_of_children} хүн`,
      start: new Date(booking.schedule_time),
      end: new Date(new Date(booking.schedule_time).getTime() + 60 * 60 * 1000), // 1 hour duration
      extendedProps: {
        user_id: booking.user_id,
        business_id: booking.business_id,
        service_id: booking.service_id,
        status: booking.status,
        number_of_adults: booking.number_of_adults,
        number_of_children: booking.number_of_children,
        additional_info: booking.additional_info,
        phone: booking.phone,
        is_arrived: booking.is_arrived,
      },
    }));
  };

  // Transform calendar event back to booking
  const transformEventToBooking = (event: CalendarEvent): Booking => {
    return {
      id: parseInt(event.id),
      schedule_time: event.start.toISOString(),
      ...event.extendedProps,
    };
  };

  const handleEventAdd = async (event: CalendarEvent) => {
    try {
      const newBooking = transformEventToBooking(event);
      setBookings((prev) => [...prev, newBooking]);
      toast({
        title: "Амжилттай",
        description: "Захиалга нэмэгдлээ.",
      });
    } catch (error) {
      toast({
        title: "Алдаа",
        description: "Захиалга нэмэхэд алдаа гарлаа.",
        variant: "destructive",
      });
    }
  };

  const handleEventUpdate = async (
    id: string,
    updates: Partial<CalendarEvent>
  ) => {
    try {
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === parseInt(id)
            ? {
                ...booking,
                ...(updates.start && {
                  schedule_time: updates.start.toISOString(),
                }),
                ...(updates.extendedProps && updates.extendedProps),
              }
            : booking
        )
      );
      toast({
        title: "Амжилттай",
        description: "Захиалга шинэчлэгдлээ.",
      });
    } catch (error) {
      toast({
        title: "Алдаа",
        description: "Захиалга шинэчлэхэд алдаа гарлаа.",
        variant: "destructive",
      });
    }
  };

  const handleEventDelete = async (id: string) => {
    try {
      setBookings((prev) =>
        prev.filter((booking) => booking.id !== parseInt(id))
      );
      toast({
        title: "Амжилттай",
        description: "Захиалга устгагдлаа.",
      });
    } catch (error) {
      toast({
        title: "Алдаа",
        description: "Захиалга устгахад алдаа гарлаа.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="h-screen p-4 bg-background">
      <Calendar
        events={transformBookingsToEvents(bookings)}
        onEventAdd={handleEventAdd}
        onEventUpdate={handleEventUpdate}
        onEventDelete={handleEventDelete}
      />
    </div>
  );
}
