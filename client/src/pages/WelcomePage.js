import React from "react";
import { Link } from "react-router-dom";
// import SideNavBar from "../components/NavBar/SideNav";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
// import Corey from "../utils/Media/Corey.jpg";
// import DropdownButton from 'react-bootstrap/esm/DropdownButton';
// import Dropdown from 'react-bootstrap/esm/Dropdown'
// import Spotify from "../components/Spotify/Spotify";
import ReactPlayer from 'react-player';
import VideoFile from "../utils/Media/VideoFile.mp4";
import WelcomeBox from "../components/WelcomeBox/WelcomeBox";
import Charcoal from "../utils/Media/Charcoal.jpg";
import Footer from "../components/Footer/Footer";
import HighestRateMedia from "../components/Media/HighestRatedMedia";
import WelcomeHeader from "../components/Header/WelcomeHeader";

import "./WelcomePage.css";


function WelcomePage() {

    // const [spotifySelector, setSpotifySelector] = useState("new-releases");
    // const [spotifySearchTitle, setSpotifySearchTitle] = useState("New Releases")

    // const bottomBorder = {
    //     borderBottom: "double",
    //     borderColor: "#db3d44"
    // }


    const buttonStyle = {
        float: "right", 
        marginRight: "15px", 
        background: "#464646",
        borderColor: "#464646"
    }

    const textOne = {
        text: "Choose the perfect song and compete with others to see which song deserves to be put in the Pantheon",
        title: "Competition"
    };

    const textTwo = {
        text: "Create reviews, Showcase the songs that got you in the Pantheon, and brag to friends on who has better music taste",
        title: "Social"
    };

    const textThree = {
        text: "Using a Spotify API, you can choose any song to help you conquer the competition and make the path to the Pantheon easier",
        title: "Browse"
    }

    return (
       
        <div style={{backgroundImage: `url(${Charcoal})`}}> 
           <WelcomeHeader />
            <Container fluid>
                <Row style={{paddingBottom: "10%"}}>
                </Row>
                <Row>
                    <Col xs={1}>
                    
                    </Col>
                    <Col style={{paddingTop: "5%"}} xs={4} align="center">
                        <div style={{borderColor: "#db3d44", borderStyle: "solid", borderWidth: "6px", paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px", paddingBottom: "10px"}}>
                            <h1 style={{color: "white"}}>Head to Head competitions to see which songs are good and which suck</h1>
                        </div>
                        <br></br>
                            <Button style={{background: "#db3d44", borderColor: "#db3d44"}}>Get Started</Button>
                    </Col>
                    <Col xs={6}>
                        <ReactPlayer 
                            style={{borderColor: "#db3d44", borderStyle: "solid", borderWidth: "8px", paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px", paddingBottom: "10px"}}
                            url={VideoFile}
                            playing={true}
                            muted={true}
                            loop={true}
                            width="100%"
                            height="auto"
                        />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <WelcomeBox text={textOne}/>
                    </Col>
                    <Col>
                        <WelcomeBox text={textTwo} />
                    </Col>
                    <Col>
                        <WelcomeBox text={textThree}/>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <HighestRateMedia />
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <Footer />
       
        </div>
    )
};

export default WelcomePage;