"use client";
import Image from "next/image";
import React from "react";
import { FaUsers, FaCalendarAlt, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-[#FE3E01]">Eventra</span>
          </h2>
          <p className="text-lg text-gray-600">
            We’re here to simplify how you discover and join events in
            Bangladesh. From music nights to conferences, Eventra connects
            people with experiences that truly matter.
          </p>
        </div>

        {/* Mission / Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/images/about.jpg"
              alt="About Eventra"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              At Eventra, we believe events bring people together and create
              memories. Our mission is to make event discovery simple,
              accessible, and exciting. Whether it’s a corporate seminar,
              cultural festival, or live concert, we help organizers and
              attendees connect effortlessly.
            </p>
            <p className="text-gray-600">
              Built with modern technology and a passion for community, Eventra
              is the go-to platform for exploring what’s happening around you.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <FaUsers className="text-[#FE3E01] text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Community First
            </h4>
            <p className="text-gray-600">
              We prioritize people and experiences, making sure every event adds
              value to our users.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <FaCalendarAlt className="text-[#FE3E01] text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Seamless Planning
            </h4>
            <p className="text-gray-600">
              Our platform ensures smooth event browsing, sign-ups, and
              participation without hassle.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
            <FaHandshake className="text-[#FE3E01] text-3xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Platform
            </h4>
            <p className="text-gray-600">
              With secure authentication and reliable features, Eventra is built
              on trust and transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
