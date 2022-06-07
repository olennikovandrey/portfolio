import PreloadPage from "../PreloadPage/PreloadPage";
import Header from "../Header/Header";
import TopSection from "../TopSection/TopSection";
import Skills from "../Skills/Skills";
import ExperienceEducation from "../ExperienceEducation/ExperienceEducation";
import Projects from "../Projects/Projects";
import Languages from "../Languages/Languages";
import ContactMe from "../ContactMe/ContactMe";
import { useSelector } from "react-redux";
import "./general-wrapper.sass";
import React, { useEffect, useState } from "react";

function GeneralWrapper() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lang = useSelector(state => state.lang);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 8000);
  }, []);

  return (
    <>
      { !isLoaded ? <PreloadPage /> :
        <div className="general-wrapper">
          <Header />
          <TopSection />
          <Skills />
          <ExperienceEducation
            id={ lang === "english" ? "Education" : "Образование" }
            data="educationData"
          />
          <Projects />
          <ExperienceEducation
            id={ lang === "english" ? "Experience" : "Опыт" }
            data="experienceData"
          />
          <Languages />
          <ContactMe />
        </div>
      }
    </>
  );
}

export default GeneralWrapper;
