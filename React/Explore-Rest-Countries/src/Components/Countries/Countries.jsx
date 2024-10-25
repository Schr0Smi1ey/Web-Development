import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country, visited) => {
    if (visited) {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    } else {
      const newVisitedCountries = visitedCountries.filter(
        (visitedCountry) => visitedCountry.cca3 !== country.cca3
      );
      setVisitedCountries(newVisitedCountries);
    }
  };

  return (
    <div>
      <h3>Countries</h3>
      <div>
        <h2>Visited</h2>
        <div className="visited-countries">
          {visitedCountries.map((country) => (
            <li className="visited-country">
              <h2>{country.name.common}</h2>
              {<img src={country.flags.png} alt="" className="visited-img" />}
            </li>
          ))}
        </div>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
