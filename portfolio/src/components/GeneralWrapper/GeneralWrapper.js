import Header from "../Header/Header";
import TopSection from "../TopSection/TopSection";
import Skills from "../Skills/Skills";
import ExperienceEducation from "../ExperienceEducation/ExperienceEducation";
import Projects from "../Projects/Projects";
import Languages from "../Languages/Languages";
import ContactMe from "../ContactMe/ContactMe";
import React from "react";

function GeneralWrapper() {
  return (
    <div className="general-wrapper">
      <Header />
      <TopSection />
      <Skills />
      <ExperienceEducation
        id="Education"
        data="educationData"
      />
      <Projects />
      <ExperienceEducation
        id="Experience"
        data="experienceData"
      />
      <Languages />
      <ContactMe />
    </div>
  );
}

export default GeneralWrapper;