import React from 'react';
import MyProfile from '../../assets/images/my-profile.png';
import './AboutMe.css';

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
  </div>
);

export default AboutMe;
