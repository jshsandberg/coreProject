import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import "./Header.css";

function Header() {

    const buttonStyle = {
        float: "right", 
        marginRight: "15px", 
        background: "#464646",
        borderColor: "#464646"
    }

    return (
        <>
          <Container fluid style={{backgroundColor: "#db3d44", opacity: 0.7, position: "fixed", zIndex: "10"}}>
                <Row>
                    <Col style={{paddingTop: "6%"}}>
                        
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{position: "fixed", top: "2%", zIndex: "10"}}>
                <Row>
                    <Col align="center" xs={3}>
                    <h1 style={{fontFamily: "Abril Fatface", fontSize: "60px", paddingLeft: "5%"}}>Pantheon</h1>

                    </Col>
                    <Col xs={6}>
                        <br></br>
                        <SearchBar />
                    </Col>
                    <Col xs={3}>     
                        <br></br>                
                        <Link to="/login"><Button style={buttonStyle}>Login</Button></Link>
                        <Link to="/signup"><Button style={buttonStyle}>Sign Up</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header