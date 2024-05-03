import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Form, Nav, Navbar, Alert } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"

function NavBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true) 
    setError("") 
    console.log("Invio del termine di ricerca:", inputValue)
    try {
      await onSearch(inputValue)
      navigate("/risultati")
      setIsLoading(false) // Fine del loading
    } catch (e) {
      console.error("Errore durante la ricerca:", e.message)
      setError("Si è verificato un errore durante la ricerca.") 
      setIsLoading(false) // Fine del loading anche in caso di errore
    }
  }

  const handleHomeClick = () => {
    onSearch("")
    navigate("/")
  }

  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" onClick={handleHomeClick}>
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
            height={50}
            alt="Logo del sito"
            onClick={handleHomeClick}
          />
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="Cerca località..."
            className="me-2"
            aria-label="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading} 
          />
          <Button variant="danger" type="submit" disabled={isLoading}>
            {isLoading ? "Cerco..." : "Cerca"} 
            {/* // Testo del pulsante cambia in base al loading */}
          </Button>
        </Form>
        {error && <Alert variant="danger" className="mt-2">{error}</Alert>} 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto me-5 my-2 my-lg-0" style={{ maxHeight: "100px" }}>
            <NavLink to="/" className="nav-link" onClick={handleHomeClick}>
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
