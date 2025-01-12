import React, { useContext, useEffect, useState } from "react";
// import "./App.css";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import useWindowSize from "../Hooks/useWindowSize";
import useTheme from "../Hooks/useTheme";

export default function Home() {
  // const [isDark]=useOutletContext()
  const [query, setQuery] = useState("");

  //----------- Hook----------
  const [isDark] = useTheme();
  //-----------Hook--------
  // const size = useWindowSize();

  return (
    <main className={`${isDark ? "dark" : " "}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      {/* <h2 style={{ textAlign: "center", }}> <span style={{  backgroundColor:"#886c36d9" }}>Just for Fun --Resize the Window</span> </h2>
      <h1 style={{ textAlign: "center", margin: "40px" }}>
       

        <span style={{  backgroundColor:"red" }} >{size.width} X {size.height}{" "}</span>
      </h1> */}
      <CountriesList query={query} />
    </main>
  );
}
