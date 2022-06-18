import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow, Pagination, Navigation, Keyboard,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Projects.css';
import Project from './Project';
import projects from './data/projects';

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
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      navigation
      loop
      modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Project project={projects[0]} />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Projects;
