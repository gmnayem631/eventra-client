import React from "react";
import { CiFaceSmile, CiGift, CiClock2, CiStar } from "react-icons/ci";
import { IoGlassesOutline, IoDiamond } from "react-icons/io5";

const OurServices = () => {
  const services = [
    {
      icon: <CiFaceSmile className="w-8 h-8 text-orange-500" />,
      title: "Anniversaries",
      description:
        "Celebrate life’s special milestones with seamless anniversary event planning, from venue setup to entertainment and catering.",
    },
    {
      icon: <CiGift className="w-8 h-8 text-orange-500" />,
      title: "Holiday Parties",
      description:
        "Make your holidays unforgettable with expertly managed parties, festive décor, and engaging activities for all ages.",
    },
    {
      icon: <CiClock2 className="w-8 h-8 text-orange-500" />,
      title: "Corporate Functions",
      description:
        "From conferences to team-building retreats, we ensure professional, well-organized corporate events tailored to your needs.",
    },
    {
      icon: <CiStar className="w-8 h-8 text-orange-500" />,
      title: "Fashion Concerts",
      description:
        "Bring glamour and excitement to life with dazzling fashion shows and concerts, complete with stage design and lighting.",
    },
    {
      icon: <IoGlassesOutline className="w-8 h-8 text-orange-500" />,
      title: "Conference Planning",
      description:
        "Plan impactful conferences with smooth registration, speaker coordination, and audience engagement support.",
    },
    {
      icon: <IoDiamond className="w-8 h-8 text-orange-500" />,
      title: "Stage Decorations",
      description:
        "Transform your event with creative stage setups and stunning decorations that leave a lasting impression.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-xl font-medium text-gray-700">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
