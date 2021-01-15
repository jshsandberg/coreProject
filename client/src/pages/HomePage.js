import React from "react";
import Header from "../components/Header/Header";
import HomeNavbar from "../components/NavBar/HomeNavBar";

function HomePage(props) {

    return (
        <>
            <Header />
            <HomeNavbar user = {props} />
        </>
    )
}

export default HomePage;