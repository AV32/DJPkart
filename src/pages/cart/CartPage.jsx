import CartDisplayProduct from "../../components/cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import "./CartPage.css";
// import data from "../../products";
import {
  getCart,
  addItemToCart,
  removeItemFromCart,
  addItemQuantity,
  reduceItemQuantity,
} from "./useLocalStorage";

function CartPage() {
  const [cartItems, setCartItems] = useState(getCart());

  console.log(cartItems);

  function handleRemove(id) {
    removeItemFromCart(id);
    setCartItems(getCart);
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>No Items In Cart</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page-left">
        <div className="cart-page-left-header">
          <h1>My Cart({cartItems.length})</h1>
          <div className="address-container">
            Deliver to
            <h1 className="cart-page-left-header-address">
              Dinesh Vijay, Joshi Marg Kal
            </h1>
          </div>
        </div>

        {/* Map items here */}
        {cartItems.map((item) => (
          <CartDisplayProduct
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.img}
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="cart-page-right"></div>
    </div>
  );
}

export default CartPage;
