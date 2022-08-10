import "./projects.sass";
import "./projects-swiper.sass";
import ProjectItem from "./ProjectItem";
import projectsDataEN from "./data/projectsDataEN";
import projectsDataRU from "./data/projectsDataRU";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import React from "react";

export default function Projects() {
  const lang = useSelector(state => state.lang);

  const ProjectsEN = () => {
    return (
      <>
        <Swiper
          cssMode={ true}
          loop={ true }
          slidesPerView={ 1 }
          centeredSlides={ true }
          navigation={ true }
          pagination={ true }
          mousewheel={ true }
          keyboard={ true }
          allowTouchMove={ true }
          simulateTouch={ true }
          touchRatio={ 1 }
          slideToClickedSlide={ true }
          spaceBetween={ 20 }
          modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
          className="projects-preview-wrapper"
        >
          { projectsDataEN.map(item =>
            <SwiperSlide key={ item.title }>
              <ProjectItem
                title={ item.title }
                description={ item.description }
                data={ projectsDataEN }
              />
            </SwiperSlide>
          )}
        </Swiper>
      </>
    );
  };

  const ProjectsRU = () => {
    return (
      <>
        <Swiper
          cssMode={ true}
          loop={ true }
          slidesPerView={ 1 }
          centeredSlides={ true }
          navigation={ true }
          pagination={ true }
          mousewheel={ true }
          keyboard={ true }
          allowTouchMove={ true }
          simulateTouch={ true }
          touchRatio={ 1 }
          slideToClickedSlide={ true }
          spaceBetween={ 20 }
          modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
          className="projects-preview-wrapper"
        >
          { projectsDataRU.map(item =>
            <SwiperSlide key={ item.title }>
              <ProjectItem
                title={ item.title }
                description={ item.description }
                data={ projectsDataRU }
              />
            </SwiperSlide>
          )}
        </Swiper>
      </>
    );
  };

  return (
    <section className="projects-wrapper" id={ lang === "english" ? "Projects" : "Проекты" }>
      <h3>{ lang === "english" ? "Projects" : "Проекты" }</h3>
      <div className="projects-preview-wrapper">
        { lang === "english" ? <ProjectsEN /> : <ProjectsRU /> }
      </div>
    </section>
  );
}
