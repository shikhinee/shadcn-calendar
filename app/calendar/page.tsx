"use client";

import Calendar from "@/components/calendar";
import { CalendarEvent } from "@/types/calendar";
import { generateSampleEvents } from "@/lib/sample-data";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>(generateSampleEvents());

  const handleEventAdd = async (event: CalendarEvent) => {
    try {
      setEvents((prev) => [...prev, { ...event, id: Date.now().toString() }]);
      toast({
        title: "Event Added",
        description: "The event has been successfully added.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add event.",
        variant: "destructive",
      });
    }
  };

  const handleEventUpdate = async (
    id: string,
    updates: Partial<CalendarEvent>
  ) => {
    try {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === id ? { ...event, ...updates } : event
        )
      );
      toast({
        title: "Event Updated",
        description: "The event has been successfully updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update event.",
        variant: "destructive",
      });
    }
  };

  const handleEventDelete = async (id: string) => {
    try {
      setEvents((prev) => prev.filter((event) => event.id !== id));
      toast({
        title: "Event Deleted",
        description: "The event has been successfully deleted.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete event.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="h-screen p-4 bg-background">
      <Calendar
        events={events}
        onEventAdd={handleEventAdd}
        onEventUpdate={handleEventUpdate}
        onEventDelete={handleEventDelete}
      />
    </div>
  );
}
