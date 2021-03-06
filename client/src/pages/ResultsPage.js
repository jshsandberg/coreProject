import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import Footer from "../components/Footer/Footer";
import SpotifyPlayer from "react-spotify-player";
import { TallyResults } from "../components/Functions/TallyResults";
import { CreateFinalBattle } from "../components/Functions/CreateFinalBattle";
import { UserContext } from "../context/userContext";



export default function ResultsPage({ location }) {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const findResults = async () => {
            await CreateFinalBattle(location.state._id)
            await setIsLoading(false)
        };

        if (user === null || user === undefined) {
            history.push({pathname: "/"})
        } else {
            findResults()
        }

    }, []);

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
                    </Container>
                  </Col>
                  <Col align="center" xs={4}>
                      <Row>
                          <Col>
                            {location.state.battle.battleOne.winner !== null ? <h3>There was a tie in the First Battle</h3> : null}
                            {location.state.battle.battleTwo.winner !== null ? <h3>There was a tie in the Second Battle</h3> : null}
                          </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
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