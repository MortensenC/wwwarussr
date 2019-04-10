import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Nav from "./../../components/nav";
import Footer from "./../../components/footer";
import MasonryPortfolioLayout from "./../../components/masonryPortfolioLayout";
import Features from "./../../components/features";
import ImageBlockFeatures from "./../../components/imageBlockFeatures";

class CustomSoftware extends Component {
  render() {
    const data = {
      featureItem: {
        imgSrc:
          "https://s3-us-west-2.amazonaws.com/arusimages/avatar-large-2.png",
        titleBold: "Expertise",
        titleThin: "is just the beginning…",
        description: "",
        featureTitle: "Emerging markets",
        featureDescription:
          // eslint-disable-next-line max-len
          "We’ve been developing apps for over a decade, both small and enterprise scale applications. We have built everything from complex webRTC streaming platforms all the way to DApps (decentralized applications). Committing the same passion to any project while educating all clients at any level in the process. Our engineers combine their cross-disciplinary skills to bring your dream to life through Node, Ruby, React, Angular, TypeScript, Python, Golang, Objective-C, Swift and much, much more."
      },
      masonryItems1: [
        {
          id: 1,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+3.jpg"
        },
        {
          id: 2,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+10.png"
        },
        {
          id: 3,
          href: "#top",
          url: "https://s3.amazonaws.com/ahoyimaagesbvi/iphone.jpg"
        }
      ],
      imageBlockFeatureItem: {
        imgSrc:
          "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=377e356cce015c363d123504857f8137&auto=format&fit=crop&w=3111&q=80",
        title: "We build the digital world.",
        description:
          "Seasoned engineers with the latest and greatest technologies at your fingertips.",
        imagePosition: "left",
        items: [
          {
            id: 1,
            icon: "icon-Monitor-3",
            title: "Cloud Native applications",
            description:
              "Decoupled microservice architecture to meet the demand of any scale."
          },
          {
            id: 2,
            icon: "icon-Smartphone-3",
            title: "Mobile",
            description:
              "Addictive iOS and Android applications that stand the test of time"
          }
        ]
      },
      masonryItems2: [
        {
          id: 1,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/www.cinefuse.com_movie_4773_the-golem_trailer(me)+(1).png"
        },
        {
          id: 2,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/rental.turbotenant.com_owners_renters_leads.png"
        },
        {
          id: 3,
          href: "#top",
          url:
            "https://s3.amazonaws.com/ahoyimaagesbvi/www.cadenceandcause.com_impacts_animals-helped-toward-adoption(me)+(3).png"
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

export default CustomSoftware;
