import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function WelcomeBox({ text }) {

    return (
        <>
            <Container style={{borderColor: "#db3d44", borderStyle: "solid", borderWidth: "6px", paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px", paddingBottom: "10px"}}>
                <Row>
                    <Col>
                        <h1 style={{color: "white"}}>{text.title}</h1>      
                        <h3 style={{color: "white"}}>{text.text}</h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}