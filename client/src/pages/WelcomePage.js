import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNavBar from "../components/NavBar/SideNav";
import SearchBar from "../components/SearchBar/SearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Corey from "../utils/Media/Corey.jpg";
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown from 'react-bootstrap/esm/Dropdown'
import Spotify from "../components/Spotify/Spotify";
import ReactPlayer from 'react-player';
import VideoFile from "../utils/Media/VideoFile.mp4";

import "./WelcomePage.css";


function WelcomePage() {

    const [spotifySelector, setSpotifySelector] = useState("new-releases");
    const [spotifySearchTitle, setSpotifySearchTitle] = useState("New Releases")

    const bottomBorder = {
        borderBottom: "double",
        borderColor: "#db3d44"
    }


    const buttonStyle = {
        float: "right", 
        marginRight: "15px", 
        background: "#db3d44",
        borderColor: "#db3d44"
    }

    return (
        <>
        {/* Side nav bar needs to be invisible when not clicked upon */}
            {/* <SideNavBar /> */}
            {/* <Container fluid>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                        <br></br>
                        <SearchBar />
                       
                    </Col>
                    <Col>
                        <br></br>
                        <Link to="/login"><Button style={buttonStyle}>Login</Button></Link>
                        <Link to="/signup"><Button style={buttonStyle}>Sign Up</Button></Link>
                    </Col>
                </Row>
            </Container> */}
            {/* <br></br>
            <br></br> */}
       

                        <ReactPlayer 
                        style={{position: "absolute"}}
                        url={VideoFile}
                        playing={true}
                        muted={true}
                        loop={true}
                        width="100%"
                        height="auto"
                        />
                    
                    {/* </Col>
                    <Col style={{paddingTop: "2%"}}>
                        <h2>Our Website Suck</h2>
                        <h6>But please, give it a shot why dont ya?</h6>
                        <br></br>
                        <Button style={{background: "#db3d44", borderColor: "#db3d44"}}>Creat a free account</Button>
                    </Col>
                    <Col>
                        <img style={{width: "100%"}} src={Corey} alt={Corey} />
                    </Col>
                    <Col> */}
                    
              
                       <Container fluid>
                <Row>
    
                    <Col style={{position: "fixed", paddingLeft: "30%", paddingRight: "30%"}}>
                        <br></br>
                        {/* Lock to the top scrool down makes it show up */}
                        <SearchBar />
                        <br></br>
                        <Link to="/login"><Button style={buttonStyle}>Login</Button></Link>
                        <Link to="/signup"><Button style={buttonStyle}>Sign Up</Button></Link>
                    </Col>
                </Row>
            </Container>
      
            <Container style={{paddingTop: "20%", paddingBottom: "20%"}}>
                <Row>
                    <Col align="center">
                        {/* <h1 style={{backgroundColor: "white"}}>Welcome to COrey website, made by josh and borno</h1> */}
                        <Button>Get Started</Button>
                    </Col>
                </Row>
            </Container>
            {/*<Container fluid>
                 <br></br> 
            <Row style={bottomBorder}>
                <h1 style={{paddingLeft: "20px"}}>Music</h1>
                <DropdownButton style={{marginTop: "3px", marginLeft: "15px"}} id="dropdown-basic-button" title={spotifySearchTitle}>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("New Releases"); setSpotifySelector("new-releases")}}>New Releases</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Top Lists"); setSpotifySelector("toplists")}}>Top Lists</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Hip Hop"); setSpotifySelector("hiphop")}}>Hip Hop</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Pop"); setSpotifySelector("pop")}}>Pop</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Country"); setSpotifySelector("country")}}>Country</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Rock"); setSpotifySelector("rock")}}>Rock</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Gaming"); setSpotifySelector("gaming")}}>Gaming</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("EDM / Dance"); setSpotifySelector("edm_dance")}}>EDM / Dance</Dropdown.Item> */}
                    {/* <Dropdown.Item onClick={() => {setSpotifySearchTitle("Alternative"); setSpotifySelector("alternative")}}>Alternative</Dropdown.Item> */}
                {/* </DropdownButton>
            </Row>
            <br></br>
            <Spotify spotifySelector={spotifySelector} />
            </Container> */}
        </>
    )
};

export default WelcomePage;