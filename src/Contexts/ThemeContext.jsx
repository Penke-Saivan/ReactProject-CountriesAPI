import React, { createContext, useState } from "react";
export const ThemeContext = createContext("Helllo");

export default function ThemeProvider(props) {
  //---- Props are from App <> children </>

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {props.children}
    </ThemeContext.Provider>
  );
}
