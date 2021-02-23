import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useHistory } from "react-router-dom";


export default function PantheonBox() {


    const history = useHistory();

    return (
        <>
            <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                <Row>
                    <Col align="center" onClick={() => history.push({pathname: "/activePantheon"})}>
                          <h1>Pantheon</h1>
                    </Col>        
                </Row>
            </Container> 
        </>
    )
};