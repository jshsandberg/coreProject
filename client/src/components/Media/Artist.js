import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

function Artist({ media }) {

    const history = useHistory();

    const [artistProps, setArtstProps] = useState(media.artist);


    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Artists</h1>
                    </Col>
                </Row>
                <Row>
                    {artistProps && artistProps.map((items, i) => {
                        console.log(items)
                        let itemObj = {
                            uri: items.uri,
                            name: items.name,
                            album: null,
                            artist: items.name,
                            id: items.id,
                            image: items.images.length > 1 ? items.images[1].url : null
                        }

                        return (
                            <>
                                <Col style={{display: "flex", justifyContent: "center"}} xs={4}>
                                    <img onClick={ async () => {history.push({pathname: `/review/${items.name}`, state: itemObj})}}style={{marginBottom: "5px", borderRadius: "50%"}} src={items.images.length > 0 ? items.images[2].url : User} alt={i} key={i}></img>
                                    <p>{items.name}</p>
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