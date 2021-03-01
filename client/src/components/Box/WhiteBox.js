import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { AcceptPantheon } from "../Functions/AcceptPantheon";
import Button from 'react-bootstrap/Button';


export default function WhiteBox({ data, user }) {


console.log(data, user)


    return (
        <>
            {data.length > 0 &&
                <>
                    <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                        <Row>
                            {data.map((item, i) => {
                                return (
                                    <Col key ={i} align="center">
                                        <h2>{item.creator}</h2>
                                        <h3>{item.category}</h3>
                                        <Button onClick={() => AcceptPantheon(item, user.username) }>Accept Challenge</Button>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </>
                
            }
       
        </>
    )
}