import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { UserContext } from "../../context/userContext";
import { saveUserData } from "../Functions/SaveUser";


function SignUp() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);

    const [values, setValues] = useState(undefined);
    const [error, setError] = useState(null);


    function handleChange(event) {
		event.persist();
        const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	}

    const saveUser = async (values) => {
            const savedUser = await saveUserData(values);
            if (typeof savedUser === "string") {
                setError(savedUser);
            } else {
                await setUser(savedUser);
                await history.push({pathname: "/home"});
            }

    }

    return (
        <>           
            <Container fluid style={{paddingTop: "6%"}}>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                        <h3 style={{float: "left", color: "white"}}>Sign Up</h3>
                        <br></br>
                        <hr style={{height: "3px", backgroundColor: "#db3d44"}}></hr>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                    </Col>
                    <Col> 
                    {error && (
                        <>
                            <Alert variant="danger" onClick={() => setError(null)} dismissible>
                                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                    <p>
                                        {error}
                                    </p>
                            </Alert>
                        </>
                    )}
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control onChange={handleChange} name="firstname" placeholder="First Name" />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <Form.Control onChange={handleChange} name="lastname" placeholder="Last Name" />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col>
                                    <Form.Control onChange={handleChange} name="email" placeholder="Email" />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
                <br></br>
                <Row>
                    <Col xs={4}></Col>
                    <Col>
                        <Form.Control onChange={handleChange} name="username" placeholder="Username" />
                    </Col>
                    <Col>
                        <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
                    </Col>
                    <Col xs={4}></Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col xs={4}></Col>
                    <Col>
                        <Button style={{background: "#db3d44", borderColor: "#db3d44"}} onClick={() => values !== undefined ? saveUser(values) : setError("Need to fill out the forms before Singing up.")}>Sign Up</Button>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>          
        </>
    )
}

export default SignUp;