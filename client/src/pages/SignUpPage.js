import React from "react";
import Header from "../components/Header/Header";
import SignUp from "../components/SignUp/SignUp";
import Footer from "../components/Footer/Footer";
import Charcoal from "../utils/Media/Charcoal.jpg";
import Container from 'react-bootstrap/esm/Container';

function SignUpPage() {


    return (
        <>
            <Container fluid style={{backgroundImage: `url(${Charcoal})`, paddingRight: "0px", paddingLeft: "0px"}}>
                <Header />
                <SignUp />
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
                <Footer />
            </Container>
        </>
    )
}

export default SignUpPage;