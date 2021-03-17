import React from "react";
import Navbar from 'react-bootstrap/Navbar';


export default function Footer() {

    return (
        <>
            <Navbar className="fixed-bottom" style={{backgroundColor: "#db3d34"}}>
                <Navbar.Brand style={{color: "white"}}>
                    Joshua Sandberg (C) 2021
                </Navbar.Brand>
            </Navbar>
        </>
    )
}