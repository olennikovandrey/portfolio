import { projectsData } from "./projectsData";
import React from "react";
import PropTypes from "prop-types";

export default function ProjectItem({ title, description }) {
  return (
    <div className="project-item-wrapper">
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
        <span>{ description }</span>
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
