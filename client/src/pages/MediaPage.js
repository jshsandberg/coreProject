import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SideNavBar from "../components/NavBar/SideNav";
import SearchBar from "../components/SearchBar/SearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Header from "../components/Header/Header";
import Charcoal from "../utils/Media/Charcoal.jpg";
// import Corey from "../utils/Media/Corey.jpg";
// import DropdownButton from 'react-bootstrap/esm/DropdownButton';
// import Dropdown from 'react-bootstrap/esm/Dropdown'
// import Spotify from "../components/Spotify/Spotify";
import { Track } from "../components/Media/Track";
import Album from "../components/Media/Album";
import Artist from "../components/Media/Artist";
import { UserContext } from "../context/userContext";


function MediaPage(props) {

    const {user, setUser} = useContext(UserContext);

    console.log(user)

    const buttonStyle = {
        float: "right", 
        marginRight: "15px", 
        background: "#db3d44",
        borderColor: "#db3d44"
    }

    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Container fluid>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                        <br></br>
                        <SearchBar color={"red"} />
                       
                    </Col>
                    <Col>
                        <br></br>
                        {user === undefined &&
                            <>
                                <Link to="/login"><Button style={buttonStyle}>Login</Button></Link>
                                <Link to="/signup"><Button style={buttonStyle}>Sign Up</Button></Link>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container>
                <Track media={props.location.state} getChildData={null} />
                <Album media={props.location.state} />
                <Artist media={props.location.state} />
            </Container>
            </Container>
        </>
    )
};

export default MediaPage