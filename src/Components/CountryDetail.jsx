import React, { useEffect, useState } from "react";
import "./countryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryDetailShimmer from "./CountryDetailShimmer";

import useTheme from "../Hooks/useTheme";

export default function CountryDetail() {
  const params = useParams();
  let countryName = params.country;

  const { state } = useLocation();

  const [isDark] = useTheme();

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNetFound] = useState(false);
  function updateCountryData(data) {
    setCountryData({
      src: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name?.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital?.join(", "),
      tld: data.tld?.join(" ,"),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(" ,"),
      languages: Object.values(data.languages || {}).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((borderCountry) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${borderCountry}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            return borderCountry.name.common;
          });
      })
    ).then((borders) => {
      setCountryData((prev) => ({ ...prev, borders }));
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNetFound(true);
      });
  }, [countryName]);

  // const size = useWindowSize();

  if (notFound) {
    return (
      <div>
        <h1>Hello please try a valid country name</h1>
        <span
          href="#"
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i> &nbsp; Back
        </span>
      </div>
    );
  }

  return countryData === null ? (
    <CountryDetailShimmer />
  ) : (
    <main className={`${isDark ? "dark" : " "}`}>
      <div className="country-details-conatiner">
        <span
          href="#"
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i> &nbsp; Back
        </span>
        {/* <h1 style={{ textAlign: "center", margin: "40px" }}>
          {size.width} X {size.height}{" "}
        </h1> */}
        <div className="country-details">
          <img
            src={countryData.src}
            style={{ borderColor: "red" }}
            alt="flag"
          />

          <div className="details-text-container">
            <h2>{countryData.name}</h2>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">
                  {countryData.population.toLocaleString("en-IN")}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: &nbsp;</b>
                {countryData.borders.map((border) => {
                  return (
                    <Link to={`../${border}`} key={border}>
                      {border}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
