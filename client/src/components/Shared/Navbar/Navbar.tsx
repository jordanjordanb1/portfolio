import React from 'react';
import './Navbar.scss';
import { default as NavbarBootstrap } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import config from '../../../config';

export default function Navbar() {
    return (
        <NavbarBootstrap collapseOnSelect fixed="top" variant="dark" expand="md" className="p-0">
            <NavbarBootstrap.Brand
                as={Link}
                href="/"
                to={{
                    pathname: '/',
                    state: {
                        animation: 'slide-down',
                    },
                }}
                className="mr-md-5 mr-0"
            >
                <span className="p-3">Jordan Barbosa</span>
            </NavbarBootstrap.Brand>
            <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" className="p-2">
                MENU <i className="fas fa-bars"></i>
            </NavbarBootstrap.Toggle>
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
                            HOME
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
                            ABOUT
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
                            PROJECTS
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
                            CONTACT
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav className="ml-auto social-links d-flex flex-row justify-content-center pr-2">
                    <Nav.Link target="_blank" href="https://github.com/jordanjordanb1/">
                        <i className="fab fa-github mt-2"></i>
                    </Nav.Link>

                    <Nav.Link target="_blank" href="https://www.linkedin.com/in/jordan-barbosa/">
                        <i className="fab fa-linkedin mt-2"></i>
                    </Nav.Link>

                    <Nav.Link href="mailto: jordansbarbosa01@gmail.com?subject=Contact from your website">
                        <i className="far fa-envelope mt-2"></i>
                    </Nav.Link>

                    <Nav.Link target="_blank" href={`${config.getUrl()}/resume/resume.pdf`}>
                        <Button className="p-1 px-2 resume-button">RESUME</Button>
                    </Nav.Link>
                </Nav>
            </NavbarBootstrap.Collapse>
        </NavbarBootstrap>
    );
}
