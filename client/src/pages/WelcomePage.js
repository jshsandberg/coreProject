import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import VideoGame from "../components/VideoGame/VideoGame";
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown from 'react-bootstrap/esm/Dropdown'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Col from 'react-bootstrap/esm/Col';
import TitleMedia from "../components/TitleMedia/TitleMedia";
import Form from 'react-bootstrap/esm/Form'
import IGDB from "../components/IGDB/IGDB";
import Spotify from "../components/Spotify/Spotify";

function WelcomePage() {

    const [spotifySelector, setSpotifySelector] = useState("new-releases");
    const [spotifySearchTitle, setSpotifySearchTitle] = useState("New Releases")

    const bottomBorder = {
        borderBottom: "double"
    }

    return (
        <>
            <Header />
            <NavBar />
            <br></br>
            <br></br>
            <Row style={bottomBorder}>
                <h1 style={{paddingLeft: "20px"}}>Video Games</h1>
            </Row>
            <br></br>
            <VideoGame />
            <br></br>
            <br></br>
            <Row style={bottomBorder}>
                <h1 style={{paddingLeft: "20px"}}>Music</h1>
                <DropdownButton style={{marginTop: "3px", marginLeft: "15px"}} id="dropdown-basic-button" title={spotifySearchTitle}>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("New Releases"); setSpotifySelector("new-releases")}}>New Releases</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Top Lists"); setSpotifySelector("toplists")}}>Top Lists</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Hip Hop"); setSpotifySelector("hiphop")}}>Hip Hop</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Pop"); setSpotifySelector("pop")}}>Pop</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Country"); setSpotifySelector("country")}}>Country</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Rock"); setSpotifySelector("rock")}}>Rock</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("Gaming"); setSpotifySelector("gaming")}}>Gaming</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setSpotifySearchTitle("EDM / Dance"); setSpotifySelector("edm_dance")}}>EDM / Dance</Dropdown.Item>
                    {/* <Dropdown.Item onClick={() => {setSpotifySearchTitle("Alternative"); setSpotifySelector("alternative")}}>Alternative</Dropdown.Item> */}
                </DropdownButton>
            </Row>
            <br></br>
            <Spotify spotifySelector={spotifySelector} />
            <br></br>
            <br></br>
         
         
           

        </>
    )
}

export default WelcomePage