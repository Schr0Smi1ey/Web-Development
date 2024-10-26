const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  cart.splice(cart.indexOf(id), 1);
  localStorage.setItem("cart", JSON.stringify(cart));
};
export { getStoredCart, addToLS, removeFromLS };
