import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {
  return (
    <div className="text-center p-3 bg-light">
      <div className="row text-start">
        <div className="col-md-4 col-lg-4">
          <strong>Product Collections</strong>
          <ul className="list-unstyled">
            <li>Current and Forecast APIs</li>
            <li>Historical Weather Data</li>
            <li>Weather Maps</li>
            <li>Weather Dashboard</li>
            <li>Widgets</li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <strong>Subscription</strong>
          <ul className="list-unstyled">
            <li>How to start</li>
            <li>Pricing</li>
            <li>Subscribe for free</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <strong>Company</strong>
          <ul className="list-unstyled">
            <li>
              <p className="w-50">
                OpenWeather is a team of IT experts and data scientists that has been practising deep weather data
                science. For each point on the globe, OpenWeather provides historical, current, and forecasted weather
                data via light-speed APIs. Headquarters in London, UK.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <strong>Technologies</strong>
          <ul className="list-unstyled">
            <li>Our technology</li>
            <li>Accuracy and quality of weather data</li>
            <li>Connect your weather station</li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <strong>Terms & Conditions</strong>
          <ul className="list-unstyled">
            <li>Terms and conditions of sale</li>
            <li>Privacy Policy</li>
            <li>Website terms and conditions</li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <ul className="list-unstyled">
            <li>About us</li>
            <li>Blog</li>
            <li>OpenWeather for Business</li>
            <li>ChatBot assistant</li>
            <li>Ask a question</li>
          </ul>
        </div>
        <div className="col-12 text-center my-5">
          <strong>Download OpenWeather App</strong>
          <div>
            <a href="#apple" aria-label="Download OpenWeather App for Apple">
              <img
                height={50}
                src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/app-store-badge.svg"
                alt="Download on the App Store"
              />
            </a>
            <a href="#android" aria-label="Download OpenWeather App for Android">
              <img
                height={74}
                src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/google-play-badge.png"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
        <div className="col-6">
          <p>Supplier of Achilles UVDB community</p>
          <p>© 2012 — 2024 OpenWeather ® All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
