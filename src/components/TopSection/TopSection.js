import { aboutEN, aboutRU } from "./aboutMyselfData";
import russian from "../../assets/images/languages/russian.svg";
import english from "../../assets/images/languages/united-kingdom.svg";
import { RU, EN } from "../../store/actions/action-types";
import photo from  "../../assets/images/5.jpg";
import arrow from "../../assets/images/projects/arrow.svg";
import CVPDF from "../../files/Andrey OlennikovCV.pdf";
import CVJPG from "../../files/Andrey OlennikovCV.jpg";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";

export default function TopSection() {
  const langMobile = document.getElementById("langMobile");
  const [isLangVisible, setIsLangVisible] = useState(false);
  const lang = useSelector(state => state.lang);
  const dispatch = useDispatch();

  const setVisibleFn = () => {
    setIsLangVisible(!isLangVisible);
    setTimeout(() => {
      langMobile.setAttribute("data-state", isLangVisible ? "" : "active");
    }, 100);
  };

  const setRU = () => {
    if (lang !== "english") {
      return;
    }
    setIsLangVisible(!isLangVisible);
    langMobile.setAttribute("data-state", "");
    dispatch({ type: RU });
  };

  const setEN = () => {
    if (lang === "english") {
      return;
    }
    setIsLangVisible(!isLangVisible);
    langMobile.setAttribute("data-state", "");
    dispatch({ type: EN });
  };

  return (
    <>
      <Header />
      <section className="top-section-wrapper" id={ lang === "english" ? "About" : "ОбоМне" }>
        <div id="langMobile" className="lang-mobile" data-state="">
          <img src={ russian } className="flag-mobile" alt="russian" onClick={ setRU } />
          <img src={ english } className="flag-mobile" alt="english" onClick={ setEN } />
          <div>
            <img src={ arrow } className="lang-arrow" onClick={ setVisibleFn } alt="arrow" />
          </div>
        </div>
        <div className="top-section-text">
          <div>
            <h1>{ lang === "english" ? "Andrey Olennikov" : "Андрей Оленников" }</h1>
            <div>
              <h2>Front-end developer</h2>
              <div className="top-section-image-mobile-wrapper">
                <img src={ photo } alt="Andrey Olennikov" className="top-section-image-mobile" />
              </div>
            </div>
          </div>
          <div>
            <span className="top-section-description">
              { lang === "english" ? aboutEN : aboutRU }
            </span>
          </div>
          <div className="top-section-btns">
            <button>
              <a href={ CVPDF } download={ lang === "english" ? "Andrey_Olennikov_CV_PDF" : "Андрей_Оленников_резюме_PDF" }>
                { lang === "english" ? "Download CV (pdf)" : "Скачать резюме (pdf)" }
              </a>
            </button>
            <button>
              <a href={ CVJPG } download={ lang === "english" ? "Andrey_Olennikov_CV_JPG" : "Андрей_Оленников_резюме_JPG" }>
                { lang === "english" ? "Download CV (jpg)" : "Скачать резюме (jpg)" }
              </a>
            </button>
          </div>
        </div>
        <div className="top-section-image-wrapper">
          <img src={ photo } alt="Andrey Olennikov" className="top-section-image" />
        </div>
      </section>
    </>
  );
}
