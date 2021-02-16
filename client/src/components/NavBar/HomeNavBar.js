import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav'
import NavDropdown from 'react-bootstrap/esm/NavDropdown'
import { NavItem } from "react-bootstrap";
import { UserContext } from "../../context/userContext";


function HomeNavBar() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);

 

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link><Link to="/friends">Friends</Link></Nav.Link>
                    <Nav.Link><Link to="/challenge">Pantheon</Link></Nav.Link>
                    <Nav.Link><Link to="/review">Create a Review</Link></Nav.Link>
                    </Nav>
                    <Nav>
                    <Navbar.Brand>{user === undefined ? <div></div> : user.name}</Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default HomeNavBar;