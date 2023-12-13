'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { banners } from '@/const/index';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.title}>
          <div className="relative h-screen">
            {banner.type === 'video' ? (
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={banner.mediaSrc} type="video/mp4" />
              </video>
            ) : (
              <img src={banner.mediaSrc} alt={banner.title} className="w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-8">
              <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
              <p className="text-lg">{banner.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;