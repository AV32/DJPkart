import React from "react";
import { getWishlist, removeItemFromWishlist } from "../cart/useLocalStorage";
import "./WishlistCard.css";

function WishlistCard({ id, name, img, price, rating, setWishlist }) {
  return (
    <div className="wishlist__card">
      <div className="wishlist__cardLeft">
        <div
          className="wishlist__img"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="wishlist__description">
          <h1>{name.length > 30 ? `${name.slice(0, 30)}...` : name}</h1>
          <h1>{price}</h1>
        </div>
      </div>
      <div className="wishlist__cardRight">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          fill="#555"
          onClick={() => {
            removeItemFromWishlist(id);
            setWishlist(getWishlist());
          }}
        >
          <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
        </svg>
      </div>
    </div>
  );
}

export default WishlistCard;
