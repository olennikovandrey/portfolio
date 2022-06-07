import "./experience-education.sass";
import { experienceDataEN } from "./data/experienceDataEN";
import { educationDataEN } from "./data/educationDataEN";
import { experienceDataRU } from "./data/experienceDataRU";
import { educationDataRU } from "./data/educationDataRU";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

export default function ExperienceEducation({ id, data,  }) {
  const lang = useSelector(state => state.lang);

  const ExpEducEN = () => {
    return (
      <>
        { (data === "experienceData" ? experienceDataEN : educationDataEN).map( item =>
          <div className="experience-education-item" key={ item.years }>
            <div className="circle"></div>
            <div>
              <p>{ item.years }</p>
              <p>{ item.title }</p>
              <p>{ item.description }</p>
            </div>
          </div>
        ) }
      </>
    );
  };

  const ExpEducRU = () => {
    return (
      <>
        { (data === "experienceData" ? experienceDataRU : educationDataRU).map( item =>
          <div className="experience-education-item" key={ item.years }>
            <div className="circle"></div>
            <div>
              <p>{ item.years }</p>
              <p>{ item.title }</p>
              <p>{ item.description }</p>
            </div>
          </div>
        ) }
      </>
    );
  };

  return (
    <section id={ id } className="experience-education-wrapper">
      <h3>{ id }</h3>
      <div className="experience-education-items-wrapper">
        { lang === "english" ? <ExpEducEN /> : null }
        { lang !== "english" ? <ExpEducRU /> : null }
      </div>
    </section>
  );
}

ExperienceEducation.propTypes = {
  id: PropTypes.string,
  data: PropTypes.string
};
