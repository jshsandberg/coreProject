import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav'
import NavDropdown from 'react-bootstrap/esm/NavDropdown'


function NavBar() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>Friends</Nav.Link>
                    <Nav.Link>Featured Reviews</Nav.Link>
                    <Nav.Link>Browse</Nav.Link>
                    <Nav.Link>Playlist</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    <Nav.Link><Link to="/signup">Sign Up</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default NavBar;