import React, { Component } from "react";
import Features from "./../../components/features";
import ImageBlockFeatures from "./../../components/imageBlockFeatures";
import Gallery from "../../components/gallery";

const data = {
  featureItem: {
    imgSrc: "https://s3.amazonaws.com/ahoyimaagesbvi/avatar-large-3.png",
    titleBold: "Agile",
    titleThin: " the effective Way.",
    description:
      "Aligning teams, delivering results, building anatomy and ownership.",
    featureTitle: "Team cohesion and the velocity you need",
    featureDescription:
      "Our team of agile consultants share a passion for working with software development teams to help them deliver high-quality software. Take advantage of their practical, hands-on experience to accelerate your adoption of arus and make your agile transition a success."
  },
  masonryItems1: [
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/agile2.png"
    },
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/agile5.png"
    },
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/agile6.png"
    }
  ],
  imageBlockFeatureItem: {
    imgSrc:
      "https://images.unsplash.com/photo-1525332193053-dee9e7348624?ixlib=rb-0.3.5&amp;s=b2be64a7b17d323febd58bdfa710f9ad&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
    title: "Your Partner for Agile Success",
    description:
      "At every phase of your agile journey we guide your teams with a proven methodology for success.",
    imagePosition: "left",
    items: [
      {
        id: 1,
        icon: "icon-Optimization",
        title: "Project management",
        description: "PM's that get the team velocity you need."
      },
      {
        id: 2,
        icon: "icon-Board",
        title: "Agile Transformation",
        description: "Experts support and accelerate your agile journey"
      }
    ]
  },
  masonryItems2: [
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/agile4.png"
    },
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/agile1.png"
    },
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/agile3.png"
    }
  ]
};
class Agile extends Component {
  render() {
    return (
      <div className="main-container">
        <Features item={data.featureItem} />
        <Gallery images={data.masonryItems1} />
        <ImageBlockFeatures item={data.imageBlockFeatureItem} />
        <Gallery images={data.masonryItems2} />
      </div>
    );
  }
}

export default Agile;
