import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productcard/ProductCard";
import data from "./../../products";
// import Header from "../../components/header";
import ProdSlider from "../../components/slider/ProdSlider";
import PauseOnHover from "../../components/slider";
import ProductPage from "../productpage/ProductPage";
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

  const item = {
    catogeries: "phone",
    name: "APPLE iPhone 12 Pro (Gold, 128 GB)",
    rating: "4.5",
    description:
      "A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
    price: "₹119900",

    image: [
      "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbr37gm57f7.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrnpyygbv9.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrpksqr8zu.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrgcctfysm.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrqwsxbmuh.jpeg?q=70",
    ],
    review: [
      "Performance was blazing quick too. Even with all its bells and whistles, FunTouch OS ran smoothly and was easy to master. I also found the biometrics to be very reliable, be it the fingerprint sensor or face recognition. Videos looked great on the phone's display, especially HDR content.",
      "One of the best looking phone in the market right now with a decent performance jump from 11 pro. Camera is excellent and the display is quite responsive and sharp. Only issue is it does not have a higher refresh rate and the battery life is average.",
      "I have upgraded from Android to iOS for the first time with the IPhone 12 Pro. And the experience is very much satisfactory. The new A14 bionic processor is very fast. The boxy design is what I liked the most. The camera and display are top notch. Night mode photography is excellent. Worth upgrading from Android to iOS .",
      "Awesome! Just made an upgrade from X, worth every single penny spent on it, the camera is just too superb, be it the selfie cam or the main rear cam, the goodness it takes the picture is just beyond words, no smart phone can beat it atm! However, the battery life tends to be on the shorter side, that’s the only con that I can’t think up of now.",
    ],
  };

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
      {/* <ProductPage
        name={item.name}
        price={item.price}
        rating={item.rating}
        image={item.image}
        catogeries={item.catogeries}
        description={item.description}
        review={item.review}
      /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
