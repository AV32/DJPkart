import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productcard/ProductCard";
import data from "./../../products";
// import Header from "../../components/header";
import ProdSlider from "../../components/slider/ProdSlider";
import PauseOnHover from "../../components/slider";
import ProductPage from "../../productpage/ProductPage";
import Footer from "../../components/Footer/Footer";
function LandingPage({ isSignedIn, signIn }) {
  const smartPhoneDeals = data.map((item, index) => (
    <ProductCard
      key={index}
      name={item.name}
      price={item.price}
      rating={item.rating}
      url={item.image[0]}
    />
  ));

  return (
    <div>
      <Navbar isSignedIn={isSignedIn} signIn={signIn} />
      {/* <Header /> */}
      <PauseOnHover />
      <h1>Mobile</h1>
      <ProdSlider data={data.filter((item) => item.catogeries === "phone")} />
      <h1>Electronics</h1>
      <ProdSlider
        data={data.filter((item) => item.catogeries === "Electronics")}
      />
      <h1>Sports</h1>
      <ProdSlider data={data.filter((item) => item.catogeries === "Sports")} />
      <h1>Fashion</h1>
      <ProdSlider data={data.filter((item) => item.catogeries === "fashion")} />
      <h1>Beauty and Cosmetics</h1>
      <ProdSlider
        data={data.filter((item) => item.catogeries === "Beauty and Cosmetics")}
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
