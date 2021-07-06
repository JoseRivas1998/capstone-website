import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const navbar = () => (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Tiny Country Games RPG Engine Capstone Project</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/final-poster">
                        <Nav.Link>Final Poster</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/testimonial-essay">
                        <Nav.Link>Testimonial Essay</Nav.Link>
                    </LinkContainer>
                    <Nav.Link href="https://github.com/JoseRivas1998/Tiny-Country-Games-RPG-Engine">
                        Source Code
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default navbar;
