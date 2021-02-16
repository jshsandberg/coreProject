import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeNavbar from "../components/NavBar/HomeNavBar";
import VideoGame from "../components/VideoGame/VideoGame";
import NoAccessModal from "../components/Modal/NoAccessModal";
import SearchBar from "../components/SearchBar/SearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from "axios";
import API from "../utils/API";
import { UserContext } from "../context/userContext";
import Box from "../components/Box/Box";
// import Alert from 'react-bootstrap/Alert'
// import Button from 'react-bootstrap/Button'



  
  

function HomePage(props) {



    const {user, setUser} = useContext(UserContext);
    const [token, setToken] = useState();
    const [modalShow, setModalShow] = useState(false);

    const jwt = require("jsonwebtoken");






    const bottomBorder = {
        borderBottom: "double"
    }

    return (
        <>
            <Header />
            <HomeNavbar user = {props} />
            <SearchBar />
            <Container>
                <Row>
                    <Col>
                        <Box text="Pantheon" />
                    </Col>
                    <Col>
                        <Box text="Profile Settings" />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default HomePage;