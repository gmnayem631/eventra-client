"use client";

import React, { useState } from "react";
import eventsData from "../../data/events.json";
import Image from "next/image";
import Link from "next/link";

export default function AllEvents() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");

  // Filter by search text
  const filteredEvents = eventsData.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sort === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sort === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        All Events
      </h2>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search events by title or tag"
          className="input input-bordered w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event) => (
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
              <Link href={`/events/${event.id}`}>
                <button className="btn btn-outline w-full border-[#FE3E01] text-[#FE3E01] hover:bg-[#FE3E01] rounded-lg hover:text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
