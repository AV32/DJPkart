import "./App.css";
import { useEffect, useState } from "react";
import LandingPage from "./pages/landing-page";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
// import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/productpage/ProductPage";
import CartPage from "./pages/cart";
import OrderPage from "./pages/orderpage/OrderPage";
import { getCart } from "./pages/cart/useLocalStorage";
import WishlistPage from "./pages/wishlistpage/WishlistPage";

function App() {
  const checkIsSignedIn = localStorage.getItem("isSignedIn") || "";
  const [isSignedIn, setIsSignedIn] = useState(checkIsSignedIn);
  const cartItems = getCart();

  const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);

  useEffect(() => {
    if (!localStorage.getItem("cartItems"))
      localStorage.setItem("cartItems", JSON.stringify([]));
    if (!localStorage.getItem("orderItems"))
      localStorage.setItem("orderItems", JSON.stringify([]));
    if (!localStorage.getItem("wishlist"))
      localStorage.setItem("wishlist", JSON.stringify([]));
    if (!localStorage.getItem("userAddress"))
      localStorage.setItem(
        "userAddress",
        JSON.stringify({
          address: "",
          locality: "",
          city: "",
          state: "",
          pincode: "",
          landmark: "",
          isthere: false,
        })
      );
  }, []);

  function signIn() {
    setIsSignedIn(!isSignedIn);
  }

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
  }, [isSignedIn]);

  // console.log("IsSignedIn ", isSignedIn);
  return (
    <div className="App">
      <Navbar
        cartItemsCount={cartItemsCount}
        isSignedIn={isSignedIn}
        signIn={signIn}
      />

      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/products/:id">
          <ProductPage setCartItemsCount={setCartItemsCount} />
        </Route>
        <Route exact path="/cart">
          <CartPage setCartItemsCount={setCartItemsCount} />
        </Route>
        <Route exact path="/orders">
          <OrderPage />
        </Route>
        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
