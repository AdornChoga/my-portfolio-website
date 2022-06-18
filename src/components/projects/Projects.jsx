import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Projects.css';
import projects from './data/projects';

const Projects = () => {
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
        navigation
        loop
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {projects.map((project) => (
            <div className="project-card" key={uuidv4()}>
              <img
                src={project.desktopImage}
                alt={project.name}
                className="card-front"
              />
              <div className="card-back">
                <h2 className="project-name">{project.name}</h2>
                <p className="description">{project.description}</p>
                <div>
                  <h3 className="text-center">Tech Used:</h3>
                  <div className="tech-used">
                    {project.techStack.map((tech) => (
                      <img src={tech} alt="Javascript" key={uuidv4()} />
                    ))}
                  </div>
                </div>
                <div className="d-flex gap-3 links">
                  <button type="button" className="btn btn-primary">
                    <a href={project.liveLink}>Live App</a>
                  </button>
                  <button type="button" className="btn btn-primary">
                    <a href={project.githubLink}>GitHub Repo</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
