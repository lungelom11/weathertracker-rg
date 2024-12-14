import humidity_icon from "../assets/humidity.png"
import wind_icon from "../assets/wind.png"

const CityReport = ({weatherData}) => {
  return (
    <div className="city-report-container">
      <div className="city-name">
        <h1>{weatherData.location}</h1>
      </div>
      <div className="degrees">
        <h1>{weatherData.temperature}°C</h1>
      </div>
      <div className="weather-data">
        <div className="humidity">
          <img src={humidity_icon} alt="" />
          <div className="humidity-text">
            <h2>{weatherData.humidity}%</h2>
            <p>Humidity</p>
          </div>
        </div>
        <div className="wind-speed">
        <img src={wind_icon} alt="" />
          <div className="wind-text">
              <h2>{weatherData.windSpeed} KM/H</h2>
              <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityReport