import React from "react";
import Navbar from "../../components/navbar";
// import Header from "../../components/header";
import ProdSlider from "../../components/slider/ProdSlider";
import PauseOnHover from "../../components/slider";

function LandingPage(props) {
  const { isSignedIn, signIn } = props;

  return (
    <div>
      <Navbar isSignedIn={isSignedIn} signIn={signIn} />
      {/* <Header /> */}
      <PauseOnHover />
      <ProdSlider />
    </div>
  );
}

export default LandingPage;
