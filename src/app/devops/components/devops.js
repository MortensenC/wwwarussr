import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Nav from "./../../components/nav";
import Footer from "./../../components/footer";
import MasonryPortfolioLayout from "./../../components/masonryPortfolioLayout";
import Features from "./../../components/features";
import ImageBlockFeatures from "./../../components/imageBlockFeatures";

class DevOps extends Component {
  render() {
    const data = {
      featureItem: {
        imgSrc: "https://s3.amazonaws.com/ahoyimaagesbvi/avatar-large-4.png",
        titleBold: "DEVops",
        titleThin: "should be automated.",
        description:
          "arus builds infrastructure automation, database automation deployments, continuous integration and deployments of cloud-native and microservices applications",
        featureTitle: "Automate it",
        featureDescription:
          "Don’t waste time with complex server-side install setups, it’s that simple. Define your pipeline needs and we will do the rest."
      },
      masonryItems1: [
        {
          id: 1,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/console.cloud.google.com_sql_instances_radar-prod_overview_project%3Dradar-relay%26authuser%3D2%26duration%3DPT1H(me).png"
        },
        {
          id: 2,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/redis.png"
        },
        {
          id: 3,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/elk.png"
        }
      ],
      imageBlockFeatureItem: {
        imgSrc:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=2562d07e189d92150c0b24ee243c5af2&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80",
        title: "Infrastructure as code",
        description:
          "Lets automate your infrastructure and let the bots we build deploy your pipeline needs.",
        imagePosition: "left",
        items: [
          {
            id: 1,
            icon: "icon-CPU",
            title: "Server infa",
            description:
              "Resilience, flexibility, competitive advantage, and cloud native."
          },
          {
            id: 2,
            icon: "icon-Robot",
            title: "Bots",
            description: "Interaction logic and automation."
          },
          {
            id: 3,
            icon: "icon-Big-Data",
            title: "Big Data",
            description:
              "Capturing, storage, analysis, search, sharing, transfer, visualization"
          },
          {
            id: 4,
            icon: "icon-Server",
            title: "DBA",
            description: "Admin with confidence on all data types."
          }
        ]
      },
      masonryItems2: [
        {
          id: 1,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/elasticbeanstalk-us-west-2-143694936311.s3-us-west-2.amazonaws.com_resources_environments_logs_tail_e-v8gyjgupsn_i-0fc3231395eddea63_TailLogs-1536373093198.out_AWSAccessKeyId%3DAKIAJ4EUBGPT4J56L5CQ%26Expires%3D1536459493%26Signature%3Dqk%252F9pzkHHty0A.png"
        },
        {
          id: 2,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/us-west-2.console.aws.amazon.com_elasticbeanstalk_home_region%3Dus-west-2(me)+(3).png"
        },
        {
          id: 3,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/us-west-2.console.aws.amazon.com_elasticbeanstalk_home_region%3Dus-west-2(me)+(1).png"
        }
      ]
    };

    return (
      <React.Fragment>
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
          <link
            href="css/socicon.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="css/iconsmind.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="css/bootstrap.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="css/interface-icons.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="css/owl.carousel.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="css/theme-mediumblue.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
          <link
            href="css/custom.css"
            rel="stylesheet"
            type="text/css"
            media="all"
          />
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
          <link
            href="css/font-karlaopensans.css"
            rel="stylesheet"
            type="text/css"
          />
        </Helmet>
        <Nav />
        <div className="main-container">
          <Features item={data.featureItem} />
          <MasonryPortfolioLayout items={data.masonryItems1} />
          <ImageBlockFeatures item={data.imageBlockFeatureItem} />
          <MasonryPortfolioLayout items={data.masonryItems2} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default DevOps;
