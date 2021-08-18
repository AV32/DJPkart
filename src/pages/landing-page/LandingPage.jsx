import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productcard/ProductCard";
import data from "./../../products";
// import Header from "../../components/header";
import PauseOnHover from "../../components/slider";
import ProductPage from "../../productpage/ProductPage";
function LandingPage() {
  console.log(data);
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <PauseOnHover /> */}
      <PauseOnHover />
      <div className="nothing">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            url={item.image[0]}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
