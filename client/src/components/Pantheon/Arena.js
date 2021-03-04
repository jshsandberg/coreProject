import React, { useContext, useState }  from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SavePatheon } from "../Functions/SavePantheon";
import { UserContext } from "../../context/userContext";
import Alert from 'react-bootstrap/Alert'



export default function Arena({ data, arr }) {

    const {user, setUser} = useContext(UserContext);
    const [alert, setAlert] = useState(null);


    const checkForNull = async () => {
        if (data.category === null || arr.length !== 3 ) {
            setAlert("There was an error. Please make sure all input are filled and you have 4 players, including yourself, invited.")
        } else {
           const savedPantheon = await SavePatheon({data: data, creator: user.username, players: arr});
           await setAlert(savedPantheon)
        };
    };


    return (
        <>
            <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                <Row>
                    <Col>
                        <h2>Category: {data.category}</h2>
                    </Col>
                    <Col>
                        <h3>Number of Players: {arr.length + 1}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <h3>Invites:</h3>
                    </Col>
                    <Col xs={1}>
                        <h3>{user.username}</h3>
                    </Col>
                    {arr.map((item, i) => {
                        return (
                            <Col xs={1}>
                                <h3>{item}</h3>
                            </Col>
                        )
                    })}
                    <Col align="center">
                        <Button onClick={ async () => checkForNull()}>Start</Button>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container>
                <Row>
                    <Col>
                    {alert && (
                        <>
                            <Alert variant="dark" onClick={() => setAlert(null)} dismissible>
                                <Alert.Heading>{alert}</Alert.Heading>
                            </Alert>
                        </>
                    )}
                    </Col>
                </Row>
            </Container>
     
        </>
    )
};