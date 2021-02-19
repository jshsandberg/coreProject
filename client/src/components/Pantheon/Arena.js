import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SavePatheon } from "../Functions/SavePantheon";

export default function Arena({ data, arr }) {

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
                        <Button onClick={ async () => await SavePatheon({data: data, players: arr})}>Start</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};