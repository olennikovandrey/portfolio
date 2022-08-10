import "./index.sass";
import GeneralWrapper from "./components/GeneralWrapper/GeneralWrapper";
import reducer from "./store/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GeneralWrapper />
    </Provider>
  </React.StrictMode>
);
