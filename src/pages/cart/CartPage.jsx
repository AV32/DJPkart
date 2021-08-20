import { useEffect, useState } from "react";
import "./CartPage.css";
import data from "../../products";
import {
  getCart,
  addItemToCart,
  removeItemFromCart,
  addItemQuantity,
  reduceItemQuantity,
} from "./useLocalStorage";

function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-page-left"></div>
      <div className="cart-page-right"></div>
    </div>
  );
}

export default CartPage;
