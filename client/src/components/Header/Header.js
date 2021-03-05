import React from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import "./Header.css";

function Header() {

    const history = useHistory();


    const buttonStyle = {
        float: "right", 
        marginRight: "15px", 
        background: "#464646",
        borderColor: "#464646"
    }

    return (
        <>
          <Container fluid style={{backgroundColor: "#db3d44", paddingTop: "1%", paddingBottom: "1%"}}>
                <Row>
                    <Col align="center" xs={3}>
                        <h1 onClick={() => history.push({pathname: "/"})} style={{fontFamily: "Abril Fatface", fontSize: "60px", paddingLeft: "5%"}}>Pantheon</h1>
                    </Col>
                    <Col xs={6}>
                        <br></br>
                    </Col>
                    <Col xs={3}>     
                        <h1>LOGO</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => history.push({pathname: "/home"})}>Home</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => history.push({pathname: "/"})}>Create Pantheon</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => history.push({pathname: "/"})}>Friends</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => history.push({pathname: "/"})}>Profile</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => history.push({pathname: "/"})}>Pantheons</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header