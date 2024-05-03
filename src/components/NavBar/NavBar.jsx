import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    const handleSearch = (e) => {
        e.preventDefault();
        // Gestione della ricerca qui
    };

    return (
        <Navbar expand="lg" className="bg-secondary">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" height={50} alt="Logo del sito" />
                </Navbar.Brand>
                <Form className="d-flex" onSubmit={handleSearch}>
                    <Form.Control
                        type="search"
                        placeholder="Cerca località..."
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="danger" type="submit">Cerca</Button>
                </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto me-5 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <NavDropdown title="Opzioni" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">Opzione 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action2">Opzione 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Opzione 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
