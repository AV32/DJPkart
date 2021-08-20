import React from "react";
import "./ProductPage.css";
// import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Truck from "./truck.png";
import Price from "./price-tag.png";
import data from "../../products";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { addItemToCart, getCart } from "./../../pages/cart/useLocalStorage";

function ProductPage() {
  let id = window.location.pathname.split("/")[2];
  const {
    className,
    price,
    name,
    rating,
    image,
    review,
    discription,
    catogeries,
  } = data[id - 1];
  const [dispImg, setDispImg] = useState(image[0]);
  // const zoomProps = {
  //   width: 300,
  //   height: 450,
  //   zoomWidth: 100,
  //   img: dispImg,
  // };

  const addItem = () => {
    addItemToCart({
      id,
      name,
      price,
      rating,
      discription,
      quantity: 1,
      img: image[0],
    });
    setItemInCart(true);
  };

  const [itemInCart, setItemInCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const cartItems = getCart();

    cartItems.map((item) => {
      if (item.id == id) setItemInCart(true);
    });
  }, []);

  return (
    <div>
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
            {itemInCart ? (
              <Link to="/cart">
                <button className="prod-addToBag">
                  <i className="fas fa-shopping-bag btnProd-icons"></i> GO TO
                  CART BAG
                </button>
              </Link>
            ) : (
              <button className="prod-addToBag" onClick={addItem}>
                <i className="fas fa-shopping-bag btnProd-icons"></i> ADD TO BAG
              </button>
            )}
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
            <h3 className="productPage__right__description">{discription}</h3>
          </div>
          <br /> <br />
          <div>
            <div className="head">
              <h1 className="product-details-heading">DELIVERY OPTIONS </h1>
              <img src={Truck} alt="img" />
            </div>

            <div className="Address-address-box Address-pincode-input Address-pdp-box">
              <input type="tel" placeholder="Enter a PIN code" />
              <button
                type="submit"
                className="Address-address-button"
                style={{ color: "rgb(191, 192, 198)" }}
              />
            </div>
            <p className="sub">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
            <ul className="wePromise">
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 30 days returns and exchanges</li>
              <li>Try & Buy might be available</li>
            </ul>
            <br />
            <div className="head">
              <h1 className="product-details-heading">BEST OFFERS </h1>
              <img src={Price} alt="img" />
            </div>

            <h2 className="subH"> Best Price rs 1213</h2>
            <ul className="giveBullets">
              <li>
                Applicable on: Orders above Rs. 2499 (only on first purchase)
              </li>
              <li>Coupon code: DJP400</li>
              <li>
                Coupon Discount: Rs. 400 off (check cart for final savings)
              </li>
            </ul>

            <h2 className="sub_">View Eligible Products</h2>
            <br />
            <h1 className="product-details-heading">EMI option available</h1>
            <li>EMI starting from Rs.87/month</li>
            <h2 className="sub_">View Plan</h2>
            <br />
            <p>Product Code: 14033232</p>
            <p>
              Seller:<span style={{ color: "#ff527b" }}>Pankaj</span>
            </p>
            <p className="sub">View Supplier Information</p>
          </div>
        </div>
      </div>

      <div className="product_reviews">
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

      {/* <div className="productPage__right">
        <h1>{catogeries.charAt(0).toUpperCase() + catogeries.slice(1)}</h1>
        <h1 className="productPage__right__name">{name}</h1>
        <h1 className="productPage__right__rating">{rating}</h1>
        <h1 className="productPage__right__price">{price}</h1>
        <h1 className="productPage__right__description">{description}</h1>

     
      </div> */}
    </div>
  );
}

export default ProductPage;
