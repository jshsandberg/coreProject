import React, { useCallback, useState, useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import RedBox from "../components/Box/RedBox";
import TwoMan from "../components/Tounament/TwoMan";
import ChallengeSearchBar from "../components/SearchBar/ChallengeSearchBar";
import SearchMusic from "../components/Arena/SearchMusic";
import { UserContext } from "../context/userContext";
import { SubmitFinalBattle } from "../components/Functions/SubmitFinalBattle";
import { FindBattle } from "../components/Functions/FindBattle";



export default function FinalArenaPage({ location }) {


    const {user, setUser} = useContext(UserContext);
    const [battle, setBattle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [childData, setChildData] = useState([]);

    useEffect(() => {

        console.log(location.state)

        // const promise = async () => {
        //     const check = await FindBattle(user.username, location.state);
        //     await setBattle(check);
        //     await setIsLoading(false);
        // };

        // promise()

        setIsLoading(false);


    }, [])


    const getChildData = useCallback(info => {
        setChildData(childData => [...childData, info]);
    }, []);

    const submitBattle = async (item, user, pantheonId) => {
        const battle = await SubmitFinalBattle(item.slice(-1)[0], user, pantheonId);
    }

    return (
        <>
            {!isLoading &&
                <>
                    <Header />
                    <Container fluid style={{backgroundImage: `url(${Charcoal})`, position: "fixed", top: "18%", height: "100%"}}>
                        <br></br>
                        <Row>
                            <Col xs={2}>
                                <Button onClick={() => submitBattle(childData, user, location.state._id)}>Sumbit Challenger</Button>
                            </Col>
                            <Col align="center">
                                <RedBox text={location.state.category}/>
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                            <Col xs={4}>
                                <RedBox text={"Choose your song!"} />
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

                                <TwoMan childData={childData} battle={location.state.finalBattle}/>
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
            }
        </>
    )
};