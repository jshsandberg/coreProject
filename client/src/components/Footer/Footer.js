import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Footer() {

    return (
        <>
            <Container style={{backgroundColor: "#db3d44", paddingTop: "2%", paddingBottom: "2%"}} fluid>
                <Row>
                    <Col>
                        <h3>(c) Pantheon. Creator: Josh Sandberg</h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}