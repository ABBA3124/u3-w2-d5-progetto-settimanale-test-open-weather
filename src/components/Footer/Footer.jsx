import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

function Footer() {
  return (
    <div className="text-center p-3 bg-light">
      <div className="row text-start">
        <div className="col-md-4 col-lg-4">
          <strong>Product Collections</strong>
          <ul className="list-unstyled">
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Current and Forecast APIs
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Historical Weather Data
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Weather Maps
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Weather Dashboard
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Widgets
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <strong>Subscription</strong>
          <ul className="list-unstyled">
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                How to start
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Pricing
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Subscribe for free
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                FAQ{" "}
              </a>{" "}
            </li>
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
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Our technology
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Accuracy and quality of weather data
              </a>
            </li>
            <li>
              <a href="#footer" className="text-decoration-none">
                {" "}
                Connect your weather station
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <strong>Terms & Conditions</strong>
          <ul className="list-unstyled">
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Terms and conditions of sale
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Privacy Policy
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Website terms and conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-4">
          <ul className="list-unstyled">
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                About us
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Blog
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                OpenWeather for Business
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                ChatBot assistant
              </a>
            </li>
            <li>
              {" "}
              <a href="#footer" className="text-decoration-none">
                {" "}
                Ask a question
              </a>
            </li>
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
