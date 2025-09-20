"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/slide1.jpg')",
            }}
          >
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
            <h1 className="text-6xl font-bold drop-shadow-lg">
              Welcome to Eventra
            </h1>
            <p className="mt-4 text-2xl drop-shadow-lg">
              Your one-stop event management solution
            </p>
            <button className="mt-6 px-6 py-3 bg-[#FE3E01] hover:bg-[#FF5A1A] cursor-pointer rounded-lg transition text-white">
              Get Started
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white bg-opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/slide2.jpg')",
            }}
          >
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Plan Events with Ease
            </h1>
            <p className="mt-4 text-lg drop-shadow-lg">
              Seamless, modern & professional
            </p>
            <button className="mt-6 px-6 py-3 bg-[#FE3E01] hover:bg-[#FF5A1A] cursor-pointer rounded-lg transition">
              Explore Events
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white bg-opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/slide3.jpg')",
            }}
          >
            {" "}
            {/* <div className="absolute inset-0 bg-black/40"></div> */}
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Make Every Moment Special
            </h1>
            <p className="mt-4 text-lg drop-shadow-lg">
              We take care of the details
            </p>
            <button className="mt-6 px-6 py-3 bg-[#FE3E01] hover:bg-[#FF5A1A] cursor-pointer rounded-lg transition">
              Learn More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
