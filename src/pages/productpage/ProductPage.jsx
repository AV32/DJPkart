import React from "react";
import "./ProductPage.css";
import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import Navbar from "../../components/navbar";

function ProductPage({
  className,
  price,
  name,
  rating,
  image,
  review,
  description,
  catogeries,
}) {
  const [dispImg, setDispImg] = useState(image[0]);

  console.log(dispImg);
  const zoomProps = {
    width: 300,
    height: 450,
    zoomWidth: 100,
    img: dispImg,
  };

  return (
    <div className="productPage__container">
      <Navbar />
      <div className="productPage__left">
        <div className="productPage__sideImagesContainer">
          {image.map((item, index) => (
            <div
              onClick={() => setDispImg(item)}
              className="sideImage"
              style={{ backgroundImage: `url(${item})` }}
            >
              {/* <img src={item} alt="" /> */}
            </div>
          ))}
        </div>
        <div className="productPage__displayImageContainer">
          <div
            className="productPage__displayImage"
            style={{ backgroundImage: `url(${dispImg})` }}
          ></div>
          {/* <ReactImageZoom {...zoomProps} /> */}
        </div>
      </div>
      <div className="productPage__right">
        {/* <h1>{catogeries.charAt(0).toUpperCase() + catogeries.slice(1)}</h1> */}
        <h1 className="productPage__right__name">{name}</h1>
        <h1 className="productPage__right__rating">{rating}</h1>
        <h1 className="productPage__right__price">{price}</h1>
        <h1 className="productPage__right__description">{description}</h1>
        {review.map((item) => (
          <div className="review__container">
            <div className="review__User">
              <img
                className="review__avatar"
                src="https://i.pinimg.com/736x/ef/de/78/efde78cc09aeece4b344c689b6e84ead.jpg"
                alt=""
              />{" "}
              <h1>Pratyush K</h1>{" "}
            </div>
            <h1 className="review__text">{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
