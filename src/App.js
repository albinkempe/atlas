import React, { useState } from "react";
import './App.css';
import MapChart from './MapChart';

function App() {
  const [countryName, setCountryName] = useState('');

  return (
    <div className="App">
      <div className="menu">
        <h1>BioMap</h1>
        <p>Country</p>
        <p className="countryName">{countryName}</p>
      </div>
      <MapChart setCN={setCountryName}/>
    </div>
  );
}

export default App;
