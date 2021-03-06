import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import ActivePantheons from "../components/Pantheon/ActivePantheons";
import Footer from "../components/Footer/Footer";
import InProgressPantheons from "../components/Pantheon/InProgressPantheon";
import VoteBox from "../components/Pantheon/VoteBox";
import ResultBox from "../components/Pantheon/ResultBox";


export default function ActivePantheonPage() {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        if (user === null || user === undefined) {
            history.push({pathname: "/"})
        } else {
            setIsLoading(false)
        }

    }, [])

    return (
        <>
          {!isLoading &&
                <>
                    <Header />
                    <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                        <br></br>
                        <Row>
                            <Col>
                                <h3>Created Pantheons</h3>
                                <ActivePantheons />
                            </Col>
                            <Col>
                                <h3>Choose your music</h3>
                                <InProgressPantheons />
                            </Col>    
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <h3>Cast your vote</h3>
                                <VoteBox />
                            </Col>
                            <Col>
                                <h3>Results</h3>
                                <ResultBox />
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </>
            }
        </>
    )
};