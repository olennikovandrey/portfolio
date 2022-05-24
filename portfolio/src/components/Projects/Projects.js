import "./projects.sass";
import "./projects-swiper.sass";
import ProjectItem from "./ProjectItem";
import { projectsData } from "./projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import React from "react";

export default function Projects() {
  return (
    <section id="Projects">
      <h3>Projects</h3>
      <div className="projects-preview-wrapper">
        <Swiper
          cssMode={ true}
          loop={ true }
          slidesPerView={ 1 }
          navigation={ true }
          pagination={ true }
          mousewheel={ true }
          keyboard={ true }
          modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
          className="projects-preview-wrapper"
        >
          { projectsData.map(item =>
            <SwiperSlide key={ item.title }>
              <ProjectItem
                title={ item.title }
                description={ item.description }
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
}
