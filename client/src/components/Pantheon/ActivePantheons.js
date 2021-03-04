import React, { useEffect, useState, useContext } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetActivePantheon } from "../Functions/GetActivePantheon";
import { UserContext } from "../../context/userContext";
import { StartMusic } from "../Functions/StartMusic.js";
import Alert from 'react-bootstrap/Alert'


export default function ActivePantheons() {

    const {user, setUser} = useContext(UserContext);
    const [activePantheons, setActivePantheons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [rerender, setRerender] = useState(0);
    const [alert, setAlert] = useState(null);


    


    useEffect(() => {

        const findActivePantheon = async () => {
            const foundActivePantheon = await GetActivePantheon(user.username);
            await setActivePantheons(foundActivePantheon);
            await setIsLoading(false)
        };

        findActivePantheon();

    }, [rerender]);

    return (
        <>
            {isLoading ? 
                <>
                
                </>
            :
            activePantheons.length === 0 ?
            
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        <Col align="center">
                            <h1>You have not created any Pantheons</h1>
                        </Col>
                    </Row>
                </Container>
            :
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        {activePantheons.map((item, i) => {
                            return (
                                <Col align="center" key={i}>
                                    <h3>{item.category}</h3>
                                    <h4>{item.creator}</h4>
                                    <h2>{item.acceptedPlayers.length} / {item.players.length}</h2>
                                    {item.acceptedPlayers.length === item.players.length ? <Button onClick={ async () => { await StartMusic(item); await setRerender(Math.random())}}>Start</Button> : <Button onClick={() => setAlert("Everyone must have accepted the invite")} style={{backgroundColor: "gray", borderColor: "gray"}}>Start</Button>}
                                </Col>
                            )
                        })}
                    </Row>
                    <br></br>
                    <Row>
                        <Col align="center">
                            {alert && (
                                <>
                                    <Alert variant="danger" onClick={() => setAlert(null)} dismissible>
                                        <Alert.Heading>{alert}</Alert.Heading>
                                    </Alert>
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}