import React from 'react';
import classes from './Projects.module.css';

const Projects = () => (
  <div className="component-container">
    <h1 className="component-title">Projects</h1>
    <div className={classes.cards}>
      <div className={classes.card}>
        <h3>Card 1</h3>
      </div>
    </div>
  </div>
);

export default Projects;
