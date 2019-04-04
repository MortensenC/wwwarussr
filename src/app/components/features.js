import React, { Component } from 'react';

class Features extends Component {
    state = { 
        imgSrc: this.props.item.imgSrc,
        titleBold: this.props.item.titleBold,
        titleThin: this.props.item.titleThin,
        description: this.props.item.description,
        featureTitle: this.props.item.featureTitle,
        featureDescription: this.props.item.featureDescription
     }
    render() { 
        return ( 
        <section className="features features-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-7">
                        <h3>{this.state.titleBold},<em>{this.state.titleThin}</em></h3>
                        <p className="lead">{this.state.description}</p>
                        <div className="feature">
                            <h5>{this.state.featureTitle}</h5>
                            <p>{this.state.featureDescription}</p>
                        </div>
                    </div>
                    <div className="col-md-7 features__avatar">
                        <img alt="" src={this.state.imgSrc} />
                    </div>
                </div>
            </div>
          </section> 
          );
    }
}
 
export default Features;