import { useState } from "react";

import "./CartDisplayProduct.css";
import {
  removeItemFromCart,
  addItemQuantity,
  reduceItemQuantity,
  getCart,
} from "../../pages/cart/useLocalStorage";
import { Link } from "react-router-dom";

function CartDisplayProduct(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const seller = "DJP Team";
  const { id, name, image, price, rating, handleRemove } = props;

  function handleReduce() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    reduceItemQuantity(id);
  }

  function handleAdd() {
    setQuantity(quantity + 1);
    addItemQuantity(id);
  }

  if (quantity === 0) {
    return null;
  }
  return (
    <div className="single-cart-product-card">
      <div className="cart-card-flex">
        <div className="cart-product-image">
          <img src={image} alt={name} />
          <div className="cart-quantity-buttons">
            <button disabled={quantity <= 1} onClick={handleReduce}>
              -
            </button>
            {quantity}
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
        <div className="cart-product-details">
          <Link to={`/products/${id}`}>
            <h3>{name}</h3>
          </Link>
          <h6>{seller}</h6>
          <h3>{price}</h3>
          <p>{rating}</p>
          <div className="cart-product-buttons">
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplayProduct;
