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
  const [index, setIndex] = useState(null);

  // console.log(data[id - 1]);

  const handleClick = () => {
    const { id, name, discription, rating, price } = data[index - 1];
    console.log(getCart());
    addItemToCart({ id, name, discription, rating, price, quantity: 0 });
    console.log(getCart());
  };

  return (
    <div className="cart-page">
      <input
        type="text"
        value={index}
        onChange={(e) => setIndex(e.target.value)}
      />
      <button onClick={handleClick}>Add Item</button>
      <h1>Cart Page Goes Here</h1>
      <p>Some Products</p>
      <p>Some Products</p>
      <p>Some Products</p>
      <p>Some Products</p>
    </div>
  );
}

export default CartPage;
