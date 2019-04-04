import React, { Component } from "react";

class MasonryLayout extends Component {
  state = {
    items: this.props.items
  };
  render() {
    return (
      <section className="wide-grid masonry">
          <div className="masonry__container masonry--animate masonry--active">
            {this.state.items.map(item => (
              <div
                key={item.id}
                className={this.getMasonryClasses()}
                data-masonry-filter="digital"
              >
                <a href={item.href}>
                  <div
                    className="hover-element hover-element-1"
                    data-title-position="top,right"
                  >
                    <div className="hover-element__initial">
                      <img alt="" src={item.url} />
                    </div>
                  </div>
                </a>
              </div>
            ))}
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

export default MasonryLayout;
