import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import Footer from "../components/Footer/Footer";
import SpotifyPlayer from "react-spotify-player";
import { UserContext } from "../context/userContext";
import { CompletePantheon } from "../components/Functions/CompletePantheon";
import Alert from 'react-bootstrap/Alert';




export default function FinalResultsPage({ location }) {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);

    const [alert, setAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        if (user === null || user === undefined) {
            history.push({pathname: "/"})
        } else { 
            setIsLoading(false)
        }

    }, [])



    const checkForCreator = async (user) => {
        if (location.state.creator === user.username) {
            const CompletedPantheon = await CompletePantheon(location.state._id);
            await setAlert(CompletedPantheon)
        } else {
            setAlert("Only the creator of the Pantheon can complete it")
        }
    } 




    return (
        <>
         {!isLoading &&
            <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <Row>
                  <Col align="center" xs={4}>
                    <Container>
                        <Row>
                            <Col>
                                <SpotifyPlayer uri={location.state.battle.battleOne.fighterOne.music.uri} />
                            </Col>
                            <Col>
                                <h3>{location.state.battle.battleOne.fighterOne.username}</h3>
                                <br></br>
                                {location.state.battle.battleOne.winner === location.state.battle.battleOne.fighterOne.username ? <h3>WINNER</h3> : <h3>Loser</h3>}
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <SpotifyPlayer uri={location.state.battle.battleOne.fighterTwo.music.uri} />
                            </Col>
                            <Col>
                                <h3>{location.state.battle.battleOne.fighterTwo.username}</h3>
                                <br></br>
                                {location.state.battle.battleOne.winner === location.state.battle.battleOne.fighterTwo.username ? <h3>WINNER</h3> : <h3>Loser</h3>}
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Container>
                  </Col>
                  <Col align="center" xs={4}>
                      <Row>
                          <Col>
                            <Button onClick={() => checkForCreator(user)}>Complete Pantheon</Button>
                            {alert && (
                                    <>
                                        <Alert variant="danger" onClick={() => setAlert(null)} dismissible>
                                            <Alert.Heading>{alert}</Alert.Heading>             
                                        </Alert>
                                    </>
                                )}
                          </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                            <br></br>                        
                            <br></br>
                            {location.state.finalBattle.winner !== null ? <h1>Winner of Pantheon is {location.state.finalBattle.winner}</h1> : location.state.finalBattle.votesForFighterOne.length > location.state.finalBattle.votesForFighterTwo.length ? <h1>Winner of Pantheon is {location.state.finalBattle.fighterOne.username }</h1> : <h1>Winner of Pantheon is {location.state.finalBattle.fighterTwo.username }</h1>}
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>{location.state.battle.battleOne.winner}</h3>
                            {/* {battleOne.fighterOne === true ? <SpotifyPlayer uri={location.state.battle.battleOne.fighterOne.music.uri} /> : <SpotifyPlayer uri={location.state.battle.battleOne.fighterTwo.music.uri}/>} */}
                            <br></br>
                            <h2>VS</h2>
                            <br></br>
                            <h3>{location.state.battle.battleTwo.winner}</h3>
                            {/* {battleTwo.fighterOne === true ? <SpotifyPlayer uri={location.state.battle.battleTwo.fighterOne.music.uri} /> : <SpotifyPlayer uri={location.state.battle.battleTwo.fighterTwo.music.uri}/>} */}
                        </Col>
                      </Row>
                  
                  </Col>
                  <Col align="center" xs={4}>
                  <Container>
                        <Row>
                            <Col>
                                <h3>{location.state.battle.battleTwo.fighterOne.username}</h3>
                                <br></br>
                                {location.state.battle.battleTwo.winner === location.state.battle.battleTwo.fighterOne.username ? <h3>WINNER</h3> : <h3>Loser</h3>}
                            </Col>
                            <Col>
                                <SpotifyPlayer uri={location.state.battle.battleTwo.fighterOne.music.uri} />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <h3>{location.state.battle.battleTwo.fighterTwo.username}</h3>
                                <br></br>
                                {location.state.battle.battleTwo.winner === location.state.battle.battleTwo.fighterTwo.username ? <h3>WINNER</h3> : <h3>Loser</h3>}
                            </Col>
                            <Col>
                                <SpotifyPlayer uri={location.state.battle.battleTwo.fighterTwo.music.uri} />
                            </Col>
                        </Row>
                    </Container>
                  </Col>
                </Row>
            </Container>
            <Footer />
        </>
}
        </>
    )
}