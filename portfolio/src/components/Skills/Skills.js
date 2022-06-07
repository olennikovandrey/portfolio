import "./skills.sass";
import { skillsData } from "./skillsData";
import SkillItem from "./SkillItem";
import { useSelector } from "react-redux";
import React, { useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const lang = useSelector(state => state.lang);

  return (
    <section className="skills-wrapper" id={ lang === "english" ? "Skills" : "Навыки" }>
      <h3>{ lang === "english" ? "Skills" : "Навыки" }</h3>
      <div className="skill-items-wrapper" data-state="">
        { skillsData.map(item =>
          <SkillItem
            key={ item.title }
            title={ item.title }
            icon={ item.icon }
            level={ item.level }
          />)
        }
      </div>
      <button onClick={() => {
        setVisible(!visible);
        const skillsWrapper = document.querySelector(".skill-items-wrapper");
        skillsWrapper.setAttribute("data-state", visible ? "" : "active");
      } }>
        { lang === "english" ? ( !visible ? "Show more" : "Hide" ) : null }
        { lang !== "english" ? ( !visible ? "Показать больше" : "Скрыть" ) : null }
      </button>
    </section>
  );
}
