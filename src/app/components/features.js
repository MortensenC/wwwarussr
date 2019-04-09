import React, { Component } from "react";

class Features extends Component {
  render() {
    const description = this.props.item.description ? (
      <p className="lead">{this.props.item.description}</p>
    ) : (
      ""
    );

    return (
      <section className="features features-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-7">
              <h3>
                {this.props.item.titleBold},{" "}
                <em>{this.props.item.titleThin}</em>
              </h3>
              {description}
              <div className="feature">
                <h5>{this.props.item.featureTitle}</h5>
                <p>{this.props.item.featureDescription}</p>
              </div>
            </div>
            <div className="col-md-7 features__avatar">
              <img alt="" src={this.props.item.imgSrc} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
