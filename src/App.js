import './App.css';
import axios  from "axios";
import React, {useState} from "react";
import dummy from "./dummy.json"

function App() {
  const[data,setData]=useState(dummy);
  const [location,setLocation]=useState("");
console.log(data)
  
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=97b36a9b5586ec4cbe114057f640326e`
  
  const searchLocation=(event)=>{
    if(event.key==="Enter"){    
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  setLocation("");}

  }
  
  return (
    <div className="App">
      <div className="search">
        <input value={location} onChange={event=>setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter Location' />
      </div>
      <div className="container">
      <div className="top">
        <div className="location">
         {data.main? <p>{data.name}</p> :null}
        </div>
        <div className="temp">
          {data.main ? <h1>{Math.round(data.main.temp-273.15)}°C</h1> : null }</div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> :null}</div>
      </div>
        <div className="bottom">
          <div className="feels">{data.main? <p className="bold">{Math.round(data.main.feels_like-273.15)}°C</p>:null}<p>Feels Like</p></div>
          <div className="humidity">{data.main? <p className="bold">{data.main.humidity}%</p>:null}<p>Humidity</p></div>
          <div className="wind">{data.wind?<p className="bold">{Math.round(data.wind.speed*1.6)} km/h</p>:null}<p>Wind Speed</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
