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
                                <Container>
                                    <Row>
                                        <Col>
                                            <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                                                <br></br>
                                                <Row>
                                                    {friendArr.friends.map((item, i) => {
                                                        return (
                                                
                                                            <>
                                                                <Col>
                                                                    <h3 style={{float: "right"}}>{item}</h3>
                                                                </Col>
                                                                <Col>
                                                                    <Button onClick={() => getArenaArr(item)}>Add Friends</Button>
                                                                </Col>
                                                            </>
                                                        )
                                                    })}
                                                </Row>
                                                <br></br>
                                            </Container>
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