import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import App from "./App";

const store = configureStore(window.initialState);

const rootElement = document.getElementById("root");

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp(require("./App").default);
  });
}
