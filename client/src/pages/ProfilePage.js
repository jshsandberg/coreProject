import React, {useContext} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import { UserContext } from "../context/userContext";
import Charcoal from "../utils/Media/Charcoal.jpg";



export default function ProfilePage() {

    const {user, setUser} = useContext(UserContext);

    console.log(user)


    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Row>
                    <Col>
                        <img alt="placeholder" />
                    </Col>
                    <Col>
                        <h2>User Info</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <h2>Username: {user.username}</h2>
                                </Col>
                                <Col>
                                    <h2>Email: {user.email}</h2> 
                                </Col>
                            </Row>
                            <br></br>
                            {user.reviews === undefined ? 
                                <Col>
                                    <h3>No Reviews</h3>
                                </Col>
                                :
                                user.reviews.map((item, i) => {
                                    return (
                                        // <Row>
                                            <Col xs={6}>
                                                <h4>{item.spotifyId}</h4>
                                            </Col>
                                        //</Row>
                                    )
                                })
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}