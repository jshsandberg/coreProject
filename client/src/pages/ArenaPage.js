import React, { useCallback, useState, useContext } from "react";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import Box from "../components/Box/Box";
import TwoMan from "../components/Tounament/TwoMan";
import ChallengeSearchBar from "../components/SearchBar/ChallengeSearchBar";
import SearchMusic from "../components/Arena/SearchMusic";
import { UserContext } from "../context/userContext";
import { SubmitBattle } from "../components/Functions/SubmitBattle";



export default function ArenaPage({ location }) {

    console.log(location)

    const {user, setUser} = useContext(UserContext);
    const [childData, setChildData] = useState([]);


    const getChildData = useCallback(info => {
        setChildData(childData => [...childData, info]);
    }, []);

    const submitBattle = async (item, user, pantheonId, arenaId, battleId) => {
        const battle = await SubmitBattle(item.slice(-1)[0], user, pantheonId, arenaId, battleId);
    }

    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                        <Row>
                            <Col xs={2}>
                                <Button onClick={() => submitBattle(childData, user, location.state.pantheonId, location.state.arenaId, location.state.battle._id)}>Sumbit Challenger</Button>
                            </Col>
                            <Col align="center">
                                <Box text={location.state.category}/>
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                            <Col xs={4}>
                                <Box text={"Choose your song!"} />
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                        </Row>
                        <br></br>
                        {/* Need to make a universal picture for bracketsz, this design is for only two man, should arenas only be allowed to choose songs? */}
                        <Row>
                            <Col>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                                <TwoMan childData={childData} battle={location.state.battle}/>
                            </Col>
                            <Col>
                            
                            </Col>
                            <Col xs={6}>
                                <SearchMusic getChildData={getChildData} />
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                        </Row>
                    </Container>
        </>
    )
};