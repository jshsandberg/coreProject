import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import Footer from "../components/Footer/Footer";
import SpotifyPlayer from "react-spotify-player";
import { TallyResults } from "../components/Functions/TallyResults";
import { UserContext } from "../context/userContext";
import { CompletePantheon } from "../components/Functions/CompletePantheon"



export default function FinalResultsPage({ location }) {

    const {user, setUser} = useContext(UserContext);


    const [battleOne, setBattleOne] = useState({
        fighterOne: null,
        fighterTwo: null
    });

    const [battleTwo, setBattleTwo] = useState({
        fighterOne: null,
        fighterTwo: null
    });

    useEffect(() => {

        const findResults = async () => {


            const talliedResultsOne = await TallyResults(location.state.battle.battleOne);
            const talliedResultsTwo = await TallyResults(location.state.battle.battleTwo);


            await setBattleOne(talliedResultsOne);

            await setBattleTwo(talliedResultsTwo)
        };

        findResults()

    }, []);

    const checkForCreator = async (user) => {
        if (location.state.creator === user.username) {
            const CompletedPantheon = await CompletePantheon(location.state._id)
        } else {
            console.log("not the creator")
        }
    } 




    return (
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
                                {battleOne.fighterOne === true ? <h3>WINNER</h3> : <h3>Loser</h3>}
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
                                {battleOne.fighterOne === false ? <h3>WINNER</h3> : <h3>Loser</h3>}
                            </Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Button onClick={() => checkForCreator(user)}>Complete Pantheon</Button>
                    </Container>
                  </Col>
                  <Col align="center" xs={4}>
                      <Row>
                          <Col>
                            {location.state.battle.battleOne.winner !== null ? <h3>There was a tie in the First Battle</h3> : null}
                            {location.state.battle.battleTwo.winner !== null ? <h3>There was a tie in the Second Battle</h3> : null}
                            {location.state.finalBattle.winner !== null ? <h3>There was a tie in the Final Battle</h3> : null}

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
                            {battleOne.fighterOne === true ? <h3>{location.state.battle.battleOne.fighterOne.username}</h3> : <h3>{location.state.battle.battleOne.fighterTwo.username}</h3>}
                            {battleOne.fighterOne === true ? <SpotifyPlayer uri={location.state.battle.battleOne.fighterOne.music.uri} /> : <SpotifyPlayer uri={location.state.battle.battleOne.fighterTwo.music.uri}/>}
                            <br></br>
                            <h2>VS</h2>
                            <br></br>
                            {battleTwo.fighterOne === true ? <h3>{location.state.battle.battleTwo.fighterOne.username}</h3> : <h3>{location.state.battle.battleTwo.fighterOne.username}</h3>}
                            {battleTwo.fighterOne === true ? <SpotifyPlayer uri={location.state.battle.battleTwo.fighterOne.music.uri} /> : <SpotifyPlayer uri={location.state.battle.battleTwo.fighterTwo.music.uri}/>}
                        </Col>
                      </Row>
                  
                  </Col>
                  <Col align="center" xs={4}>
                  <Container>
                        <Row>
                            <Col>
                                <h3>{location.state.battle.battleTwo.fighterOne.username}</h3>
                                <br></br>
                                {battleTwo.fighterOne === true ? <h3>WINNER</h3> : <h3>Loser</h3>}
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
                                {battleTwo.fighterOne === false ? <h3>WINNER</h3> : <h3>Loser</h3>}
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
    )
}