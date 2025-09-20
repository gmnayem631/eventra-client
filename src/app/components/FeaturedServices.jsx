import React from "react";
import { FaBirthdayCake, FaBriefcase, FaUsers } from "react-icons/fa";

const FeaturedServices = () => {
  const services = [
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: "Wedding Events",
      description:
        "Create unforgettable wedding experiences with our comprehensive planning services. From intimate ceremonies to grand celebrations, we handle every detail to make your special day perfect and stress-free.",
    },
    {
      icon: <FaBirthdayCake className="w-8 h-8 text-white" />,
      title: "Birthday Parties",
      description:
        "Celebrate life's milestones with memorable birthday parties tailored to your vision. Whether it's a children's themed party or an elegant adult celebration, we bring creativity and joy to every occasion.",
    },
    {
      icon: <FaBriefcase className="w-8 h-8 text-white" />,
      title: "Corporate Seminars",
      description:
        "Elevate your business events with professional seminar and conference management. We provide seamless coordination, modern technology integration, and exceptional service for impactful corporate gatherings.",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden mb-10">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Decorative Element */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-red-500"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-l from-orange-500 to-red-500"></div>
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-orange-500">Services</span> Featured
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We make your events smart & impactful by personalised event
                management services.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our experienced team specializes in creating exceptional
                experiences that exceed expectations. From concept to execution,
                we handle every aspect of event planning with meticulous
                attention to detail and creative flair that brings your vision
                to life.
              </p>
            </div>
          </div>

          {/* Right Side - Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-px bg-orange-500"></div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
