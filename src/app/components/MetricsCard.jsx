import React from "react";
import { FaCoffee, FaUser, FaLayerGroup, FaTrophy } from "react-icons/fa";
import metricsData from "../data/metrics.json";

const MetricsCard = () => {
  // Icon mapping
  const iconMap = {
    FaCoffee: FaCoffee,
    FaUser: FaUser,
    FaLayerGroup: FaLayerGroup,
    FaTrophy: FaTrophy,
  };

  return (
    <section className="py-20 bg-base-100">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsData.map((metric) => {
            const IconComponent = iconMap[metric.icon];

            return (
              <div
                key={metric.id}
                className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#FE3E01] to-[#FF6A33]">
                  <IconComponent className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-grow text-left">
                  <div className="text-3xl font-bold text-[#FE3E01] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsCard;
