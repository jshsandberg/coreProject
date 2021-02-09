import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

export const Track = React.memo(function Track({ media, getChildData }) {

    const history = useHistory();

    const [isChallenge, setIsChallenge] = useState(false);

    useEffect(() => {
        if (getChildData !== null) {
            setIsChallenge(true);
        }
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 style={{marginBottom: "0px"}}>Songs</h1>
                        <hr style={{marginTop: "2px", backgroundColor: "#db3d44", height: "3px"}}></hr>
                    </Col>
                </Row>
                <Row>
                    {media && media.track.map((items, i) => {

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
                                <Col onClick={async () => {isChallenge ? getChildData(itemObj) : history.push({pathname: `/review/${items.name}`, state: itemObj})}} style={{marginBottom: "1%"}} key={items.name} xs={4}>
                                    <Container style={{backgroundColor: "#db3d44", paddingTop: "10px"}} fluid>
                                        <Row>
                                            <Col xs={2}>
                                            <img   style={{marginBottom: "5px"}} src={items.album.images[2].url} alt={i} key={i}></img>

                                            </Col>
                                            <Col xs={10}>
                                                <Row style={{paddingLeft: "15%"}}>
                                                    <p style={{paddingLeft: "0px", color: "white"}}>{items.name}</p>
                                                </Row>
                                                <Row style={{paddingLeft: "13%"}}>
                                                        {  
                                                items.artists.map((element, i) => {
                                                    return (<p style={{paddingLeft: "2%", color: "white"}} key={element + i}>{element.name}</p>)
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
});

