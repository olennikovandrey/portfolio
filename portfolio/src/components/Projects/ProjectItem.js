import { useSelector } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

export default function ProjectItem({ title, description, data }) {
  const lang = useSelector(state => state.lang);

  return (
    <div className="project-item-wrapper">
      <p className="project-item-title-mobile">{ title }</p>
      { data.find(item => item.title === title).anim.map(img =>
        <img
          key={ img }
          className="project-item-anim"
          src={ img }
          alt={ img.title }
        />
      ) }
      { data.find(item => item.title === title).image.map(img =>
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
        <a href={ data.find(item => item.title === title).link }>
          <button>See on Github</button>
        </a>
      </div>
      <div className="project-description-mobile">
        <span className="project-description-text-mobile">{ description }</span>
        <a href={ data.find(item => item.title === title).link }>
          <button>{ lang === "english" ? "See on Github" : "Посетить Github" }</button>
        </a>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.array
};
