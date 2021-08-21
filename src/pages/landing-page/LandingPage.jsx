import React from "react";
import data from "./../../products";
// import Header from "../../components/header";
import ProdSlider from "../../components/slider/ProdSlider";
import PauseOnHover from "../../components/slider";
import "./LandingPage.css";
import Footer from "../../components/Footer/Footer";
function LandingPage() {
  return (
    <div>
      {/* <Header /> */}
      <div className="landing-page-hero">
        <PauseOnHover />
      </div>
      <div className="landing-page-categories">
        <div className="landing-page-category">
          <h1>Mobile</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "phone")}
          />
        </div>
        <div className="landing-page-category">
          <h1>Electronics</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "Electronics")}
          />
        </div>
        <div className="landing-page-category">
          <h1>Sports</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "Sports")}
          />
        </div>
        <div className="landing-page-category">
          <h1>Fashion</h1>
          <ProdSlider
            data={data.filter((item) => item.catogeries === "fashion")}
          />
        </div>
        <div className="landing-page-category">
          <h1>Beauty and Cosmetics</h1>
          <ProdSlider
            data={data.filter(
              (item) => item.catogeries === "Beauty and Cosmetics"
            )}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
