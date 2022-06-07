import React from 'react';
import classes from './Home.module.css';

const Home = () => (
  <div className={classes.home_container}>
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

export default Home;
