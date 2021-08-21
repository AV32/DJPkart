import CartDisplayProduct from "../../components/cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import { Modal } from "@material-ui/core";
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
  const [cartItems, setCartItems] = useState(getCart() || []);

  const [address, setAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("userAddress", address);
  };

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
            {!address ? (
              <>
                No address available{" "}
                <button onClick={handleOpen}>Add Address</button>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="lightblue"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                Deliver to
                <h1 className="cart-page-left-header-address">{address}</h1>
              </>
            )}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="addressForm">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button onClick={handleClose}>Add Address</button>
        </div>
      </Modal>
    </div>
  );
}

export default CartPage;
