import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SavePatheon } from "../Functions/SavePantheon";

export default function Arena({ data, arr }) {

    const [pantheon, setPantheon] = useState({
        data: null,
        players: []
    });

    

    return (
        <>
            <Container fluid style={{background: "white"}}>
                <Row>
                    <Col>
                        <h2>{data.category}</h2>
                    </Col>
                    <Col>
                        <h3>{data.numberPlayers}</h3>
                    </Col>
                </Row>
                <Row>
                    {arr.map((item, i) => {
                        return (
                            <Col xs={1}>
                                <h3>{item}</h3>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col>
                        <Button onClick={ async () => {await setPantheon({data: data, players: arr}); await SavePatheon(pantheon)}}>Start</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};