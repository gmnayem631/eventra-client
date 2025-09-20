import {
  FaCalendarAlt,
  FaPen,
  FaRegCalendarCheck,
  FaTools,
} from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-12">Why Choose Eventra?</h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 flex justify-center">
              <FaCalendarAlt className="text-[#FE3E01] text-5xl mb-4" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Discover Events</h3>
            <p>Explore upcoming events near you quickly and easily.</p>
          </div>

          {/* Feature 2 */}
          <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 flex justify-center">
              <FaPen className="text-[#FE3E01] text-5xl mb-4" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Create Events</h3>
            <p>Add your own events in a few simple steps.</p>
          </div>

          {/* Feature 3 */}
          <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 flex justify-center">
              <FaTools className="text-[#FE3E01] text-5xl mb-4" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Manage Seamlessly</h3>
            <p>Keep track of attendees, schedules, and details effortlessly.</p>
          </div>

          {/* Feature 4 */}
          <div className="card bg-base-200 p-6 shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-4 flex justify-center">
              <FaRegCalendarCheck className="text-[#FE3E01] text-5xl mb-4" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Calendar View</h3>
            <p>
              Visualize events by date for easier planning and organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
