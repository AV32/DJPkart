import "./CartDisplayProduct.css";
import {
  removeItemFromCart,
  addItemQuantity,
  reduceItemQuantity,
} from "../../pages/cart/useLocalStorage";
import { Link } from "react-router-dom";

function CartDisplayProduct(props) {
  const seller = "DJP Team";
  const { id, name, image, price, rating, quantity } = props;
  if (quantity === 0) {
    return null;
  }
  return (
    <div className="single-cart-product-card">
      <Link to={`/products/${id}`}>
        <div className="cart-product-image">
          {image}
          <div className="cart-quantity-buttons">
            <button onClick={reduceItemQuantity}>-</button>
            {quantity}
            <button onClick={addItemQuantity}>+</button>
          </div>
        </div>
        <div className="cart-product-details">
          <h3>{name}</h3>
          <h6>{seller}</h6>
          <h3>{price}</h3>
          <p>{rating}</p>
          <div className="cart-product-buttons">
            <button onClick={removeItemFromCart}>Remove</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartDisplayProduct;
