// Dependencies
import React from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

// Routes
import routes from "../shared/routes";

require("./main.scss");

class MainApp extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <title>
            SaaS Product Development Services | Blockchain, IoT, and Machine
            Learning
          </title>
          <meta
            name="description"
            content="arus is a product development firm with expertise in blockchain, IoT, and machine learning. Our senior teams have been building scalable, production-ready applications for the last 10 years, launching more than 250 products. Visit our website to learn more."
          />
          <meta
            name="keywords"
            content="devops,blockchain,agile,IoT,machine learning,saas"
          />
          <meta name="author" content="arus" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta property="og:title" content="ARUS" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://s3.amazonaws.com/ahoyimaagesbvi/img/hero28.jpg"
          />
          <meta property="og:url" content="http://arus.io/" />
          <meta
            property="og:description"
            content="SaaS Product Development Services | Blockchain, IoT, and Machine Learning"
          />
          <meta property="og:site_name" content="ARUS" />
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400italic,700|Montserrat:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400italic%7CKarla:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Anton"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

const AppWithRouter = withRouter(MainApp);

export default ({ server, location, context }) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />);

  // Client Router
  let router = (
    <BrowserRouter>
      <AppWithRouter>
        <Switch>{routesMap}</Switch>
      </AppWithRouter>
    </BrowserRouter>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <AppWithRouter>
          <Switch>{routesMap}</Switch>
        </AppWithRouter>
      </StaticRouter>
    );
  }

  return <div>{router}</div>;
};
