import React from 'react';
import './Navbar.scss';
import { default as NavbarBootstrap } from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Navbar() {
    return (
        <NavbarBootstrap variant="dark" expand="lg">
            <Container fluid>
                <NavbarBootstrap.Brand href="/">
                    Jordan Barbosa
                </NavbarBootstrap.Brand>
            </Container>
        </NavbarBootstrap>
    );
}
