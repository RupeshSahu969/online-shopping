import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

// Dynamic image array
const bannerImages = [
  { id: 1, url: banner1, alt: "Nature Banner 1", title: "Explore Nature" },
  { id: 2, url: banner2, alt: "City Banner 2", title: "Discover Cities" },
  { id: 3, url: banner3, alt: "Tech Banner 3", title: "Future of Tech" },
  { id: 4, url: banner4, alt: "Nature Banner 4", title: "Wild Beauty" },
];

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImages.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full">
              <img
                src={banner.url}
                alt={banner.alt}
                className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  {banner.title}
                </h2>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base md:text-lg font-medium shadow-md">
                  See More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
