import React from "react";
import eventsData from "../data/events.json";
import Image from "next/image";

export default function LandingEvents() {
  // Sort events by date descending and take the latest 6
  const latestEvents = [...eventsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Latest Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{event.description}</p>
              <p className="text-gray-500 text-xs mb-1">
                {event.category} | {event.location}
              </p>
              <p className="text-gray-500 text-xs">
                {event.date} at {event.time}
              </p>
            </div>

            <div className="p-3">
              <button className="btn btn-outline w-full border-[#FE3E01] text-[#FE3E01] hover:bg-[#FE3E01] rounded-lg hover:text-white">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
