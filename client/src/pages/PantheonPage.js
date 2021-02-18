import React, { useState, useCallback } from "react";
import Header from "../components/Header/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import Charcoal from "../utils/Media/Charcoal.jpg";
import FormComponent from "../components/Pantheon/Form";
import AddingFriends from "../components/Pantheon/AddingFriends";
import Arena from "../components/Pantheon/Arena";
import Footer from "../components/Footer/Footer";



export default function PantheonPage() {

    const [arenaInfo, setArenaInfo] = useState({
        numberPlayers: 1,
        category: null
    });
    const [arenaArr, setArenaArr] = useState([]);

    const getArenaArr = useCallback((data) => {
        setArenaArr(arenaInfo => ([
            ...arenaInfo, data
        ]))
    }, []);

    const getArenaData = useCallback((name, data) => {
        setArenaInfo(arenaInfo => ({
            ...arenaInfo, [name]: data
        }))
    }, []);


    
    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <Container fluid>
                    <Row>
                        <Col>
                            <FormComponent getArenaData={getArenaData} />
                        </Col>
                        <Col>
                            <AddingFriends getArenaArr={getArenaArr} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Arena data={arenaInfo} arr={arenaArr} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    )
};