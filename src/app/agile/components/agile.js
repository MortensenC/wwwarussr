import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Nav from "./../../components/nav";
import Footer from "./../../components/footer";
import MasonryPortfolioLayout from "./../../components/masonryPortfolioLayout";
import Features from "./../../components/features";
import ImageBlockFeatures from "./../../components/imageBlockFeatures";

class Agile extends Component {
  render() {
    const data = {
      featureItem: {
        imgSrc: "https://s3.amazonaws.com/ahoyimaagesbvi/avatar-large-3.png",
        titleBold: "Agile",
        titleThin: " the effective Way.",
        description:
          "Aligning teams, delivering results, building anatomy and ownership.",
        featureTitle: "Team cohesion and the velocity you need",
        featureDescription:
          "Our team of agile consultants share a passion for working with software development teams to help them deliver high-quality software. Take advantage of their practical, hands-on experience to accelerate your adoption of arus and make your agile transition a success."
      },
      masonryItems1: [
        {
          id: 1,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/agile2.png"
        },
        {
          id: 2,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/agile5.png"
        },
        {
          id: 3,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/agile6.png"
        }
      ],
      imageBlockFeatureItem: {
        imgSrc:
          "https://images.unsplash.com/photo-1525332193053-dee9e7348624?ixlib=rb-0.3.5&amp;s=b2be64a7b17d323febd58bdfa710f9ad&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
        title: "Your Partner for Agile Success",
        description:
          "At every phase of your agile journey we guide your teams with a proven methodology for success.",
        imagePosition: "left",
        items: [
          {
            id: 1,
            icon: "icon-Optimization",
            title: "Project management",
            description: "PM's that get the team velocity you need."
          },
          {
            id: 2,
            icon: "icon-Board",
            title: "Agile Transformation",
            description: "Experts support and accelerate your agile journey"
          }
        ]
      },
      masonryItems2: [
        {
          id: 1,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/agile4.png"
        },
        {
          id: 2,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/agile1.png"
        },
        {
          id: 3,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/agile3.png"
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

export default Agile;
