import React from "react";

import useTheme from "../Hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : " "}`}>
      <div className="header-content">
        <h1 className="title">
          <a href="./">Where in the World</a>
        </h1>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
          &nbsp; {isDark ? "Light mode" : "Dark mode"}
        </p>
      </div>
    </header>
  );
}
