import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../Utils/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("Bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // Load cart from local storage
  useEffect(() => {
    const storedCart = getStoredCart();
    setCart(storedCart);
  }, [bottles]);

  const addToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h1>All Premium Bottles</h1>
      <h3>Cart: {cart.length}</h3>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            addToCart={addToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

Bottles.propTypes = {
  bottles: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};
export default Bottles;
