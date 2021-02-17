import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import { AddFriend } from "../components/Functions/AddFriend";
import { UserContext } from "../context/userContext";
import { GetFriends } from "../components/Functions/GetFriends";
import Charcoal from "../utils/Media/Charcoal.jpg";



export default function FriendsPage() {

    const {user, setUser} = useContext(UserContext);
    const [value, setValue] = useState();

    useEffect(() => {
        if (user !== undefined) {
            GetFriends(user._id)
        console.log("render")
        }
    }, [])

    const saveFriend = async (username, friendUsername) => {
        const savedFriend = await AddFriend(username, friendUsername)
        console.log(savedFriend.msg)
    }


    return (
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
                                <Col style={{backgroundColor: "white"}}>
                                    <h3>Friend List</h3>
                                </Col>
                                <Col xs={2}>
                                
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={2}>
                                
                                </Col>
                                <Col style={{backgroundColor: "white"}}>
                                    <h3>Friend List</h3>
                                </Col>
                                <Col xs={2}>
                                
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Button onClick={() => saveFriend(user.username, value)}>Add a Friend</Button>
                        <input onChange={(e) => setValue(e.target.value)} type="text" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}