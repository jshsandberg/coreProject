import React, { useContext, useState } from "react";
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
import { SaveFinalVotes } from "../components/Functions/SaveFinalVotes";
import Alert from 'react-bootstrap/Alert';





export default function VotingPage({ location }) {

    const {user, setUser} = useContext(UserContext);

    const [alert, setAlert] = useState(null)

    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <br></br>
                <Row>
                    {alert && (
                        <>
                            <Alert variant="danger" onClick={() => setAlert(null)} dismissible>
                                <Alert.Heading>{alert}</Alert.Heading>
                            </Alert>
                        </>
                    )}
                </Row>
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
                                    {location.state.final === true ? <Button onClick={async () => {const finalVote = await SaveFinalVotes(location.state.state.fighterOne.username, location.state.pantheon, user.username); await setAlert(finalVote)}}>Vote for {location.state.state.fighterOne.username}</Button> : <Button onClick={async () => {const voteFighterOne = await SaveVotes(location.state.state.fighterOne, location.state, user.username); await setAlert(voteFighterOne)}}>Vote for {location.state.state.fighterOne.username}</Button>}
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
                                {location.state.final === true ? <Button onClick={async () => {const finalVote = await SaveFinalVotes(location.state.state.fighterTwo.username, location.state.pantheon, user.username); await setAlert(finalVote)}}>Vote for {location.state.state.fighterTwo.username}</Button> : <Button onClick={async () => {const voteFighterTwo = await SaveVotes(location.state.state.fighterTwo, location.state, user.username); await setAlert(voteFighterTwo)}}>Vote for {location.state.state.fighterTwo.username}</Button>}
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