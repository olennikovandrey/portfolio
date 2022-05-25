import "./skills.sass";
import { skillsData } from "./skillsData";
import SkillItem from "./SkillItem";
import React, { useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="skills-wrapper" id="Skills">
      <h3>Skills</h3>
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
        { !visible ? "Show more" : "Hide"}
      </button>
    </section>
  );
}
