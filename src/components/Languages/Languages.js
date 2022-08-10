import "./languages.sass";
import LanguageItem from "./LanguageItem";
import russian from "../../assets/images/languages/russian.svg";
import english from "../../assets/images/languages/united-kingdom.svg";
import { useSelector } from "react-redux";
import React from "react";

export default function Languages() {
  const lang = useSelector(state => state.lang);

  return (
    <section>
      <h3>{ lang === "english" ? "Languages" : "Языки" }</h3>
      <div className="language-items-wrapper" id={ lang === "english" ? "Languages" : "Языки" }>
        <LanguageItem
          icon={ russian }
          title={ lang === "english" ? "Russian" : "Русский" }
          level={ lang === "english" ? "Native" : "Родной" }
        />
        <LanguageItem
          icon={ english }
          title={ lang === "english" ? "English" : "Английский" }
          level="Intermediate – B1"
        />
      </div>
    </section>
  );
}
