import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Project = ({ project }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 991);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 991);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const {
    name,
    description,
    mobileImage,
    desktopImage,
    liveLink,
    githubLink,
    techStack,
  } = project;
  return (
    <div className="project-card">
      <img
        src={isDesktop ? desktopImage : mobileImage}
        alt={name}
        className="card-front"
      />
      <div className="card-back">
        <h2 className="project-name">{name}</h2>
        <p className="description">{description}</p>
        <div>
          <h3 className="text-center">Tech Used:</h3>
          <div className="tech-used">
            {techStack.map((tech) => (
              <img src={tech} alt="Javascript" key={uuidv4()} />
            ))}
          </div>
        </div>
        <div className="d-flex gap-3 links">
          <button type="button" className="btn btn-primary">
            <a href={liveLink}>Live App</a>
          </button>
          <button type="button" className="btn btn-primary">
            <a href={githubLink}>GitHub Repo</a>
          </button>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mobileImage: PropTypes.string.isRequired,
    desktopImage: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default Project;
