import React, { Component } from "react";

class MasonryLayout extends Component {
  render() {
    const data = [
      {
        id: 1,
        href: "#top",
        url: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+4.jpg"
      },
      {
        id: 2,
        href: "#top",
        url:
          "https://s3.amazonaws.com/ahoyimaagesbvi/developers.radarrelay.com_(me).png"
      },
      {
        id: 3,
        href: "#top",
        url: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+3.jpg"
      },
      {
        id: 4,
        href: "#top",
        url: "https://s3.amazonaws.com/ahoyimaagesbvi/coach.png"
      }
    ];

    return (
      <section className="wide-grid masonry">
        <div className="masonry__container masonry--animate masonry--active">
          {datac.map(item => (
            <div
              key={item.id}
              className={this.getMasonryClasses(data)}
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

  getMasonryClasses(data) {
    return "col-md-" + Math.round(12 / data.length) + " col-sm-6 masonry__item";
  }
}

export default MasonryLayout;
