import './App.css';
import axios  from "axios";
import React, {useState} from "react";

function App() {
  //const url="https://api.openweathermap.org/data/2.5/weather?q=munich&appid=ffa36b52f06f36bad2a1b61c39e91519"
  return (
    <div className="App">
      <div className="container">
      <div className="top">
        <div className="location">
          <p>Munich</p>
        </div>
        <div className="temp">
          <h1>20 C</h1></div>
          <div className="description"><p>Clouds</p></div>
      </div>
        <div className="bottom">
          <div className="feels"><p>22 C</p></div>
          <div className="humidity"><p>20%</p></div>
          <div className="wind"><p>30 km/h</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
