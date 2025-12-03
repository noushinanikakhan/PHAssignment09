import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import swiper1 from "../assets/swiper-1.jpg";
import swiper2 from "../assets/hero-bg1.jpg";
import swiper3 from "../assets/swiper3.jpg";
import swiper4 from "../assets/swiper4.jpg";
import swiper5 from "../assets/swiper5.jpg";

const slides = [
  {
    img: swiper1,
    heading: "🌻 SkillSwap – A Local Skill Exchange Platform 🌻",
    description:
      "SkillSwap is a community-driven platform where people can both learn and teach. Instead of learning alone, you connect with real individuals who share their skills through friendly, structured sessions. From academic help to creative hobbies, SkillSwap makes learning feel accessible, local, and human."
  },
  {
    img: swiper2,
    heading: "Exchange your skills with SkillSwap!",
    description:
      "On SkillSwap, you’re not just a learner—you can be a provider too. Share what you’re good at, whether it’s coding, yoga, music, or languages, and help others grow while building your own confidence and experience. It’s a two-way system where knowledge flows in every direction."
  },
  {
    img: swiper3,
    heading: "Get Best Online Courses!!",
    description:
      "Discover carefully curated courses and sessions designed to be practical and easy to follow. Each skill listing highlights price, rating, and available slots, so you can quickly choose what fits your goals and schedule. No clutter—just clear information and meaningful learning opportunities."
  },
  {
    img: swiper4,
    heading: "Empowering minds, transforming lives!",
    description:
      "We believe that learning new skills can change how you see yourself and your future. By connecting learners with passionate providers, SkillSwap creates opportunities for personal growth, career development, and creative expression—one session at a time."
  },
  {
    img: swiper5,
    heading: "Learn and Share Skills",
    description:
      "Whether you’re starting from zero or already experienced, SkillSwap encourages you to keep learning and sharing. Join sessions that match your interests, ask questions freely, and come back to teach others what you’ve mastered. Together, we build a culture where everyone has something valuable to offer."
  }
];

const Header = () => {
  return (
    <section className="pt-4 w-11/12 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 p-6 lg:p-12 bg-white rounded-lg shadow-md">
              {/* LEFT TEXT SECTION */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <h1 className="text-2xl lg:text-5xl font-bold text-[#1e3a8a] leading-snug">
                  {slide.heading}
                </h1>

                <p className="text-gray-600 text-lg lg:w-4/5 leading-relaxed">
                  {slide.description}
                </p>
              </div>

              {/* RIGHT IMAGE SECTION */}
              <div className="flex-1 flex justify-center">
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-auto object-contain rounded-lg max-h-[350px] lg:max-h-[450px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Header;
