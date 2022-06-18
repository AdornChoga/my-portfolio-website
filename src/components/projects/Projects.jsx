import React, { useState, useEffect } from 'react';
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

const Projects = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 991);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 991);
  };

  useEffect(() => {
    const readMoreBtns = document.querySelectorAll('.read-more');
    const closeDetailsBtns = document.querySelectorAll('.close-btn');
    readMoreBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelector(
          '.swiper-slide-active .project-card',
        ).style.transform = 'rotateY(-180deg)';
      });
    });

    closeDetailsBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelector(
          '.swiper-slide-active .project-card',
        ).style.transform = 'rotateY(0deg)';
      });
    });

    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
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
        navigation={isDesktop}
        loop
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Project project={projects[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project project={projects[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project project={projects[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project project={projects[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Project project={projects[4]} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
