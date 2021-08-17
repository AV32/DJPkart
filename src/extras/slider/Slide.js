import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"
import  image1  from "../images/1.jpg"
import  image2  from "../images/2.jpg"
import  image3  from "../images/3.jpg"

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="slide">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="slider image" />
          </div>
          <div>
          <img src={image2} alt="slider image" />
          </div>
          <div>
          <img src={image3} alt="slider image" />
          </div>
          <div>
          <img src={image1} alt="slider image" />
          </div>
          <div>
          <img src={image2} alt="slider image" />
          </div>
          <div>
          <img src={image3} alt="slider image" />
          </div>
        </Slider>
      </div>
    );
  }
}


