import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Charcoal from "../utils/Media/Charcoal.jpg";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import SpotifyPlayer from "react-spotify-player";
import Footer from "../components/Footer/Footer";
import { SaveVotes } from "../components/Functions/SaveVotes";
import { UserContext } from "../context/userContext";




export default function VotingPage({ location }) {

    const {user, setUser} = useContext(UserContext);


    console.log(location)

    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col align="center">
                                    <SpotifyPlayer uri={location.state.state.fighterOne.music.uri}/>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col align="center">
                                    <Button onClick={() => SaveVotes(location.state.state.fighterOne, location.state, user.username)}>Vote for {location.state.state.fighterOne.username}</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col align="center">
                                    <SpotifyPlayer uri={location.state.state.fighterTwo.music.uri}/>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col align="center">
                                    <Button onClick={() => SaveVotes(location.state.state.fighterTwo, location.state, user.username)}>Vote for {location.state.state.fighterTwo.username}</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <br></br>

            </Container>
            <Footer />
        </>
    )
}