import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";


function Login() {

    const history = useHistory();

    const [values, setValues] = useState();


    function handleChange(event) {
		event.persist();
        const { name, value } = event.target;
		setValues({ ...values, [name]: value });
    };

    const getUserData = async () => {
        try {
            const newUser = {
                username: values.username,
                password: values.password,
            }
            API.loginUser({
                username: newUser.username,
                password: newUser.password,
            })
            .then(res => {
                history.push({
                pathname: "/home",
                state: res.data.user,
                })
                localStorage.setItem("auth-token", res.data.token)
            });
        } catch(err) {
            console.log(err)
        }
    };
    

    return (
        <>
            <Container fluid>
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
                <Row>
                    <Col xs={4}></Col>
                    <Col>
                        <Button onClick={() => getUserData()}>Sign Up</Button>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;