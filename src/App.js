import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  
  return (
    <div className="App">
      <h1>
        Nasa APOD!
      </h1>
      <Card />
    </div>
  );
}

export default App;
