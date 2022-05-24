import "./top-section.sass";
import photo from  "../../assets/images/5.jpg";
import CVPDF from "../../files/Andrey OlennikovCV.pdf";
import CVPNG from "../../files/Andrey OlennikovCV.png";
import React from "react";

export default function TopSection() {
  return (
    <section className="top-section-wrapper" id="About">
      <div className="top-section-text">
        <div>
          <h1>Andrey Olennikov</h1>
          <h2>Front-end developer</h2>
        </div>
        <div>
          <span className="top-section-description">Hi! My name is Andrey Olennikov. I&apos;m looking for a job or internship as a Junior JavaScript/React Developer.
            I took the &apos;Front-end Developer (ReactJS)&apos; course at Intellect Fox School. Studied and mastered HTML, CSS, JavaScript, React.
            I have practical experience in creating projects from scratch.
            I quickly master new information, I am able to hear and accept criticism, I can interact in a team. Now I continue to develop and practice new technologies for me.
            I will be glad if you consider my resume. Thanks in advance for your reply!
          </span>
        </div>
        <div className="top-section-btns">
          <button>
            <a href={ CVPDF } download="Andrey_Olennikov_CV_PDF">Dowload CV (pdf)</a>
          </button>
          <button>
            <a href={ CVPNG } download="Andrey_Olennikov_CV_PNG">Dowload CV (png)</a>
          </button>
        </div>
      </div>
      <div className="top-section-image-wrapper">
        <img src={ photo } alt="Andrey Olennikov" className="top-section-image" />
      </div>

    </section>
  );
}
