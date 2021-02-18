import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Arena({ data }) {

    console.log(data)

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
                    <h3>friends playing</h3>
                </Row>
                <Row>
                    <Col>
                        <Button>Start</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
};