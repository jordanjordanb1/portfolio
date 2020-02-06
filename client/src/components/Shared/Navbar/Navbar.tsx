import React from 'react';
import './Navbar.scss';
import { default as NavbarBootstrap } from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    return (
        <NavbarBootstrap variant="dark" expand="md">
            <Container fluid>
                <NavbarBootstrap.Brand href="/">
                    Jordan Barbosa
                </NavbarBootstrap.Brand>
                <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarBootstrap.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto social-links d-flex flex-row justify-content-center">
                        <Nav.Link href="https://github.com/jordanjordanb1/">
                            <i className="fab fa-github"></i>
                        </Nav.Link>

                        <Nav.Link href="https://www.linkedin.com/in/jordan-barbosa/">
                            <i className="fab fa-linkedin"></i>
                        </Nav.Link>

                        <Nav.Link href="mailto: jordansbarbosa01@gmail.com?subject=Contact from your website">
                            <i className="far fa-envelope"></i>
                        </Nav.Link>
                    </Nav>
                </NavbarBootstrap.Collapse>
            </Container>
        </NavbarBootstrap>
    );
}
