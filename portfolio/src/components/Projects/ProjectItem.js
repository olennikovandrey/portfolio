import { projectsData } from "./projectsData";
import React from "react";
import PropTypes from "prop-types";

export default function ProjectItem({ title, description }) {
  return (
    <div className="project-item-wrapper">
      <p className="project-item-title-mobile">{ title }</p>
      { projectsData.find(item => item.title === title).anim.map(img =>
        <img
          key={ img }
          className="project-item-anim"
          src={ img }
          alt={ img.title }
        />
      ) }
      { projectsData.find(item => item.title === title).image.map(img =>
        <img
          key={ img }
          className="project-item-img"
          src={ img }
          alt={ img.title }
        />
      ) }
      <div className="project-description">
        <p>{ title }</p>
        <span className="project-description-text">{ description }</span>
        <a href={ projectsData.find(item => item.title === title).link }>
          <button>See on Github</button>
        </a>
      </div>
      <div className="project-description-mobile">
        <span className="project-description-text-mobile">{ description }</span>
        <a href={ projectsData.find(item => item.title === title).link }>
          <button>See on Github</button>
        </a>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
