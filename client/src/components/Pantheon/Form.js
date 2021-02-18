import React, { useState, useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap";



export default function FormComponent({ getArenaData }) {

    const [category, setCategory] = useState("");
    const [numOfPlayers, setNumOfPlayers] = useState(0);

    


    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Control name="category" onChange={(e) => getArenaData(e.target.name, e.target.value)} placeholder="Category for Competition" />
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Amount of Players</Form.Label>
                            <Form.Control as="select" name="numberPlayers" onChange={(e) => getArenaData(e.target.name, e.target.value)} custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            </Form.Control>
                        </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Form>
        </>
    )
}