import React, { Component } from "react";

class ImageBlockHeader extends Component {
  render() {
    const data = {
      imgSrc: "https://s3.amazonaws.com/ahoyimaagesbvi/img/hero28.jpg",
      title: "Your Technology, Beacon.",
      description:
        "arus.io develops successful, best-in-className applications by, experienced diverse technologists catered to your roadmap.",
      icon: "",
      imagePosition: "left"
    };

    const imageBlockClasses =
      // eslint-disable-next-line prefer-template
      "imageblock__content col-md-6 col-sm-4 pos-" + data.imagePosition;

    return (
      <section className="imageblock about-2 bg--dark">
        <div className={imageBlockClasses}>
          <div
            className="background-image-holder"
            style={{
              // eslint-disable-next-line prefer-template
              backgroundImage: "url(" + data.imgSrc + ")",
              opacity: 1
            }}
          >
            <img alt="" src={data.imgSrc} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-7 col-sm-8 col-sm-push-4">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageBlockHeader;
