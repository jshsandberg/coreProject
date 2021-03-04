import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import { AddFriend } from "../components/Functions/AddFriend";
import { UserContext } from "../context/userContext";
import { GetFriends } from "../components/Functions/GetFriends";
import Charcoal from "../utils/Media/Charcoal.jpg";
import Footer from "../components/Footer/Footer";
import RedBox from "../components/Box/RedBox";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'





export default function FriendsPage() {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);
    const [value, setValue] = useState(null);
    const [friendArr, setFriendArr] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState(null);
    const [rerender, setRerender] = useState(0);


    useEffect(() => {
        const foundFriends = async () => {
            const arrFriends = await GetFriends(user.id);
            await setFriendArr(arrFriends);
            await setIsLoading(false)
        }

        if (user === null || user === undefined) {
            history.push({pathname: "/"})
        } else {
        foundFriends();
        }
    }, [rerender])

   

    const saveFriend = async (username, friendUsername) => {
        const savedFriend = await AddFriend(username, friendUsername);
        await setAlert(savedFriend.msg);
        await setRerender(Math.random());
    }

    

    return (
        <> 
            {!isLoading &&
                <>
                    <Header />
                    <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                        <Row>
                            <Col>
                            <br></br>
                                <Container>
                                    <Row>
                                        <Col xs={2}>
                                        
                                        </Col>
                                        <Col>
                                            <RedBox text={"Friend List"}/>
                                        </Col>
                                        <Col xs={2}>
                                        
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col xs={2}>
                                        
                                        </Col>
                                        <Col>
                                            <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                                                <Row>
                                                    {friendArr.friends.map((item, i) => {
                                                        return (
                                                            <Col>
                                                                <h3 >{item}</h3>
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col xs={2}>
                                        
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col>
                                <Form>
                                    <br></br>
                                    <Row>
                                        <Col>
                                            <Form.Control  onChange={(e) => setValue(e.target.value)} type="text" />
                                        </Col>
                                        <Col>
                                            <Button onClick={() => saveFriend(user.username, value)}>Add a Friend</Button>
                                        </Col>
                                    </Row>
                                </Form>
                                <br></br>
                                <Row>
                                    <Col>
                                    {alert && (
                                        <>
                                            <Alert variant="dark" onClick={() => setAlert(null)} dismissible>
                                                <Alert.Heading>{alert}</Alert.Heading>
                                            </Alert>
                                        </>
                                    )}
                                    </Col>
                                    <Col xs={2}>
                                    
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </>
            }
        </>
    )
}