function getCart() {
  if (localStorage.getItem("cartItems"))
    return JSON.parse(localStorage.getItem("cartItems"));
}

function addItemToCart({
  id,
  name,
  price,
  rating,
  discription,
  quantity,
  img,
}) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cart);
  cart.push({ id, name, price, rating, discription, quantity, img });
  console.log(cart);
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

function removeItemFromCart({ id }) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.filter((item) => item.id != id);
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function reduceItemQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.map((item) => {
    if (item.id == id && item.quantity > 1) item.quantity -= 1;

    return item;
  });
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

function addItemQuantity(id) {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const tempCart = cart.map((item) => {
    if (item.id == id) {
      item.quantity += 1;
    }

    return item;
  });
  localStorage.setItem("cartItems", JSON.stringify(tempCart));
}

export {
  getCart,
  addItemToCart,
  removeItemFromCart,
  addItemQuantity,
  reduceItemQuantity,
};
