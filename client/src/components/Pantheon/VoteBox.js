import React, { useEffect, useState, useContext } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetVotingArena } from "../Functions/GetVotingArena";
import { UserContext } from "../../context/userContext";


export default function VoteBox() {

    const {user, setUser} = useContext(UserContext);


    useEffect(() => {
        
        const votingArena = async () => {
            const foundVotingArena = await GetVotingArena(user);
        };

        votingArena();
    }, [])

    return (
        <>
           <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        <Col>
                            <h2>Voting</h2>
                        </Col>
                    </Row>
                </Container>
        </>
    )
};