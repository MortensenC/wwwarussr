import React, { Component } from "react";

class ImageBlock extends Component {
  state = {
    imgSrc: this.props.item.imgSrc,
    title: this.props.item.title,
    description: this.props.item.description,
    icon: this.props.item.icon,
    imagePosition: this.props.item.imagePosition
  };
  render() {
    return (
      <section className="imageblock">
        <div className={this.getImageBlockClasses()}>
          <div className="background-image-holder">
            <img alt="" src={this.state.imgSrc} />
          </div>
        </div>
        <div className={this.getTextClasses()}>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="feature feature-1 service-1 text-center">
              <i className={this.getIconClasses()} />
              <h4>{this.state.title}</h4>
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  getIconClasses() {
    return "icon icon--lg " + this.state.icon;
  }

  getImageBlockClasses() {
    return (
      "imageblock__content col-md-6 col-sm-4 pos-" + this.state.imagePosition
    );
  }

  getTextClasses() {
    return this.state.imagePosition === "right"
      ? "col-md-6 col-sm-8"
      : "col-md-6 col-md-push-6 col-sm-8 col-sm-push-4";
  }
}

export default ImageBlock;
