import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav'
import NavDropdown from 'react-bootstrap/esm/NavDropdown'
import { NavItem } from "react-bootstrap";
import { UserContext } from "../../context/userContext";


function HomeNavBar() {

    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link>Friends</Nav.Link>
                    <Nav.Link href="#pricing">Featured Reviews</Nav.Link>
                    <Nav.Link href="#pricing">Browse</Nav.Link>
                    <Nav.Link><Link to="/review">Create a Review</Link></Nav.Link>
                    <NavDropdown title="Create Review" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item><Link to="review/music">Music</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="review/videogame">Videogame</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Movie</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Navbar.Brand href="#home">{user === undefined ? <div></div> : user.name}</Navbar.Brand>
                    <Nav.Link>Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default HomeNavBar;