import React, { Component } from "react";
import Nav from "./../../components/nav";
import Footer from "./../../components/footer";
import ImageBlock from "./../../components/imageBlock";
import ImageBlockHeader from "./../../components/imageBlockHeader";
import MasonryLayout from "./../../components/masonryLayout";

class Home extends Component {
  state = {
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
        title: "Blockchain &amp; ÐApps",
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
        title: "Agile &amp; Scrum PM's",
        description:
          "Our solutions bridge the gap between process and technology, and focus on the teams who carry them out.Focusing on unifying teams and processes, we deliver an integrated approach that supports the software goals of any organization. We call this Software Services Lifecycle Management(SSLM).",
        icon: "icon-Statistic",
        imagePosition: "right"
      }
    ],
    masonryItems: [
      {
        id: 1,
        href: "#top",
        url: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+4.jpg"
      },
      {
        id: 2,
        href: "#top",
        url:
          "https://s3.amazonaws.com/ahoyimaagesbvi/developers.radarrelay.com_(me).png"
      },
      {
        id: 3,
        href: "#top",
        url: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+3.jpg"
      },
      {
        id: 4,
        href: "#top",
        url: "https://s3.amazonaws.com/ahoyimaagesbvi/coach.png"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="main-container">
          <ImageBlockHeader />
          <MasonryLayout items={this.state.masonryItems} />
          {this.state.sectionItems.map(sectionItem => (
            <ImageBlock key={sectionItem.id} item={sectionItem} />
          ))}

          <section
            className="imagebg section--even stats-1 parallax"
            data-overlay="0"
          >
            {/* <div className="background-image-holder">
              <img
                alt=""
                src="https://aigang.network/img/section-bg-medium-dark.png"
              />
            </div> */}
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
          <section className="section--overlap cta cta-8">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-5 text-center">
                  <div className="boxed bg--white box-shadow">
                    <form
                      action="api/contactus"
                      method="post"
                      id="subForm"
                      data-error="Please fill all fields correctly."
                      data-success="Thanks for reaching out! We will ge back to you soon!"
                    >
                      <div className="input-with-icon">
                        <label htmlFor="fieldName">Your Name</label>
                        <i className="icon icon-Male-2" />
                        <input
                          className="validate-required"
                          id="fieldName"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="input-with-icon">
                        <label htmlFor="fieldEmail">Email Address</label>
                        <i className="icon icon-Mail-2" />
                        <input
                          className="validate-required validate-email"
                          id="fieldEmail"
                          name="email"
                          type="email"
                          required=""
                        />
                      </div>
                      <div className="input-with-icon">
                        <label htmlFor="fieldName">About your needs</label>
                        <i className="icon icon-Idea" />
                        <input
                          className="validate-required"
                          id="fieldMessage"
                          name="message"
                          type="text"
                        />
                      </div>
                      <button type="submit" className="btn btn--primary vpe">
                        Send
                      </button>
                    </form>
                    <span className="type--fine-print">
                      View our
                      <a href="#top">privacy policy</a>
                    </span>
                  </div>
                </div>
                <div className="col-md-6 col-md-push-1 col-sm-7 col-sm-push-0">
                  <h3>
                    You alone can do it, but you can't do it alone.... give us a
                    shout.
                  </h3>
                  <p>
                    Fill out the form with your contact info and a few sentences
                    about your idea or specific needs. Within one business day,
                    we will contact you and set up a time to chat about how we
                    can help. After our conversation, the arus team will put
                    together a free customized quote for you.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
