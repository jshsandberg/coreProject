import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import SpotifyPlayer from "react-spotify-player";
import { UserContext } from "../../context/userContext";
import { getSpotifyAccess } from "../Functions/SpotifyFree"
import Charcoal from "../../utils/Media/Charcoal.jpg";
import "../Functions/SpotifyFree";

function Review({ item }) {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [artistImage, setArtistImage] = useState();

    useEffect(() => {

        const getArtistImage = async () => {
            try {
                const results = await getSpotifyAccess(item.artist);
                await setArtistImage(results.artist[0].images[1].url);
            } catch (err) {
                console.log(err)
            }
        };
        getArtistImage()
    }, [{ item }])

    const writeReview = () => {
       if (user !== undefined) {
           history.push({pathname: `/writereview/:${item.name}`, state: item})
       } else {
           console.log("hello")
       }
    }



    return (
        <>
            <Container fluid>
                <Row>
                    <Col align="center">
                        <h1>{item.artist}</h1>
                        <h3>{item.name}</h3>
                    </Col>
                    <Col>
                        <img src={artistImage} />
                    </Col>
                </Row>
      
                <Row>
                    <Col>
                        <img src={item.image} />
                    </Col>
                    <Col>
                        <SpotifyPlayer
                            uri={item.uri}
                        />
                    </Col>
                    <Col>
                        <h3>Reviews</h3>
                        <Button onClick={() => writeReview()}>Write Review</Button>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Review;