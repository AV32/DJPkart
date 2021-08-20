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
  return (
    <div className="cart-page">
      <div className="cart-page-left">
        <div className="cart-page-left-header">
          <h1>My Cart({getCart().length})</h1>
          <div className="address-container">
            Deliver to{" "}
            <h1 className="cart-page-left-header-address">
              Dinesh Vijay, Joshi Marg Kal
            </h1>
          </div>
        </div>
      </div>
      <div className="cart-page-right"></div>
    </div>
  );
}

export default CartPage;
