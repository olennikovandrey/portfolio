import "./languages.sass";
import LanguageItem from "./LanguageItem";
import russian from "../../assets/images/languages/russian.svg";
import english from "../../assets/images/languages/united-kingdom.svg";
import React from "react";

export default function Languages() {
  return (
    <section>
      <h3>Languages</h3>
      <div className="language-items-wrapper" id="Languages">
        <LanguageItem icon={ russian } title="Russian" level="Native"/>
        <LanguageItem icon={ english } title="English" level="Intermediate – B1"/>
      </div>
    </section>
  );
}
