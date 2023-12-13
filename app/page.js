import React from 'react'
import Slider from '@/components/Slider'
import BannerSlider from '@/components/BannerSlider';

export default function Home() {
  return (
    <div>
    <div className='px-8'>
       <Slider />
    </div>
    <div className='px-8 py-1'>
       <BannerSlider />
    </div>
    </div>
  );
}
