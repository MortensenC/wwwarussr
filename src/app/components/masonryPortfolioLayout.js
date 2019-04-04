import React, { Component } from "react";

class MasonryPortfolioLayout extends Component {
  state = {
    items: this.props.items
  };
  render() {
    return (
      <section className="wide-grid">
        <div className="masonry">
          <div className="masonry__container masonry--animate masonry--active">
            {this.state.items.map(item => (
              <div
                key={item.id}
                className={this.getMasonryClasses()}
                data-masonry-filter="branding"
              >
                <a href={item.href}>
                  <div className="portfolio-item portfolio-item-1 text-center">
                    <img alt="" src={item.url} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  getMasonryClasses() {
    return (
      "col-md-" + Math.round(12/this.state.items.length) + " col-sm-6 masonry__item"
    );
  }
}

export default MasonryPortfolioLayout;
