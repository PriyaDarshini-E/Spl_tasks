import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const pageStyle = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={pageStyle}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <p>Current Mode: {darkMode ? "Dark Mode" : "Light Mode"}</p>
    </div>
  );
};

export default App;