import React, { Component } from "react";

class ImageBlockFeatures extends Component {
  getIconClasses(icon) {
    return `icon ${icon}`;
  }

  getImageBlockClasses() {
    return (
      // eslint-disable-next-line prefer-template
      "imageblock__content col-md-5 col-sm-3 pos-left" +
      this.props.item.imagePosition
    );
  }
  render() {
    return (
      <section className="bg--secondary imageblock features features-1">
        <div className={this.getImageBlockClasses()}>
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
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-push-6 col-sm-8 col-sm-push-4">
              <h3>{this.props.item.title}</h3>
              <p className="lead">{this.props.item.description}</p>
              <hr />
              {this.props.item.items.map(item => (
                <div key={item.id} className="col-xs-6">
                  <div className="feature feature-1">
                    <i className={this.getIconClasses(item.icon)} />
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageBlockFeatures;
