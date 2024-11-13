import { CalendarEvent } from "@/types/calendar";
import { addDays, setHours, setMinutes } from "date-fns";

export const generateSampleEvents = (): CalendarEvent[] => {
  const today = new Date();
  
  return [
    {
      id: "1",
      title: "Team Meeting",
      start: setHours(setMinutes(today, 0), 10),
      end: setHours(setMinutes(today, 0), 11),
      extendedProps: {
        description: "Weekly team sync meeting",
      },
      backgroundColor: "#4CAF50",
    },
    {
      id: "2",
      title: "Project Review",
      start: setHours(setMinutes(today, 0), 14),
      end: setHours(setMinutes(today, 30), 15),
      extendedProps: {
        description: "Review Q1 project progress",
      },
      backgroundColor: "#2196F3",
    },
    {
      id: "3",
      title: "Client Meeting",
      start: setHours(setMinutes(addDays(today, 1), 0), 11),
      end: setHours(setMinutes(addDays(today, 1), 0), 12),
      extendedProps: {
        description: "Discussion with client about new features",
      },
      backgroundColor: "#9C27B0",
    },
    // Add more events as needed
  ];
}; 