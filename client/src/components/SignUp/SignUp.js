import React, { useState, useContext } from "react";
import API from "../../utils/API";
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

    const [values, setValues] = useState();
    const [error, setError] = useState();


    function handleChange(event) {
		event.persist();
        const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	}

    // const getUserData = async () => {
    //     try {
    //         const newUser = {
    //             username: values.username,
    //             password: values.password,
    //             name: values.firstname + " " + values.lastname,
    //             email: values.email
    //         };
    //         await API.saveuser(newUser).then( res => {
    //             if (res.stats !== 200) {
    //                 API.loginUser({
    //                         username: newUser.username,
    //                         password: newUser.password,
    //                     })
    //                     .then(res => {
    //                         console.log(res)
    //                         localStorage.setItem("auth-token", res.data.token)
    //                         setUser(res.data.user)
                            
    //                         // Push the entire information of the user and all its friends data
    //                         history.push({
    //                             pathname: "/home",
    //                         });
    //                     });
    //             };
    //         });        
    //     }
    //     catch(err)  {
    //         setError(err.response.data.msg);
    //     };
    // };

    return (
        <>
           
        <Container fluid>
            <Row>
                <Col xs={4}></Col>
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
                                <Form.Control onChange={handleChange} name="firstname" placeholder="First name" />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Form.Control onChange={handleChange} name="lastname" placeholder="Last name" />
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Form.Control onChange={handleChange} name="email" placeholder="email" />
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
                    <Button onClick={() => console.log(saveUserData())}>Sign Up</Button>
                </Col>
                <Col xs={4}></Col>
            </Row>
        </Container>
          
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <h1 style={{textAlign: "center", paddingBottom: "10px"}}>Sign Up</h1>
                                    {error && (
								<>
									<div className="alert alert-danger" role="alert">
										{error}
									</div>
									<button
										type="button"
										className="close"
										data-dismiss="alert"
										aria-label="Close"
										onClick={() => setError(undefined)}
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</>
							)}
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="firstname">First Name:</label>
                                        <input onChange={handleChange} style={{float: ""}} type="text" id="firstname" name="firstname"></input>
                                    </form>
                                </div>
                                <div className="col">
                                    <form>
                                        <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="lastname">Last Name:</label>
                                        <input onChange={handleChange} style={{float: ""}} type="text" id="lastname" name="lastname"></input>
                                    </form>
                                </div>
                                <div className="col">
                                    <form>
                                        <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="email">Email:</label>
                                        <input onChange={handleChange} style={{float: ""}} type="email" id="email" name="email"></input>
                                    </form>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="username">Username:</label>
                                    <input onChange={handleChange} style={{float: ""}} type="text" id="username" name="username"></input>
                                </div>
                                <div className="col">
                                    <label style={{paddingRight: "15px", paddingLeft: "0px"}} for="password">Password:</label>
                                    <input onChange={handleChange} style={{float: ""}} type="password" id="password" name="password"></input>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <button onClick={() => getUserData()}>Sign Up</button>
                        </div>
                    </div>
                    <div className="col-3">

                    </div>
                </div>
            </div> */}
        </>
    )
}

export default SignUp;