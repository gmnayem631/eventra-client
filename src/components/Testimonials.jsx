import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className="py-20">
      {/* CTA Area */}
      <div
        className="max-w-7xl mx-auto text-center px-4 py-16 rounded-lg"
        style={{
          background: "linear-gradient(to right, #FF6A33, #FE3E01)",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Join Eventra Today
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">
          Plan, manage, and discover amazing events with ease. Trusted by
          hundreds of event organizers!
        </p>
        <button className="btn bg-white text-[#FE3E01] font-bold px-8 py-3 rounded-full hover:bg-[#FFE5E0] transition">
          Get Started
        </button>
      </div>

      {/* Testimonials */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {/* Testimonial 1 */}
        <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center mb-4">
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
          </div>
          <p className="mb-4">
            "Eventra made managing my events seamless. Highly recommend to
            anyone organizing events!"
          </p>
          <h4 className="font-semibold">— Sarah K.</h4>
        </div>

        {/* Testimonial 2 */}
        <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center mb-4">
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
          </div>
          <p className="mb-4">
            "The calendar view is a game-changer. I can see all my events at a
            glance!"
          </p>
          <h4 className="font-semibold">— Mark T.</h4>
        </div>

        {/* Testimonial 3 */}
        <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
          <div className="flex items-center mb-4">
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
            <FaStar className="text-[#FE3E01] mr-1" />
          </div>
          <p className="mb-4">
            "Adding and managing events has never been easier. Eventra rocks!"
          </p>
          <h4 className="font-semibold">— Priya S.</h4>
        </div>
      </div>
    </section>
  );
}
