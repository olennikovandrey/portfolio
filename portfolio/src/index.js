import "./index.sass";
import GeneralWrapper from "./components/GeneralWrapper/GeneralWrapper";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralWrapper />
  </React.StrictMode>
);
