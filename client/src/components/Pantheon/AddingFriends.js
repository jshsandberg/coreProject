import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../../context/userContext";
import { GetFriends } from "../Functions/GetFriends";



export default function AddingFriends({ getArenaArr }) {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [value, setValue] = useState();
    const [friendArr, setFriendArr] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const foundFriends = async () => {
            const arrFriends = await GetFriends(user.id);
            console.log(arrFriends)
            await setFriendArr(arrFriends);
            await setIsLoading(false)
        };
        foundFriends();

    }, [])



    return (
        <>
            {!isLoading &&
                <>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Search for User with Username" />
                                <Button>Submit</Button>
                            </Col>
                            <Col>
                                <Container>
                                    <Row>
                                        <Col style={{backgroundColor: "white"}}>
                                        {friendArr.friends.map((item, i) => {
                                                        return (
                                                            <Row>
                                                                <Col>
                                                                    <h3 >{item.friendsUsername[0]}</h3>
                                                                </Col>
                                                                <Col>
                                                                    <Button onClick={() => getArenaArr(item.friendsUsername[0])}>Add Friends</Button>
                                                                </Col>
                                                            </Row>
                                                        )
                                                    })}
                                            
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Form>
                </>
            }
        </>
    )
}