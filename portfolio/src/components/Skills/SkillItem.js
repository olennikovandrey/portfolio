import React from "react";
import PropTypes from "prop-types";

export default function SkillItem({ title, level, icon }) {
  return (
    <div className="skill-item-wrapper">
      <div className="skill-item-logo-title">
        <div className="skill-item-logo">
          <img src={ icon } alt={ title } />
        </div>
        <p className="skill-item-title">{ title }</p>
      </div>
      <img src={ level } alt={ level } />
    </div>
  );
}

SkillItem.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
  icon: PropTypes.string
};
