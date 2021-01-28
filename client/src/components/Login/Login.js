import React, { useContext, useEffect, useState, } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import SpotifyAuthModal from "../Modal/SpotifyAuthModal";
import { UserContext } from "../../context/userContext";
import { getUserData } from "../Functions/GetUser";

function Login() {


    const {user, setUser} = useContext(UserContext);

    const [values, setValues] = useState();
    const [modalShow, setModalShow] = useState(false);

    function handleChange(event) {
		event.persist();
        const { name, value } = event.target;
		setValues({ ...values, [name]: value });
    };

    useEffect(() => {
        if (user) {
            setModalShow(true);
            console.log("re-render")
        }
    }, [user])
    

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
                        <Button onClick={async () => setUser(await getUserData(values))}>Sign Up</Button>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </Container>

            <SpotifyAuthModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                user = {user}
            />
        </>
    )
}

export default Login;