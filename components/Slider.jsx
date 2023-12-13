"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Card from './Card';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { NftData } from '@/const/index';

const Slider = ({}) => {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        loop={true}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, FreeMode,]}
        className='w-full'
      >
        {NftData.map((item) => (
          <SwiperSlide key={item.title}>
            <Card
              imgSrc={item.imgSrc}
              title={item.title}
              text={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;