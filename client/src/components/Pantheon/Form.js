import React, { useState, useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap";



export default function FormComponent({ getArenaData }) {

    

    


    return (
        <>
            <Form>
                <Row>
                    <Col xs={2}>
                    
                    </Col>
                    <Col>
                        <h3 style={{color: "white"}}>Category for the Competition:</h3>
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