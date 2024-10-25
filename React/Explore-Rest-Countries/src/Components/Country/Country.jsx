import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country, !visited);
  };

  return (
    <div className={`country ${visited ? "visited" : ""}`}>
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>
        Area: {area} km<sup>2</sup>
      </p>
      <p>Code : {cca3}</p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <p>{visited ? "I have already Visited." : "I will visit soon!"}</p>
    </div>
  );
};

export default Country;
