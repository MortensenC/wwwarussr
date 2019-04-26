// Dependencies
import React from "react";
import { renderToString } from "react-dom/server";
// import { Helmet } from "react-helmet";
import path from 'path';
import fs from 'fs';
// Containers
import App from "../src/app/App";

// HTML
// import html from "./html";

const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
const htmlData = fs.readFileSync(filePath, 'utf8');


export default function serverRender() {
  return (req, res, next) => {
    const context = {};
    console.log('got request', req.url)

    const markup = renderToString(
      <App server location={req.url} context={context} />
    );

    // const helmet = Helmet.renderStatic();

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      res.send(

        htmlData.replace(
          '<div id="root"></div>',
          `<div id="root">${markup}</div>`
        )
        // replace ${helmet.title.toString()}
        // replace ${helmet.meta.toString()}
      );
    }
  };
}
