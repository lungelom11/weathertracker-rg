import React from 'react'
import Header from './components/Header'
import InputText from './components/InputText'
import CityReport from "./components/CityReport"
import "./style.css"
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {

  const [weatherData, setWeatherData] = useState(false);
    
    const search = async (city) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
        console.log("Request URL:", url);
        const res = await axios.get(url);
  
        setWeatherData({
          humidity: res.data.main.humidity,
          windSpeed: res.data.wind.speed,
          temperature: Math.floor(res.data.main.temp),
          location: res.data.name
        })
        console.log(weatherData)
        
      } catch (error) {
        if (error.response) {
          console.log("Error Status:", error.response.status);
          console.log("Error Data:", error.response.data);
        } else {
          console.log("Error Message:", error.message);
        }
      }
    };
  
  
    useEffect(() => {
      search("Johannesburg");
    },[])
  

  return (
    <div className="container">
        <div className="header-container">
            <Header />
        </div>
        <div className="main-container">
            <CityReport weatherData={weatherData} />
            <InputText search={search}/>
        </div>
    </div>
  )
}

export default App