import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProdSlider.css";
import ProductCard from "../productcard/ProductCard";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider__conatiner">
        <Slider {...settings}>
          {/* <div className="slider-card">1</div>
          <div className="slider-card">2</div>
          <div className="slider-card">3</div>
          <div className="slider-card">4</div>
          <div className="slider-card">5</div>
          <div className="slider-card">6</div>
          <div className="slider-card">7</div>
          <div className="slider-card">8</div>
          <div className="slider-card">9</div>
          <div className="slider-card">10</div>
          <div className="slider-card">11</div>
          <div className="slider-card">12</div>
          <div className="slider-card">13</div>
          <div className="slider-card">14</div> */}
          {this.props.data.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              price={item.price}
              rating={item.rating}
              url={item.image[0]}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
