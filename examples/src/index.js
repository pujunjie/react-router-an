import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import RouterContainer from "./router-container";

import "./index.css";

const App = () => (
  <HashRouter>
    <RouterContainer />
  </HashRouter>
);

render(<App />, document.getElementById("root"));
