import React, { Component } from "react";
import Features from "./../../components/features";
import ImageBlockFeatures from "./../../components/imageBlockFeatures";
import Gallery from "../../components/Gallery";

const data = {
  featureItem: {
    imgSrc: "https://s3-us-west-2.amazonaws.com/arusimages/avatar-large-1.png",
    titleBold: "Blockchain",
    titleThin: " yeah its a thing.",
    description:
      "arus is one of the few companies in the world that has applications working in production using blockchain and ÐApps.",
    featureTitle: "Cutting edge",
    featureDescription:
      "Yes, its a big buzz word right now. Not all use cases fit the DLT model, but the ones that do, we not only have you covered, we have a team that has the hands on experience in the industry to execute on it. We also provide blockchain consultants to help define if this is the correct paradigm for your application model."
  },
  masonryItems1: [
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+2.jpg"
    },
    {
      src:
        "https://s3.amazonaws.com/ahoyimaagesbvi/app.radarrelay.com_ZRX_WETH.png"
    },
    {
      src:
        "https://s3.amazonaws.com/ahoyimaagesbvi/app.radarrelay.com_stats.png"
    }
  ],
  imageBlockFeatureItem: {
    imgSrc:
      "https://cdn-images-1.medium.com/max/1600/1*EmVBMzMK9zLA9Kf6GxjRew.jpeg",
    title: "The future is here.",
    description:
      "A platform to reshape the world of business and transform the old order of human affairs for the better.",
    imagePosition: "left",
    items: [
      {
        id: 1,
        icon: "icon-Receipt",
        title: "Solidity smart contracts",
        description:
          "Writing smart contracts on blockchain platforms such as Ethereum."
      },
      {
        id: 2,
        icon: "icon-Cube-Molecule",
        title: "Hyperledger",
        description:
          "The Hyperledger Greenhouse is Business Blockchain Frameworks."
      },
      {
        id: 3,
        icon: "icon-Astronaut",
        title: "IPFS",
        description:
          "IPFS is the Distributed Web, a peer-to-peer hypermedia protocol"
      },
      {
        id: 4,
        icon: "icon-Safe-Box",
        title: "Web3js",
        description:
          "Local or remote eth node, using a HTTP or RPC connections."
      }
    ]
  },
  masonryItems2: [
    {
      src: "https://s3.amazonaws.com/ahoyimaagesbvi/Isometric+Mockup+5.jpg"
    },
    {
      src:
        "https://s3.amazonaws.com/ahoyimaagesbvi/developers.radarrelay.com_(me).png"
    },
    {
      src:
        "https://s3.amazonaws.com/ahoyimaagesbvi/developers.radarrelay.com_(me).png"
    }
  ]
};
class Blockchain extends Component {
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

export default Blockchain;
