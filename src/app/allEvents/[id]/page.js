"use client";

import events from "@/data/events.json";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function EventDetailsPage({ params }) {
  const { id } = params;
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Event not found.</p>
      </div>
    );
  }

  const handleJoin = () => {
    toast.success(`You joined "${event.title}"! 🎉`);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/allEvents" className="text-[#FE3E01] hover:underline">
        ← Back to All Events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Event Image */}
        <div className="relative w-full h-80 lg:h-[400px] rounded-2xl shadow-md overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Event Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-gray-700 mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Time:</strong> {event.time}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Category:</strong> {event.category}
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Location:</strong> {event.location}
            </p>
          </div>

          <button
            onClick={handleJoin}
            className="btn bg-[#FE3E01] text-white hover:bg-[#e53b00] rounded-lg w-full"
          >
            Join Event
          </button>
        </div>
      </div>
    </section>
  );
}
