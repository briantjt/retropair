import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Pairings extends Component {
  render() {
    return (
      <div className="pairings">
        <Carousel showThumbs={false} showStatus={false} useKeyboardArrows infiniteLoop={true}>
          {this.props.pairs}
        </Carousel>
      </div>
    );
  }
}
