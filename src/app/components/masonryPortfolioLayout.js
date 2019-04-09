import React, { Component } from "react";

class MasonryPortfolioLayout extends Component {
  render() {
    const masonryClasses =
      "col-md-" +
      Math.round(12 / this.props.items.length) +
      " col-sm-6 masonry__item";

    return (
      <section className="wide-grid">
        <div className="masonry">
          <div className="masonry__container masonry--animate masonry--active">
            {this.props.items.map(item => (
              <div
                key={item.id}
                className={masonryClasses}
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
}

export default MasonryPortfolioLayout;
