import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import "./Header.css";

function Header() {

    const history = useHistory();

    const location = useLocation();

    const [highlightLocation, setHightlightLocation] = useState(null);



    useEffect(() => {

        setHightlightLocation(location.pathname)

    }, [location])


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
                        {highlightLocation === "/home" ?  
                        <Button style={{backgroundColor: "#e77e82", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/home"})}>Home</Button>
                        :  
                        <Button style={{backgroundColor: "#db3d44", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/home"})}>Home</Button>
                        }
                    </Col>
                    <Col>
                        {highlightLocation === "/pantheon" ?  
                        <Button style={{backgroundColor: "#e77e82", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/pantheon"})}>Create Pantheon</Button>
                        :  
                        <Button style={{backgroundColor: "#db3d44", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/pantheon"})}>CreatePantheon</Button>
                        }
                    </Col>
                    <Col>
                        {highlightLocation === "/friends" ?  
                        <Button style={{backgroundColor: "#e77e82", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/friends"})}>Friends</Button>
                        :  
                        <Button style={{backgroundColor: "#db3d44", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/friends"})}>Friends</Button>
                        }
                    </Col>
                    <Col>
                        {highlightLocation === "/profile" ?  
                        <Button style={{backgroundColor: "#e77e82", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/profile"})}>Profile</Button>
                        :  
                        <Button style={{backgroundColor: "#db3d44", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/profile"})}>Profile</Button>
                        }
                    </Col>
                    <Col>
                        {highlightLocation === "/activePantheon" ?  
                        <Button style={{backgroundColor: "#e77e82", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/activePantheon"})}>Pantheons</Button>
                        :  
                        <Button style={{backgroundColor: "#db3d44", width: "100%", border: "none"}} onClick={() => history.push({pathname: "/activePantheon"})}>Pantheons</Button>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header