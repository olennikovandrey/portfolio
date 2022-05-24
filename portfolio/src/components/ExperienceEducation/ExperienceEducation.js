import "./experience-education.sass";
import { experienceData } from "./experienceData";
import { educationData } from "./educationData";
import PropTypes from "prop-types";
import React from "react";

export default function ExperienceEducation({ id, data,  }) {
  return (
    <section id={ id } className="experience-education-wrapper">
      <h3>{ id }</h3>
      <div className="experience-education-items-wrapper">
        { (data === "experienceData" ? experienceData : educationData).map( item =>
          <div className="experience-education-item" key={ item.years }>
            <div className="circle"></div>
            <div>
              <p>{ item.years }</p>
              <p>{ item.title }</p>
              <p>{ item.description }</p>
            </div>
          </div>
        ) }
      </div>
    </section>
  );
}

ExperienceEducation.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string
};
