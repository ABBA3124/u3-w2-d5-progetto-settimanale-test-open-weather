import React, { useEffect, useState } from 'react'
import { Spinner } from "react-bootstrap"  

function HomePage({ nome }) {
  const [weatherData, setWeatherData] = useState(null)
  const [cityImage, setCityImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (nome) {
      fetchWeatherData(nome)
    }
  }, [nome])

  const fetchWeatherData = async (cityName) => {
    setIsLoading(true) // Inizia il caricamento
    setError("") // Resetta eventuali errori precedenti
    const apiKey = "6512db379d7b94adc055639eb9b8f988"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.cod === "404") {
        throw new Error("Città non trovata")
      }
      setWeatherData(data)
      if (data && data.name) {
        fetchCityImage(data.name)
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Errore nella richiesta dei dati meteo:", error)
      setError("Errore durante il recupero dei dati meteo.")
      setWeatherData(null)
      setIsLoading(false)
    }
  }

  const fetchCityImage = async (cityName) => {
    const accessKey = "gnaNq3vrh5Qj47OT8fkw9hj8l2czLt1rY80kcHefB40"
    const url = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(cityName)}&client_id=${accessKey}`
    
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.results.length > 0) {
        setCityImage(data.results[0].urls.regular)
      } else {
        setCityImage(null)
      }
    } catch (error) {
      console.error("Errore nella richiesta di immagini:", error)
    } finally {
      setIsLoading(false) 
    }
  }




  return (
    <div className="weather-info">
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div className="text-center mt-5 mb-5">
          <h3>{error}</h3>
        </div>
      ) : weatherData ? (
        <div className="text-center">
            <hr />
          <h1 className='' style={{color:"white"}}>
            Condizioni Meteo per {weatherData.name}, {weatherData.sys.country}
          </h1>
          <div className="d-flex justify-content-evenly mt-2 mb-4 ">
            {cityImage && (
              <img
                src={cityImage}
                alt="City"
                className="rounded-5"
                style={{ width: "60%", height: "450px", objectFit: "cover" }}
              />
            )}
            <div className="text-start rounded-4 border p-3" style={{background:"#BDCDC5"}}>
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0]?.icon}.png`}
                height={120}
                alt="Weather icon"
              />
              <p>
                <strong>Condizioni:</strong> {weatherData.weather[0]?.description}
              </p>
              <p>
                <strong>Temperatura:</strong> {(weatherData.main.temp - 273.15).toFixed(2)}°C
              </p>
              <p>
                <strong>Percepita:</strong> {(weatherData.main.feels_like - 273.15).toFixed(2)}°C
              </p>
              <p>
                <strong>Temp. Minima:</strong> {(weatherData.main.temp_min - 273.15).toFixed(2)}°C
              </p>
              <p>
                <strong>Temp. Massima:</strong> {(weatherData.main.temp_max - 273.15).toFixed(2)}°C
              </p>
              <p>
                <strong>Umidità:</strong> {weatherData.main.humidity}%
              </p>
              <p>
                <strong>Velocità del Vento:</strong> {weatherData.wind.speed} m/s
              </p>
            </div>
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

export default HomePage
