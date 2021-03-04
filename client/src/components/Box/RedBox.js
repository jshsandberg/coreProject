import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


export default function RedBox({ text, number }) {


    return (
        <>
            {number !== undefined ?
                <>
                    <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#db3d44"}}>
                        <Row>
                            <Col xs={10}>
                                <h1>{text}</h1>
                            </Col>
                            <Col xs={2}>
                                <h2 style={{paddingTop: "10%"}}>{number}</h2>
                            </Col>
                        </Row>
                    </Container>
                </>
            :
                <>
                    <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "#db3d44"}}>
                        <Row>
                            <Col>
                                <h1>{text}</h1>
                            </Col>
                        </Row>
                    </Container>
                </>
            }
        </>

    )
};