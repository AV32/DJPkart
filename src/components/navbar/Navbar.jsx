import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "material-ui-search-bar";
import { Avatar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CloseIcon from "@material-ui/icons/Close";
import Category from "../category/Category";
import Login from "../login";
// import Profile from "./Profile/Profile";
// import Cart from "./Cart/Cart";

function Navbar(props) {
  const { isSignedIn, signIn } = props;
  const [isNavOpen, setNavOpen] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  function MobileNav() {
    return (
      <div className="display-mobile-nav">
        <div className="mobile-nav-links">
          <p>Home</p>
          <p>Categories</p>
          <p>My Orders</p>
          <p>Coupons</p>
          <p>Gift Cards</p>
          <p>My Profile</p>
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
        <div className="md:hidden bg-green-400">
          <div className="mobile-nav">
            <div className="mobile-menu" onClick={handleMobileMenu}>
              <MenuIcon />
            </div>
            <div className="mobile-logo">
              <h1>Logo</h1>
            </div>
            <div className="mobile-search hidden">
              <SearchIcon />
            </div>
            <div className="mobile-cart">
              <AddShoppingCartIcon />
            </div>
          </div>
        </div>
      )}
      {isNavOpen && MobileNav()}

      <div className="hidden md:block desktop-nav">
        <div className="Navbar w-full bg-green-400 p-3">
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
                maxWidth: 600,
                width: "50%",
                height: 35,
              }}
              //   value={this.state.value}
              //   onChange={(newValue) => this.setState({ value: newValue })}
              //   onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            {/* <h1>Profile</h1> */}
            {isSignedIn ? <Avatar /> : <Login signIn={signIn} />}
            {/* <Profile/> */}
            <h1>Cart</h1>
            {/* <Cart/> */}
          </div>
        </div>
        {isVisible && <Category />}
      </div>
    </div>
  );
}

export default Navbar;
