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


export default function ActivePantheonPage() {

    return (
        <>
            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <ActivePantheons />
                <br></br>
                <InProgressPantheons />
            </Container>
            <Footer />
        </>
    )
};