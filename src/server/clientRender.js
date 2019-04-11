// HTML
import html from "./html";
import { Helmet } from "react-helmet";

export default function clientRender() {
  return (req, res, next) => {
    if (req.isBot) {
      return next();
    }

    const initialState = {
      device: {
        isMobile: false
      }
    };

    const helmet = Helmet.renderStatic();

    res.send(html({
      markup: "",
      helmet,
      initialState
    }));
  };
}
