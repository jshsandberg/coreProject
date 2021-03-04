import React, { useState, useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap";



export default function FormComponent({ getArenaData }) {

    

    


    return (
        <>
            <Form>
                <Row>
                    <Col xs={1}>
                    
                    </Col>
                    <Col>
                        <Form.Control name="category" onChange={(e) => getArenaData(e.target.name, e.target.value)} placeholder="Category for Competition" />
                    </Col>
                    <Col xs={2}>
                    
                    </Col>
                </Row>
            </Form>
        </>
    )
}