import PropTypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, addToCart }) => {
  const { name, img, price } = bottle;
  console.log(bottle);
  return (
    <div className="bottle">
      <h2>Name : {name}</h2>
      <img src={img} alt="" className="bottle-img" />
      <h3>Price: {price}</h3>
      <button onClick={() => addToCart(bottle)} className="purchase-btn">
        Purchase
      </button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};
export default Bottle;
