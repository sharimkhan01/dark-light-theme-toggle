import React from "react";
import "./Navigation.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [theme, setTheme] = useState("light-theme");
  const Toggle = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className="navigation-container">
      <ul className="navigation-inner-container">
        <li className="list-item">Home</li>
        <li className="list-item">Shop</li>
        <li className="list-item" onClick={Toggle}>
          Toggle
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
