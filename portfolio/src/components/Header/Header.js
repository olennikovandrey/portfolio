import "./header.sass";
import russian from "../../assets/images/languages/russian.svg";
import english from "../../assets/images/languages/united-kingdom.svg";
import { RU, EN } from "../../store/actions/action-types";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export default function Header() {
  const headerNavsEN = ["About", "Skills", "Education", "Projects", "Experience", "Languages", "Contact me"];
  const headerNavsRU = ["Обо мне", "Навыки", "Образование", "Проекты", "Опыт", "Языки", "Связаться со мной"];
  const lang = useSelector(state => state.lang);
  const dispatch = useDispatch();

  const EnNavs = () => {
    return (
      <>
        { headerNavsEN.map(item =>
          <div key={ item } className="nav-wrapper">
            <nav onClick={ () =>
              document.getElementById(
                item.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(""))
                .scrollIntoView({block: "center", behavior: "smooth"})
            }>
              { item }
            </nav>
          </div>
        ) }
      </>
    );
  };

  const RuNavs = () => {
    return (
      <>
        { headerNavsRU.map(item =>
          <div key={ item } className="nav-wrapper">
            <nav onClick={ () =>
              document.getElementById(
                item.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(""))
                .scrollIntoView({block: "center", behavior: "smooth"})
            }>
              { item }
            </nav>
          </div>
        ) }
      </>
    );
  };

  return (
    <header>
      { lang === "english" ? <EnNavs /> : <RuNavs /> }
      <div className="flags-wrapper">
        <img src={ russian } className="flag" alt="russian" onClick={ () => dispatch({ type: RU }) } />
        <img src={ english } className="flag" alt="english" onClick={ () => dispatch({ type: EN }) } />
      </div>
    </header>
  );
}
