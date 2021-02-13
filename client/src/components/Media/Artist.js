import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

function Artist({ media, getChildData }) {

    const history = useHistory();

    const [isChallenge, setIsChallenge] = useState(false);

    useEffect(() => {
        if (getChildData !== undefined) {
            setIsChallenge(true);
        }
    }, []);


    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 style={{marginBottom: "0px"}}>Artists</h1>
                        <hr style={{marginTop: "2px", backgroundColor: "#db3d44", height: "3px"}}></hr>
                    </Col>
                </Row>
                <Row>
                    {media && media.artist.map((items, i) => {

                        let itemObj = {
                            uri: items.uri,
                            name: items.name,
                            album: null,
                            artist: items.name,
                            id: items.id,
                            image: items.images.length > 1 ? items.images[1].url : null
                        }

                        return (
                            <><Col>
                                        <Container>
                                <Row>
                                    <Col style={{display: "flex", justifyContent: "center"}} xs={4}>
                                    <img key={items.name} onClick={ async () => {isChallenge ? getChildData(itemObj) : history.push({pathname: `/review/${items.name}`, state: itemObj})}}style={{marginBottom: "5px", borderRadius: "50%"}} src={items.images.length > 0 ? items.images[2].url : User} alt={i} key={i}></img>

                                    </Col>
                                    <Col>
                                    <h4 style={{backgroundColor: "#db3d44", paddingBottom: "10px", textAlign: "center", color: "white"}}>{items.name}</h4>
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

export default Artist;