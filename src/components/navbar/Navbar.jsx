import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "material-ui-search-bar";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import Category from "../category/Category";
import Login from "../login";
import UserProfile from "../user-profile";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Profile from "./Profile/Profile";
// import Cart from "./Cart/Cart";

function Navbar(props) {
  const { isSignedIn, signIn } = props;
  const [isNavOpen, setNavOpen] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  console.log("Navbar isSigned In", isSignedIn);

  function getUserData(key) {
    if (isSignedIn) {
      const savedData = localStorage.getItem(key);
      const userData = JSON.parse(savedData);
      return userData;
    }
  }

  function MobileNav() {
    return (
      <div className="display-mobile-nav">
        <div className="mobile-nav-links">
          <p>Home</p>
          <p>Categories</p>
          <p>My Orders</p>
          <p>Coupons</p>
          <p>Gift Cards</p>
          {isSignedIn ? (
            <UserProfile signIn={signIn} getUserData={getUserData} />
          ) : (
            ""
          )}
        </div>
        <div className="close-mobile-menu" onClick={handleMobileMenu}>
          <CloseIcon />
        </div>
      </div>
    );
  }

  function handleMobileMenu() {
    setNavOpen(!isNavOpen);
  }

  return (
    <div>
      {!isNavOpen && (
        <div className="md:hidden">
          <div className="mobile-nav">
            <div className="mobile-menu" onClick={handleMobileMenu}>
              <MenuIcon />
            </div>
            <div className="mobile-logo">
              <h1>Logo</h1>
            </div>
            <div className="mobile-right-flex">
              <div className="mobile-avatar">
                {isSignedIn ? "" : <Login signIn={signIn} />}
              </div>
              <div className="mobile-cart">
                <AddShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
      )}
      {isNavOpen && MobileNav()}

      <div className="hidden md:block desktop-nav">
        <div className="Navbar w-full p-3">
          <div className="Navbar__left">
            <h1>Logo</h1>
            {/* <Logo/> */}
            <h1 className="cat" onClick={() => setisVisible(!isVisible)}>
              Category
            </h1>
          </div>
          <div className="Navbar__right">
            <SearchBar
              style={{
                minWidth: 600,
                width: "50%",
                height: "6vh",
              }}
              placeholder="Search for products"
              className="search-bar"
              //   value={this.state.value}
              //   onChange={(newValue) => this.setState({ value: newValue })}
              //   onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            {/* <h1>Profile</h1> */}
            <div className="Navbar__right__right">
              {isSignedIn ? (
                <UserProfile signIn={signIn} getUserData={getUserData} />
              ) : (
                <Login signIn={signIn} />
              )}

              <ShoppingCartIcon />
            </div>
          </div>
        </div>
        {isVisible && <Category />}
      </div>
    </div>
  );
}

export default Navbar;
