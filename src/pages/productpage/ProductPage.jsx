import React from "react";
import "./ProductPage.css";
// import ReactImageZoom from "react-image-zoom";
import { useState } from "react";

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
  // const zoomProps = {
  //   width: 300,
  //   height: 450,
  //   zoomWidth: 100,
  //   img: dispImg,
  // };

  return (
    <div className="productPage__container">
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
        <h1 className="productPage__right__rating">
          <img
            className="star"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/docomo/205/white-medium-star_2b50.png"
            alt=""
          />
          {rating}
        </h1>
        <div className="prod-price">
          <h1 className="productPage__right__price">{price}</h1>
          <h1 className="productPage__right__price prod-price-strike">
            ₹{parseInt(price.slice(1, price.length)) + 1000}
          </h1>
          <h1 className="productPage__right__price">( 50% OFF )</h1>
        </div>
        <h1 className="prod-taxes">inclusive of all taxes</h1>
        <div className="prodButtons">
          <button className="prod-addToBag">
            <i className="fas fa-shopping-bag btnProd-icons"></i> ADD TO BAG
          </button>
          <button className="prod-wishList">
            <i className="far fa-heart btnProd-icons"></i> WISHLIST
          </button>
        </div>
        <hr />
        <div className="product-details">
          <h1 className="product-details-heading">
            PRODUCT DETAILS{" "}
            <i className="fas fa-newspaper prod-detail-icon"></i>
          </h1>
          <h3 className="productPage__right__description">{description}</h3>
        </div>
        {review.map((item) => (
          <div className="review__container">
            <div className="review__User">
              <img
                className="review__avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8H1cJiq2N6D8u6lQMkP_-iPVu7d2XZbevhfUNM6obwXcUkeMDvJEsak3kTjvqAr67DDY&usqp=CAU"
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
