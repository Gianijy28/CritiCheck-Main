import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function CalendarComponent() {
  const calendarRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    updateMonth();
  }, []);

  const updateMonth = () => {
    if (!calendarRef.current) return;
    const calendarApi = calendarRef.current.getApi();
    const date = calendarApi.getDate();
    const options = { year: "numeric", month: "long" };
    setCurrentMonth(new Intl.DateTimeFormat("en-US", options).format(date));
  };

  const handlePrev = () => {
    if (!calendarRef.current) return;
    calendarRef.current.getApi().prev();
    updateMonth();
  };

  const handleNext = () => {
    if (!calendarRef.current) return;
    calendarRef.current.getApi().next();
    updateMonth();
  };

  const handleToday = () => {
    if (!calendarRef.current) return;
    calendarRef.current.getApi().today();
    updateMonth();
  };

  const events = [
    { title: "📝 Assignment 3 | Finite Automata", start: "2025-02-12", className: "event-done" },
    { title: "📌 Seatwork 2 | Switch Statement", start: "2025-02-07", className: "event-todo" },
    { title: "🔧 Technical 2", start: "2025-02-08", className: "event-todo" },
    { title: "📊 Assignment 3 | Create a Calculator", start: "2025-02-09", className: "event-todo" },
  ];

  return (
    <div className="flex flex-col bg-neutral-900 text-white h-screen w-full pl-20 relative">
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-3xl font-bold">
        {currentMonth}
      </div>
      <div className="absolute top-19 right-10 flex items-center -gap-2">
        <button onClick={handlePrev} className="text-teal-400 text-4xl hover:opacity-70">
          &lsaquo;
        </button>
        <button onClick={handleToday} className="text-white text-lg px-3 py-1 hover:opacity-70 mt-2">
          Today
        </button>
        <button onClick={handleNext} className="text-teal-400 text-4xl hover:opacity-70">
          &rsaquo;
        </button>
      </div>

      <div className="flex-grow p-4 pt-30"> 
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={false}
          events={events}
          editable={true}
          selectable={true}
          height="100%"
          aspectRatio={2}
          buttonText={{ today: "Today" }}
          eventTextColor="#ffffff"
          className="text-white"
          viewDidMount={() => setTimeout(updateMonth, 100)}
        />
      </div>
    </div>
  );
}
