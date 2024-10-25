import "./Watch.css";

const Watch = ({ watch }) => {
  const { name, price, brand } = watch;
  return (
    <div className="watch">
      <h1>{name}</h1>
      <h3>{price}</h3>
      <h1>{brand}</h1>
    </div>
  );
};

export default Watch;
