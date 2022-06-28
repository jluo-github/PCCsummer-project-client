import React, { useState, useEffect } from "react";

const getStoredMode = () => {
  let mode = "dark-mode";
  if (localStorage.getItem("mode")) {
    mode = localStorage.getItem("mode");
  }
  return mode;
};

const DarkMode = () => {
  const [mode, setMode] = useState(getStoredMode);
  const toggle = () => {
    if (mode === "dark-mode") {
      setMode("light-mode");
    } else {
      setMode("dark-mode");
    }
  };
  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div>
      <div className="nav-center">
        <h1>overreacted</h1>
        <button className="btn btn-" onClick={toggle}>
          toggle
        </button>
      </div>{" "}
      <nav>
       
        
      </nav>
      dark mode starter
    </div>
  );
};

export default DarkMode;
