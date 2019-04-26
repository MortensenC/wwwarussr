import React, { Component } from "react";
import ImageBlockHeader from "../../components/imageBlockHeader";
import ImageBlock from "../../components/imageBlock";
import Fade from "react-reveal/Fade";
import Gallery from "../../components/gallery";
import ContactForm from "./contactForm";

const data = {
  sectionItems: [
    {
      id: 1,
      imgSrc:
        "https://s3.amazonaws.com/ahoyimaagesbvi/sai-kiran-anagani-61187.jpg",
      title: "Custom software development",
      description:
        "A team of passionate technologists. We develop custom software for web and mobile, build workflows and systems to digitally ∫transform traditional businesses, and offer digital solutions to get startups to market faster.",
      icon: "icon-Code-Window",
      imagePosition: "right"
    },
    {
      id: 2,
      imgSrc:
        "https://images.unsplash.com/photo-1532339848923-c4beffa7abcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=80892fa505d37b10b5b30d23d031ab8c&auto=format&fit=crop&w=1350&q=80",
      title: "Devops and CI/CD",
      description:
        "Building Code delivery pipelines to ship faster more reliable products at the speed of light.Infrastructure both cloud and distributed can be tough, we write robots to mitigate human error for your data integrity uptime and piece of mind.",
      icon: "icon-Data-Center",
      imagePosition: "left"
    },
    {
      id: 3,
      imgSrc:
        "https://images.unsplash.com/photo-1518515097038-ca19a3777cd7?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=4a6e6a1e9b4df15e53b7951af1371e84&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80",
      title: "Blockchain Apps",
      description:
        "We are an experienced block chain development company combined with a deep understanding of AI, IoT, and cloud services.We build distributed ledger applications faster and risk- free.",
      icon: "icon-Cube-Molecule",
      imagePosition: "right"
    },
    {
      id: 4,
      imgSrc:
        "https://images.unsplash.com/photo-1510746001195-0db09655b6db?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d3c566059bcd5eedb4191f6364bb59b&auto=format&fit=crop&w=2389&q=80",
      title: "IoT and Hardware",
      description:
        "We help innovative tech start-ups to one-up the competition with smart products in wearables, healthcare, connected home and industrial automation fields, and aid businesses with their goals to cut down on expenses and increase their efficiency with actionable data from distributed connected sensors, objects and devices.",
      icon: "icon-Chip",
      imagePosition: "left"
    },
    {
      id: 5,
      imgSrc:
        "https://images.unsplash.com/photo-1493689485253-f07fcbfc731b?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ebe5bb8654d3816c9d934ff455abffb2&amp;auto=format&amp;fit=crop&amp;w=2066&amp;q=80",
      title: "Agile & Scrum PM's",
      description:
        "Our solutions bridge the gap between process and technology, and focus on the teams who carry them out.Focusing on unifying teams and processes, we deliver an integrated approach that supports the software goals of any organization. We call this Software Services Lifecycle Management(SSLM).",
      icon: "icon-Statistic",
      imagePosition: "right"
    }
  ],
  gallery: [
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+4.jpg"
    },
    {
      src:
        "https://s3.amazonaws.com/ahoyimaagesbvi/developers.radarrelay.com_(me).png"
    },
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+3.jpg"
    },
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/coach.png"
    }
  ]
};

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <ImageBlockHeader />
          <Gallery images={data.gallery} />
          <Fade bottom>
            {data.sectionItems.map(sectionItem => (
              <ImageBlock key={sectionItem.id} item={sectionItem} />
            ))}
          </Fade>
          <section
            className="imagebg section--even stats-1 parallax"
            data-overlay="0"
          >
            <div className="row wide-grid">
              <div className="col-sm-3 col-xs-6">
                <div className="feature feature-1 text-center">
                  <i className="icon icon--lg icon-Bodybuilding" />
                  <h3>2,000,000+</h3>
                  <span>
                    <em>End users</em>
                  </span>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="feature feature-1 text-center">
                  <i className="icon icon--lg icon-Fingerprint" />
                  <h3>12</h3>
                  <span>
                    <em>Passionate team members</em>
                  </span>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="feature feature-1 text-center">
                  <i className="icon icon--lg icon-Astronaut" />
                  <h3>26</h3>
                  <span>
                    <em>Launched startups</em>
                  </span>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="feature feature-1 text-center">
                  <i className="icon icon--lg icon-Cardigan" />
                  <h3>Zero</h3>
                  <span>
                    <em>Douchebags</em>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <ContactForm />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
