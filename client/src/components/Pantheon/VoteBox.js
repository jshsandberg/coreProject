import React, { useEffect, useState, useContext } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetVotingArena } from "../Functions/GetVotingArena";
import { UserContext } from "../../context/userContext";


export default function VoteBox() {

    const {user, setUser} = useContext(UserContext);
    const [votingArr, setVotingArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);


    useEffect(() => {
        
        const votingArena = async () => {
            const foundVotingArena = await GetVotingArena(user);
            await setVotingArr(foundVotingArena);
            await setIsLoading(false)
        };

        votingArena();
    }, [])

    return (
        <>
            {!isLoading &&
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        {votingArr.map((item, i) => {
                            return (
                                <>
                                    <Col align="center">
                                        <h3>{item.fighter1.username} vs {item.fighter2.username}</h3>
                                        <Button>Vote</Button>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
                </Container>
            }
        </>
    )
};