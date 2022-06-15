import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Projects.css';

const Projects = () => (
  <div className="component-container">
    <h1 className="component-title">Projects</h1>
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      loop
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <h3 className="text-center">Card 1</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3 className="text-center">Card 2</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3 className="text-center">Card 3</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3 className="text-center">Card 4</h3>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Projects;
