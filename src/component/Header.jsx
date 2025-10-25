import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";   
import "swiper/css";                               
import "swiper/css/navigation";                     
import "swiper/css/pagination";     
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules"; 

import swiper1 from "./../assets/swiper-1.jpg"
import swiper2 from "./../assets/swiper2.jpg"
import swiper3 from "./../assets/swiper3.jpg"
import swiper4 from "./../assets/swiper4.jpg"
import swiper5 from "./../assets/swiper5.jpg"

const Header = () => {
    return (
<section className="pt-2">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-11/12 mx-auto h-full "
      >
        <SwiperSlide>
  <div className="relative w-full overflow-hidden h-[330px] md:h-[400px] lg:h-[500px]">
    <img src={swiper1} alt="slide 1" className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-5xl font-bold">
    SkillSwap – A Local Skill Exchange Platform
    🌻
    </div>
  </div>
</SwiperSlide>

               <SwiperSlide>
  <div className="relative w-full h-[330px] md:h-[400px] lg:h-[500px]">
    <img src={swiper2} alt="slide 1" className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-5xl font-bold">
      Exchange your skills with SkillSwap!  🌻
    </div>
  </div>
</SwiperSlide>

        <SwiperSlide>
  <div className="relative w-full  h-[330px] md:h-[400px] lg:h-[500px] ">
    <img src={swiper3} alt="slide 1" className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-5xl font-bold">
     Get Best Online Courses!!
    </div>
  </div>
  </SwiperSlide>
                <SwiperSlide>
  <div className="relative w-full  h-[330px] md:h-[400px] lg:h-[500px] ">
    <img src={swiper4} alt="slide 1" className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-5xl font-bold">
    Empowering minds, transforming lives!🌻
    </div>
  </div>
        </SwiperSlide>

                       <SwiperSlide>
  <div className="relative w-full  h-[330px] md:h-[400px] lg:h-[500px] ">
    <img src={swiper5} alt="slide 1" className="w-full h-[330px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-5xl font-bold">
      Learn and Share Skills 🌻
    </div>
  </div>
        </SwiperSlide>
     
      </Swiper>
</section>
    )
}

export default Header;