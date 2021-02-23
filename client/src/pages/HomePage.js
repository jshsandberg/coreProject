import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeNavbar from "../components/NavBar/HomeNavBar";
import VideoGame from "../components/VideoGame/VideoGame";
import NoAccessModal from "../components/Modal/NoAccessModal";
import SearchBar from "../components/SearchBar/SearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import axios from "axios";
import API from "../utils/API";
import { UserContext } from "../context/userContext";
import Box from "../components/Box/Box";
import Charcoal from "../utils/Media/Charcoal.jpg";
import WhiteBox from "../components/Box/WhiteBox";
import Footer from "../components/Footer/Footer";
import { GetPantheon } from "../components/Functions/GetPantheon";
import PantheonBox from "../components/Box/PantheonBox";

// import Alert from 'react-bootstrap/Alert'
// import Button from 'react-bootstrap/Button'



  
  

function HomePage(props) {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);
    const [pantheonShow, setPantheonShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [pantheonData, setPantheonData] = useState([]);

    useEffect(() => {

        const checkPantheon = async () => {
            if (user === null || user === undefined) {
                history.push({pathname: "/"})
            } else {
                const gotPantheon = await GetPantheon(user.username);
                await setPantheonData(gotPantheon)
                await setIsLoading(false)
            }
        }
        checkPantheon();
    }, []);

    const jwt = require("jsonwebtoken");

    const black = {
        backgroundColor: "#464646", 
        borderColor: "#464646"
    }

    const signOut = () => {
        window.localStorage.removeItem("auth-token");
        history.push({pathname: "/"})
    }

    return (
        <>
            {!isLoading &&
            <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Row>
                    <Col>
                    <br></br>
                        <SearchBar />
                    </Col>
                    <Col>
                    <br></br>
                    <Row>
                        <Col>
                            <h3>{user.name}</h3>
                        </Col>
                        <Col>
                            <Button style={black} onClick={() => signOut()}>Sign Out</Button>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <Container>
                    <PantheonBox />
                </Container>
                <br></br>
                <Container>
                    <Row>
                        <Col onClick={() => history.push({pathname: "/pantheon"})}>
                            <Box text="Create Pantheon" />
                        </Col>
                        <Col onClick={() => history.push({pathname: "/profile"})}>
                            <Box text="Profile Settings" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col onClick={() => history.push({pathname: "/friends"})}>
                            <Box text="Friends" />
                        </Col>
                        <Col onClick={() => pantheonShow ? setPantheonShow(false) : setPantheonShow(true)}>
                            <Box text="Pantheon Invites" number={pantheonData.length} />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                {pantheonShow &&
                    <Container fluid>
                        <Row>
                            <Col>
                                <WhiteBox data={pantheonData} user={user} />
                            </Col>
                        </Row>
                    </Container>
                }
            </Container>
            <Footer />
            </>
            }
        </>
    )
}

export default HomePage;