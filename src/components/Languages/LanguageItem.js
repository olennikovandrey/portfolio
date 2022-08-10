import React from "react";
import PropTypes from "prop-types";

export default function LanguageItem({ icon, title, level }) {
  return (
    <div className="language-item-wrapper">
      <img src={ icon } alt={ title } />
      <p>{ title }</p>
      <p>{ level }</p>
    </div>
  );
}

LanguageItem.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
  icon: PropTypes.string
};
