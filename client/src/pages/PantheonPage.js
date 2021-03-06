import React, { useState, useCallback, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import { Container, Row, Col, Button } from "react-bootstrap";
import Charcoal from "../utils/Media/Charcoal.jpg";
import FormComponent from "../components/Pantheon/Form";
import AddingFriends from "../components/Pantheon/AddingFriends";
import Arena from "../components/Pantheon/Arena";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/userContext";




export default function PantheonPage() {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);


    const [arenaInfo, setArenaInfo] = useState({
        category: null
    });
    const [arenaArr, setArenaArr] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        if (user === null || user === undefined) {
            history.push({pathname: "/"})
        } else {
            setIsLoading(false);
        }

    }, [arenaInfo, arenaArr])

    const getArenaArr = useCallback((data) => {
       
        setArenaArr(arenaInfo => ( arenaInfo.includes(data) ? arenaInfo : [
            ...arenaInfo, data
        ]));
    }, []);

    const getArenaData = useCallback((name, data) => {
        setArenaInfo(arenaInfo => ({
            ...arenaInfo, [name]: data
        }))
    }, []);

    

    
    return (
        <>
            {!isLoading &&
            <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <Container fluid>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <FormComponent getArenaData={getArenaData} />
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Arena data={arenaInfo} arr={arenaArr} />
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <AddingFriends getArenaArr={getArenaArr} />
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col>
                            <FormComponent getArenaData={getArenaData} />
                        </Col>
                        <Col>
                            <AddingFriends getArenaArr={getArenaArr} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Arena data={arenaInfo} arr={arenaArr} />
                        </Col>
                    </Row> */}
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Container>
            <Footer />
        </>
}
</>
    )
};