// Dependencies
import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
// Containers
import App from "../app/App";

// HTML
import html from "./html";

export default function serverRender() {
  return (req, res, next) => {
    const context = {};

    const markup = renderToString(
      <App server location={req.url} context={context} />
    );

    const helmet = Helmet.renderStatic();

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      res.send(
        html({
          markup,
          helmet
        })
      );
    }
  };
}
