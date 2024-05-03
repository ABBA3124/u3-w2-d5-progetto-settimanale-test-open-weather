import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import WeatherSearch from "./components/WeatherSearch/WeatherSearch"

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (query) => {
    console.log("Termine di ricerca ricevuto in App:", query) 
    setSearchTerm(query)
  }

  return (
    <BrowserRouter>
      <div className="bg-secondary d-flex flex-column min-vh-100">
        <NavBar onSearch={handleSearch} />
        <div className="container flex-grow-1">
          <WeatherSearch searchTerm={searchTerm} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
