import FeaturesSection from "./components/FeaturesSection";
import HeroSlider from "./components/HeroSlider";
import LandingEvents from "./components/LandingEvents";
import MetricsCard from "./components/MetricsCard";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <FeaturesSection />
      <MetricsCard />
      <LandingEvents />
      <Testimonials />
    </div>
  );
}
