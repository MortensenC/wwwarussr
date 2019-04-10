import React, { Component } from "react";

class ImageBlock extends Component {
  render() {
    const iconClasses = "icon icon--lg ${this.props.item.icon}";

    const imageBlockClasses =
      // eslint-disable-next-line prefer-template
      "imageblock__content col-md-6 col-sm-4 pos-" +
      this.props.item.imagePosition;

    const textClasses =
      this.props.item.imagePosition === "right"
        ? "col-md-6 col-sm-8"
        : "col-md-6 col-md-push-6 col-sm-8 col-sm-push-4";

    return (
      <section className="imageblock">
        <div className={imageBlockClasses}>
          <div
            className="background-image-holder"
            style={{
              // eslint-disable-next-line prefer-template
              backgroundImage: "url(" + this.props.item.imgSrc + ")",
              opacity: 1
            }}
          >
            <img alt="" src={this.props.item.imgSrc} />
          </div>
        </div>
        <div className={textClasses}>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="feature feature-1 service-1 text-center">
              <i className={iconClasses} />
              <h4>{this.props.item.title}</h4>
              <p>{this.props.item.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageBlock;
