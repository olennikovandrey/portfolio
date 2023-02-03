import { useSelector } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

export default function ProjectItem({ title, description, data }) {
  const lang = useSelector(state => state.lang);

  return (
    <div className="project-item">
      <p>{ title }</p>
      <p className="project-item-title-mobile">{ title }</p>
      { data.find(item => item.title === title).anim.map(img =>
        <div key={ img } className="project-item__anim">
          <img
            src={ img }
            alt={ img.title }
          />
        </div>
      ) }
      { data.find(item => item.title === title).image.map(img =>
        <img
          key={ img }
          className="project-item-img-mobile"
          src={ img }
          alt={ img.title }
        />
      )}

      <div className="project-description">
        <span className="project-description-text">{ description }</span>
        <div className="project-description__links">
          <a href={ data.find(item => item.title === title).GitLink } target="blank">
            <button>{ lang === "english" ? "See on Github" : "Посетить Github" }</button>
          </a>
          { data.find(item => item.title === title).deployLink &&
          <a href={ data.find(item => item.title === title).deployLink } target="blank">
            <button>{ lang === "english" ? "Deployed version" : "Онлайн версия" }</button>
          </a>
          }
        </div>
      </div>

      <div className="project-description-mobile">
        <span className="project-description-text-mobile">{ description }</span>
        <div className="project-description__links">
          <button>
            <a href={ data.find(item => item.title === title).GitLink } target="blank">
              { lang === "english" ? "See on Github" : "Посетить Github" }
            </a>
          </button>
          { data.find(item => item.title === title).deployLink &&
              <button>
                <a href={ data.find(item => item.title === title).deployLink } target="blank">
                  { lang === "english" ? "Deployed version" : "Онлайн версия" }
                </a>
              </button>
          }
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  data: PropTypes.array
};
