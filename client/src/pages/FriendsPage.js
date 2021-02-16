import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import { AddFriend } from "../components/Functions/AddFriend";
import { UserContext } from "../context/userContext";


export default function FriendsPage() {

    const {user, setUser} = useContext(UserContext);
    const [value, setValue] = useState();


    return (
        <> 
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h3>Friend List</h3>
                    </Col>
                    <Col>
                        <Button onClick={() => AddFriend(user.username, value)}>Add a Friend</Button>
                        <input onChange={(e) => setValue(e.target.value)} type="text" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}