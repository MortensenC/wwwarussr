import React, { Component } from "react";

class ImageBlockFeatures extends Component {
  state = {
    imgSrc: this.props.item.imgSrc,
    title: this.props.item.title,
    description: this.props.item.description,
    imagePosition: this.props.item.imagePosition,
    items: this.props.item.items
  };
  render() {
    return (
      <section className="bg--secondary imageblock features features-1">
            <div className={this.getImageBlockClasses()}>
                <div className="background-image-holder">
                    <img alt="" src={this.state.imgSrc} />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-push-6 col-sm-8 col-sm-push-4">
                        <h3>{this.state.title}</h3>
                        <p className="lead">{this.state.description}</p>
                        <hr></hr>
                        {this.state.items.map(item => (
                            <div key={item.id} className="col-xs-6">
                                <div className="feature feature-1">
                                    <i className={this.getIconClasses(item.icon)}></i>
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

  getIconClasses(icon) {
    return "icon " + icon;
  }

  getImageBlockClasses() {
    return (
      "imageblock__content col-md-5 col-sm-3 pos-left" + this.state.imagePosition
    );
  }

}

export default ImageBlockFeatures;
