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
        return i * 100;
      },
      direction: 'alternate',
      loop: true,
    });
  }, []);
  return (
    <div className={classes.home_container}>
      <div className={classes.welcome_section_container}>
        <h2>
          <span className="create">Hello there!</span>
        </h2>
        <h2 className="text-center">
          <span className="create">
            Welcome to my software world of fun and clean code!
          </span>
        </h2>
        <div>
          <MernDeveloper />
          <br />
          <br />
          <MevnDeveloper />
          <br />
          <br />
          <RailsDeveloper />
        </div>
      </div>
      <div className={classes.background}>
        <div className={classes.rotate}>
          <div className={classes.sphere}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className={classes.sphere}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className={classes.sphere}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
          <div className={classes.sphere}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
