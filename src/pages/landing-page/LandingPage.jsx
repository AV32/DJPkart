import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productcard/ProductCard";
// import Header from "../../components/header";
import PauseOnHover from "../../components/slider";
import ProductPage from "../../productpage/ProductPage";
function LandingPage() {
  const data = [
    {
      url: "https://rukminim1.flixcart.com/image/416/416/j9d3bm80/mobile/f/y/v/apple-iphone-x-mqa92hn-a-original-imaeyysgqbg8qmhn.jpeg?q=70",
      name: "APPLE iPhone X (Silver, 64 GB)",
      price: "65,999",
      rating: "4.6",
    },
    {
      url: "https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70",
      name: "realme C21 (Cross Blue, 32 GB)",
      price: "8,799",
      rating: "4.3",
    },
    {
      url: "https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70",
      name: "POCO M3 (Cool Blue, 64 GB)",
      price: "10,499",
      rating: "4.1",
    },
    {
      url: "https://rukminim1.flixcart.com/image/416/416/klb78nk0/mobile/m/2/k/galaxy-f62-sm-e625fzggins-samsung-original-imagygxxse8gbaby.jpeg?q=70",
      name: "SAMSUNG Galaxy F62 (Laser Green, 128 GB)",
      price: "23,999",
      rating: "4.4",
    },
  ];
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <PauseOnHover /> */}
      <div className="nothing">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            url={item.url}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
