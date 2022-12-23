import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";
function App() {
  console.log(useState('light'))
  const themeHook = useState('light')
  /* 
    []
  */
  /* light and dark? */
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


/* 

  App -> provider -> state -> light or not
  Header
  HeroSection

  Colors.js

*/