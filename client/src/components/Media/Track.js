import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

function Track({ media }) {

    const history = useHistory();


   
    const [trackProps, setTrackProps] = useState(media.track);



    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Songs</h1>
                    </Col>
                </Row>
                <Row>
                    {trackProps && trackProps.map((items, i) => {

                        let itemObj = {
                            uri: items.uri,
                            name: items.name,
                            album: items.album.name,
                            artist: items.artists[0].name,
                            id: items.id,
                            image: items.album.images[1].url,
                        };

                        return (
                            <>
                                <Col xs={4}>
                                    <Container fluid>
                                        <Row>
                                            <Col xs={2}>
                                            <img onClick={async () => {history.push({pathname: `/review/${items.name}`, state: itemObj})}} style={{marginBottom: "5px"}} src={items.album.images[2].url} alt={i} key={i}></img>

                                            </Col>
                                            <Col onClick={async () => {history.push({pathname: `/review/${items.name}`, state: itemObj})}} xs={10}>
                                                <Row style={{paddingLeft: "15%"}}>
                                                    <p style={{paddingLeft: "0px"}}>{items.name}</p>
                                                </Row>
                                                <Row style={{paddingLeft: "13%"}}>
                                                        {  
                                                items.artists.map((element, i) => {
                                                    return (<p style={{paddingLeft: "2%"}} key={element + i}>{element.name}</p>)
                                                })
                                    }
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
};

export default Track;