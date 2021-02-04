import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export const Result = (function Result({ childData }) {


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src={childData[0] ? childData[0].image : null}/>
                    </Col>
                    <Col>
                        <img src={childData[1] ? childData[1].image : null}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
})