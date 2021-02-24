import React from "react";
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


export default function ActivePantheonPage() {

    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Row>
                    <Col>
                        <h3>Created Pantheons</h3>
                        <ActivePantheons />
                        <br></br>
                        <h3>Choose your music</h3>
                        <InProgressPantheons />
                        <br></br>
                        <h3>Cast your vote</h3>
                        <VoteBox />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
};