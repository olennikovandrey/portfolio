import "./contact-me.sass";
import { contactData } from "./ContactMeData";
import photo from  "../../assets/images/contact me/1.jpg";
import { useSelector } from "react-redux";
import React from "react";

export default function ContactMe() {
  const lang = useSelector(state => state.lang);
  return (
    <section className="contact-me-wrapper" id={ lang === "english" ? "ContactMe" : "СвязатьсяСоМной"}>
      <h3>{ lang === "english" ? "Contact me" : "Связаться со мной"}</h3>
      <div>
        <div className="top-section-image-wrapper">
          <img src={ photo } alt="Andrey Olennikov" className="top-section-image" />
        </div>
        <div className="contact-me-info">
          <div className="contact-me-social">
            { contactData.map(item =>
              <div key={ item.link }>
                <a href={ item.link } target="_blank" rel="noreferrer">
                  <img src={ item.icon } alt={ item.source } />
                </a>
              </div>
            ) }
          </div>
          <div className="contact-me-mail">
            <p>{ lang === "english" ? "Belarus, Minsk" : "Беларусь, Минск" }</p>
            <p><a href="mailto:olennikov.andrey.work@gmail.com">olennikov.andrey.work@gmail.com</a></p>
            <p><a href="mailto:olennikovandrey@mail.ru">olennikovandrey@mail.ru</a></p>
            <p><a href="tel:+375295559242">+375 29 555 92 42</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
