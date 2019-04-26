import PropTypes from "prop-types";
import React, { Component } from "react";
import Lightbox from "react-images";

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.handleCloseLightbox = this.handleCloseLightbox.bind(this);
    this.handleGotoNext = this.handleGotoNext.bind(this);
    this.handleGotoPrevious = this.handleGotoPrevious.bind(this);
    this.handleGotoImage = this.handleGotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  handleCloseLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  handleGotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  handleGotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  handleGotoImage(index) {
    this.setState({
      currentImage: index
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) {
      return;
    }

    this.gotoNext();
  }
  renderGallery() {
    const { images } = this.props;

    if (!images) {
      return;
    }

    const masonryClasses =
      // eslint-disable-next-line prefer-template
      "col-md-" +
      Math.round(12 / images.length).toString() +
      " col-sm-6 masonry__item";

    const _gallery = images.map((obj, i) => {
      return (
        <div key={i} className={masonryClasses} data-masonry-filter="branding">
          <a href={obj.src} onClick={e => this.openLightbox(i, e)}>
            <div className="main__portfolio-item text-center">
              <img alt="" src={obj.src} />
            </div>
          </a>
        </div>
      );
    });

    return (
      <section className="wide-grid">
        <div className="masonry">
          <div className="masonry__container masonry--animate masonry--active">
            {_gallery}
          </div>
        </div>
      </section>
    );
  }
  render() {
    return (
      <div className="section">
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.handleGotoNext}
          onClickPrev={this.handleGotoPrevious}
          onClickThumbnail={this.handleGotoImage}
          onClose={this.handleCloseLightbox}
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
