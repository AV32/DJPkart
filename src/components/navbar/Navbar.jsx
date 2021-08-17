import React from "react";
import "./Navbar.css";
// import Category from "./Category/Category";
import SearchBar from "material-ui-search-bar";
// import Profile from "./Profile/Profile";
import { Avatar } from "@material-ui/core";
// import Cart from "./Cart/Cart";
function Navbar() {
  return (
    <div className="Navbar w-full bg-green-400 p-3">
      <div className="Navbar__left">
        <h1>Logo</h1>
        {/* <Logo/> */}
        <h1>Category</h1>
        {/* <Category/> */}
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
        <Avatar />
        {/* <Profile/> */}
        <h1>Cart</h1>
        {/* <Cart/> */}
      </div>
    </div>
  );
}

export default Navbar;
