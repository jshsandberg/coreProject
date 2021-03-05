import React, { useContext, useState, } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Charcoal from "../../utils/Media/Charcoal.jpg";
import SpotifyAuthModal from "../Modal/SpotifyAuthModal";
import { UserContext } from "../../context/userContext";
import { getUserData } from "../Functions/GetUser";
import Alert from 'react-bootstrap/Alert'


function Login() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);

    const [values, setValues] = useState(null);
    const [error, setError] = useState(null);

    function handleChange(event) {
		event.persist();
        const { name, value } = event.target;
		setValues({ ...values, [name]: value });
    };


    const getUserLogin = async () => {
        const getUser = await getUserData(values); 
        if (typeof getUser !== "string") {
            setUser(getUser.user)
            history.push({pathname: "/home"})
        } else {
            setError(getUser)
        }
    }
    

    return (
        <>
                <Container style={{paddingTop: "5%"}} fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                            
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
                                <h3 style={{float: "left", color: "white"}}>Login</h3>
                                <br></br>
                                <hr style={{height: "3px", backgroundColor: "#db3d44"}}></hr>
                            </Col>
                            <Col>
                            
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={4}></Col>
                            <Col style={{borderColor: "#db3d44"}}>
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
                                <Button style={{background: "#db3d44", borderColor: "#db3d44"}} onClick={async () => getUserLogin()}>Login</Button>
                            </Col>
                            <Col xs={4}></Col>
                        </Row>
                    </Container>   
                </Container>


            {/* <SpotifyAuthModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                user = {user}
            /> */}
        </>
    )
}

export default Login;