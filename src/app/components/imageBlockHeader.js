import React, { Component } from "react";

class ImageBlockHeader extends Component {
  state = {
    imgSrc: "https://s3.amazonaws.com/ahoyimaagesbvi/img/hero28.jpg",
    title: "Your Technology, Beacon.",
    description:
      "arus.io develops successful, best-in-className applications by, experienced diverse technologists catered to your roadmap.",
    icon: "",
    imagePosition: "left"
  };
  render() {
    return (
      <section className="imageblock about-2 bg--dark">
        <div className={this.getImageBlockClasses()}>
          <div className="background-image-holder">
            <img alt="" src={this.state.imgSrc} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-push-7 col-sm-8 col-sm-push-4">
              <h2>{this.state.title}</h2>
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  getImageBlockClasses() {
    return (
      "imageblock__content col-md-6 col-sm-4 pos-" + this.state.imagePosition
    );
  }
}

export default ImageBlockHeader;
