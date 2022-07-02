import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import anime from 'animejs';
import classes from './Home.module.css';
import MernDeveloper from '../svgs/MernDeveloper';
import MevnDeveloper from '../svgs/MevnDeveloper';
import RailsDeveloper from '../svgs/RailsDeveloper';

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
    tl.to('.create', { y: '0%', duration: 1 });
    anime({
      targets: '.tech_stack path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay(el, i) {
        return i * 50;
      },
      direction: 'alternate',
      loop: true,
    });
  }, []);
  return (
    <div className={classes.home_container}>
      <div className={classes.welcome_section_container}>
        <h2 className="text-center">
          Welcome to my software world of fun and clean code!
        </h2>
        <div className={classes.tech_stack}>
          <MernDeveloper />
          <br />
          <br />
          <MevnDeveloper />
          <br />
          <br />
          <RailsDeveloper />
        </div>
      </div>
    </div>
  );
};

export default Home;
