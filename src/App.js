import React, { useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import WeatherSearch from "./components/WeatherSearch/WeatherSearch"
import HomePage from "./components/HomePage/HomePage"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false) 
  const Città = ['Roma', 'Milano', 'Patti', 'Palermo', 'Catania']

  //aggiornare il termine di ricerca e gestire il reindirizzamento
  const handleSearch = (query) => {
    console.log("Termine di ricerca ricevuto in App:", query)
    setSearchTerm(query)
    setIsLoading(true) 
  }

  // resettare il termine di ricerca quando l'utente torna alla home
  const resetSearch = () => {
    setSearchTerm('')
    setIsLoading(false) 
  }

  return (
    <BrowserRouter>
    <div style={{background:"#4A628B"}} className="d-flex flex-column min-vh-100">
      <NavBar onSearch={handleSearch} resetSearch={resetSearch} />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" element={
            searchTerm ? <Navigate to="/risultati" replace /> : (
              <>
                <h3 className="mt-3">I Più Cercati...</h3>
                {Città.map(city => (
                  <HomePage key={city} nome={city} resetSearch={resetSearch} />
                ))}
              </>
            )
          } />
          <Route path="/risultati" element={<WeatherSearch searchTerm={searchTerm} isLoading={isLoading} setIsLoading={setIsLoading} />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Route per gestire qualsiasi percorso non definito */}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
}

export default App
