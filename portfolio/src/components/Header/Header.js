import "./header.sass";
import React from "react";

export default function Header() {
  const headerNavs = ["About", "Skills", "Education", "Projects", "Experience", "Languages", "Contact me"];
  return (
    <header>
      { headerNavs.map(item =>
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
    </header>
  );
}
