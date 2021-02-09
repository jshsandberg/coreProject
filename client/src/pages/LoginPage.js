import React from "react";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import Charcoal from "../utils/Media/Charcoal.jpg";
import Container from 'react-bootstrap/esm/Container';




function LoginPage() {

    return (
        <>
            <Container fluid style={{backgroundImage: `url(${Charcoal})`, paddingRight: "0px", paddingLeft: "0px"}}>
                <Header />
                <Login />
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
                <Footer />
            </Container>
       
        </>
    )
}

export default LoginPage;