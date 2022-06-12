import React from 'react';
import { Accordion, Carousel } from 'react-bootstrap';
import MyProfile from '../../assets/images/my-profile.png';
import './AboutMe.css';
import m001 from '../../assets/images/M001_proof_of_completion.jpeg';
import m100 from '../../assets/images/M100_proof_of_completion.jpeg';
import m220 from '../../assets/images/M220JS_proof_of_completion.jpeg';

const AboutMe = () => (
  <div className="about_me_container">
    <h1 className="page_title">About Me</h1>
    <div className="row border mb-5">
      <div className="col-md-3">
        <img src={MyProfile} alt="Profile" className="profile_photo" />
      </div>
      <p className="col-md text-light about_text">
        I&apos;m a full-stack software developer working with ruby and
        javascript. My daily driver is my passion for streamlining innovative
        solutions to problems through code, a tool that I have fallen in love
        with and it motivates me to wake up and face the world every day. Sounds
        like a more like a developer and less of a human right? &#128512; Well,
        I&apos;m very human and finds peace in talking to positive minded
        people. Back to my developer side, I&apos;m ...
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
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.credential.net/9a9a1afc-bddf-4594-84b8-97537d1711fb#gs.3awixu"
                    className="w-50"
                  >
                    <img
                      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/52034034"
                      alt="ruby-on-rails"
                    />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.credential.net/fa903a17-d64a-40b5-9169-f2eababa3e9c#gs.2sk691"
                    className="w-50"
                  >
                    <img
                      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/50177628"
                      alt="ruby"
                    />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.credential.net/2f152912-9dd3-401a-b7c8-f7cf067def8b#gs.2skfzi"
                    className="w-50"
                  >
                    <img
                      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/47857961"
                      alt="react/redux"
                    />
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 className="mongodb_achievements">MongoDB University</h3>
          </Accordion.Header>
          <Accordion.Body>
            <Carousel variant="dark">
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://university.mongodb.com/course_completion/59af5f42-1609-4022-8b9c-276d7cc169ed?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing"
                    className="w-50"
                  >
                    <img
                      src={m001}
                      alt="m001_proof_of_completion"
                      className="mongo_image"
                    />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://university.mongodb.com/course_completion/04b17cfc-cbfa-456b-b5d3-c4347d6c16d9?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing"
                    className="w-50"
                  >
                    <img
                      src={m100}
                      alt="m100_proof_of_completion"
                      className="mongo_image"
                    />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://university.mongodb.com/course_completion/ab3b20a7-fa24-488f-ab50-40f73a093ee1?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing"
                    className="w-50"
                  >
                    <img
                      src={m220}
                      alt="m220_proof_of_completion"
                      className="mongo_image"
                    />
                  </a>
                </div>
              </Carousel.Item>
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
