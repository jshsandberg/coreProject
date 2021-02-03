import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

function Album({ media }) {

    const history = useHistory();

    const [albumProps, setAlbumProps] = useState(media.albums)

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Albums</h1>
                    </Col>
                </Row>
                <Row>
                    {albumProps && albumProps.map((items, i) => {

                        let itemObj = {
                            uri: items.uri,
                            name: items.name,
                            album: items.name,
                            artist: items.artists[0].name,
                            id: items.id,
                            image: items.images[1].url
                        };

                        return (
                            <>
                                <Col xs={4}>
                                    <img onClick={ async () => {history.push({pathname: `/review/${items.name}`, state: itemObj})}} style={{marginBottom: "5px"}} src={items.images.length > 0 ? items.images[2].url : User} alt={i} key={i}></img>
                                    <p>{items.name}</p>
                                </Col>                                                                                                           
                            </>
                        )
                    })}
                </Row>
                

                    {/* <Button onClick={() => props.getChildData("hello")}>Click for Child Data</Button> */}

            </Container>
        </>
    )
};

export default Album;