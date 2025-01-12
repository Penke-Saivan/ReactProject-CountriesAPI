import React, { useState } from "react";
import CountryCard from "./CountryCard";
import { useEffect } from "react";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) => {
          return (
            country.name?.common.toLowerCase().includes(query.toLowerCase()) ||
            country.region.toLowerCase().includes(query.toLowerCase())
          );
        })
        .map((country) => {
          return (
            <CountryCard
              key={country.name?.common}
              name={country.name?.common}
              src={country.flags?.svg}
              population={country?.population.toLocaleString("en-IN")}
              region={country?.region}
              capital={country?.capital?.[0]}
              data={country}
            />
          );
        })}
    </div>
  );
}
