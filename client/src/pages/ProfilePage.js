import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header/Header";
import { UserContext } from "../context/userContext";
import Charcoal from "../utils/Media/Charcoal.jpg";



export default function ProfilePage() {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
            if (user === null || user === undefined) {
                history.push({pathname: "/"})
            } else {
            
           setIsLoading(false)
            };
    }, []);


    return (
        <>
          {!isLoading &&
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
}
</>
    )
}