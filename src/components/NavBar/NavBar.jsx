import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function NavBar({ onSearch }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Invio del termine di ricerca:", inputValue) 
        onSearch(inputValue)
    }

    return (
        <Navbar expand="lg" className="bg-secondary">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" height={50} alt="Logo del sito" />
                </Navbar.Brand>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                        type="search"
                        placeholder="Cerca località..."
                        className="me-2"
                        aria-label="Search"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button variant="danger" type="submit">Cerca</Button>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto me-5 my-2 my-lg-0" style={{ maxHeight: '100px' }} >
                        <NavDropdown title="Opzioni" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Opzione 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Opzione 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Opzione 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
