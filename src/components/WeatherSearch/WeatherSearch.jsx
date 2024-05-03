import React, { useEffect, useState } from "react"

function WeatherSearch({ searchTerm }) {
  const [weatherData, setWeatherData] = useState(null)
  const [cityImage, setCityImage] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  useEffect(() => {
    if (searchTerm) {
      fetchCoordinates(searchTerm)
      fetchCityImage(searchTerm)
    }
  }, [searchTerm])

  const fetchCoordinates = async (query) => {
    console.log("Ricerca coordinate per:", query)
    const apiKey = "6512db379d7b94adc055639eb9b8f988"
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${apiKey}`

    try {
      const geoResponse = await fetch(geoUrl)
      const geoData = await geoResponse.json()
      if (geoData && geoData.length > 0) {
        console.log("Coordinate ricevute:", geoData[0])
        fetchWeatherData(query, geoData[0].lat, geoData[0].lon)
        fetchForecastData(geoData[0].lat, geoData[0].lon)
      }
    } catch (error) {
      console.error("Errore nella richiesta delle coordinate:", error)
    }
  }

  const fetchWeatherData = async (query, lat, lon) => {
    console.log("Ricerca dei dati meteo per:", query)
    const apiKey = "6512db379d7b94adc055639eb9b8f988"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log("Dati meteo ricevuti per:", query, "=", data)
      setWeatherData(data)
    } catch (error) {
      console.error("Errore nella richiesta dei dati meteo:", error)
    }
  }

  const fetchForecastData = async (lat, lon) => {
    const apiKey = "6512db379d7b94adc055639eb9b8f988"
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log("Dati previsioni meteo ricevuti:", data)
      setForecastData(data)
    } catch (error) {
      console.error("Errore nella richiesta delle previsioni meteo:", error)
    }
  }

  const fetchCityImage = async (query) => {
    const accessKey = "gnaNq3vrh5Qj47OT8fkw9hj8l2czLt1rY80kcHefB40"
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.results.length > 0) {
        setCityImage(data.results[0].urls.regular)
      }
    } catch (error) {
      console.error("Errore nella richiesta di immagini:", error)
    }
  }

  return (
    <div className="weather-info">
      {weatherData ? (
        <div className="text-center">
          <h1>Condizioni Meteo per {weatherData.name}, {weatherData.sys.country}</h1>
          <div className="d-flex justify-content-evenly mt-2 mb-4">
            {cityImage && (
              <img
                src={cityImage}
                alt="City"
                className="rounded-5"
                style={{ width: "60%", height: "450px", objectFit: "cover" }}
              />
            )}
            <div className="text-start">
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0]?.icon}.png`}
                height={120}
                alt="Weather icon"
              />
              <p><strong>Condizioni:</strong> {weatherData.weather[0]?.description}</p>
              <p><strong>Temperatura:</strong> {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
              <p><strong>Percepita:</strong> {(weatherData.main.feels_like - 273.15).toFixed(2)}°C</p>
              <p><strong>Temp. Minima:</strong> {(weatherData.main.temp_min - 273.15).toFixed(2)}°C</p>
              <p><strong>Temp. Massima:</strong> {(weatherData.main.temp_max - 273.15).toFixed(2)}°C</p>
              <p><strong>Umidità:</strong> {weatherData.main.humidity}%</p>
              <p><strong>Velocità del Vento:</strong> {weatherData.wind.speed} m/s</p>
            </div>
          </div>
          <div className="text-start bg-info">
          {forecastData && (
            <div className="forecast-info">
                <div className="text-center">

              <h2>Previsioni Meteo Prossimi Giorni:</h2>
                </div>
              {forecastData.list.map((item, index) => (
                <div key={index}>
                  <p><strong>Data e ora:</strong> {new Date(item.dt * 1000).toLocaleString()}</p>
                  <p><strong>Temperatura:</strong> {(item.main.temp - 273.15).toFixed(2)}°C</p>
                  <p><strong>Descrizione:</strong> {item.weather[0]?.description}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5 mb-5">
          <h3>Inserisci una località per visualizzare le condizioni meteo.</h3>
        </div>
      )}
    </div>
  )
}

export default WeatherSearch
