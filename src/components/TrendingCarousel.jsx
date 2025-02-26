import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./trendinCarousel.css"; 

const slides = [
  {
    title: "Mike’s famous salad with cheese",
    author: "By Luis Herasme",
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2022/10/Healthy-Homemade-Salad-with-Pomegranate-Cheese-Figs-Brussel-Sprouts-and-Potatoes.jpg",
  },
  {
    title: "Delicious Pasta Special",
    author: "By Lismeldy Peguero",
    image:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
  },
  {
    title: "Tasty Vegan Burger",
    author: "By Xavier Fernadez",
    image:
      "https://cdn.pixabay.com/photo/2019/05/17/09/04/burger-4209189_960_720.jpg",
  },
];

const TrendingCarousel = () => {
  return (
    <div className="w-[1264px] h-[355px] mx-auto p-4 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }} 
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="rounded-3xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[355px] flex items-center pl-10 rounded-lg overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative text-white z-10 p-6">
                <h2 className="text-orange-500 text-2xl font-bold mb-2">
                  Trending Now
                </h2>
                <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                <p className="text-xl">{slide.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next custom-next"></div>
      <div className="swiper-button-prev custom-prev"></div>
    </div>
  );
};

export default TrendingCarousel;


