import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Accordion, Carousel } from 'react-bootstrap';
import MyProfile from '../../assets/images/my-profile.png';
import './AboutMe.css';
import {
  microverseAchievements,
  mongodbAchievements,
} from '../achievements/achievements';

const AboutMe = () => (
  <div className="component-container">
    <h1 className="component_title">About Me</h1>
    <div className="row border mb-5">
      <div className="col-md-3">
        <img src={MyProfile} alt="Profile" className="profile_photo" />
      </div>
      <p className="col-md text-light about_text">
        I&apos;m a full-stack web developer working with javascript and ruby.
        I&apos;m open to learning new things as I&apos;m a very adaptive person
        and I&apos;m also a fast learner. Side note: I learned the Mevn stack in
        just four weeks. My main source of motivation is my passion to create
        innovative solutions to real-world problems through code. My friends in
        the software industry who are actually developers I have worked with on
        projects in the past describe me as a creative thinker and versatile
        person in agile development roles. In my free time, I love to watch
        movies about Cyber Security and Tech Evolution.
      </p>
    </div>
    <div>
      <h2 className="achievements_title">Achievements</h2>
      <Accordion defaultActiveKey="0" className="achievements">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="p-0">
            <h3 className="microverse_achievements">Microverse</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel variant="dark">
              {microverseAchievements.map((achievement) => (
                <Carousel.Item key={uuidv4()}>
                  <div className="d-flex justify-content-center">
                    <a href={achievement.certificateLink} className="w-50">
                      <img src={achievement.image} alt={achievement.name} />
                    </a>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 className="mongodb_achievements">MongoDB University</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel variant="dark">
              {mongodbAchievements.map((achievement) => (
                <Carousel.Item key={uuidv4()}>
                  <div className="d-flex justify-content-center">
                    <a href={achievement.certificateLink} className="w-50">
                      <img
                        src={achievement.image}
                        alt={achievement.name}
                        className="mongo_image"
                      />
                    </a>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3 className="github_achievements">GitHub Trophies</h3>
          </Accordion.Header>
          <Accordion.Body className="github_trophies">
            <img
              src="https://github-profile-trophy.vercel.app/?username=adornchoga"
              alt="adornchoga"
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
);

export default AboutMe;
