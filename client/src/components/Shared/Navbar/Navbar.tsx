import React from 'react';
import './Navbar.scss';
import { default as NavbarBootstrap } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <NavbarBootstrap collapseOnSelect fixed="top" variant="dark" expand="md">
            <NavbarBootstrap.Brand
                as={Link}
                href="/"
                to={{
                    pathname: '/',
                    state: {
                        animation: 'slide-down',
                    },
                }}
                className="mr-md-5"
            >
                Jordan Barbosa
            </NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarBootstrap.Collapse id="responsive-navbar-nav">
                <Nav fill>
                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            // @ts-ignore
                            exact
                            href="/"
                            className="nav-link"
                            to={{
                                pathname: '/',
                                state: {
                                    animation: 'slide-down',
                                },
                            }}
                            activeClassName="active"
                        >
                            Home
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            href="/about"
                            className="nav-link"
                            to={{
                                pathname: '/about',
                                state: {
                                    animation: 'slide-up',
                                },
                            }}
                            // @ts-ignore
                            activeClassName="active"
                        >
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            href="/projects"
                            className="nav-link"
                            to={{
                                pathname: '/projects',
                                state: {
                                    animation: 'slide-up',
                                },
                            }}
                            // @ts-ignore
                            activeClassName="active"
                        >
                            Projects
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            as={NavLink}
                            href="/contact"
                            className="nav-link"
                            to={{
                                pathname: '/contact',
                                state: {
                                    animation: 'slide-up',
                                },
                            }}
                            // @ts-ignore
                            activeClassName="active"
                        >
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav className="ml-auto social-links d-flex flex-row justify-content-center">
                    <Nav.Link target="_blank" href="https://github.com/jordanjordanb1/">
                        <i className="fab fa-github"></i>
                    </Nav.Link>

                    <Nav.Link target="_blank" href="https://www.linkedin.com/in/jordan-barbosa/">
                        <i className="fab fa-linkedin"></i>
                    </Nav.Link>

                    <Nav.Link href="mailto: jordansbarbosa01@gmail.com?subject=Contact from your website">
                        <i className="far fa-envelope"></i>
                    </Nav.Link>
                </Nav>
            </NavbarBootstrap.Collapse>
        </NavbarBootstrap>
    );
}
