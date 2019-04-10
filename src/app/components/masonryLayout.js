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

    const masonryClasses =
      // eslint-disable-next-line prefer-template
      "col-md-" +
      Math.round(12 / data.length).toString() +
      " col-sm-6 masonry__item";

    return (
      <section className="wide-grid masonry">
        <div className="masonry__container masonry--animate masonry--active">
          {data.map(item => (
            <div
              key={item.id}
              className={masonryClasses}
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
}

export default MasonryLayout;
