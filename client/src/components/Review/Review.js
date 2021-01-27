import React, { useState, useEffect, useContext } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import SpotifyPlayer from "react-spotify-player";
import { UserContext } from "../../context/userContext";
import NoAccessModal from "../Modal/NoAccessModal";
import { getSpotifyAccess } from "../Functions/SpotifyFree"
import "../Functions/SpotifyFree";

function Review({ item }) {

    //console.log(item.item)

    const {user, setUser} = useContext(UserContext);
    const [type, setType] = useState(item.mediaType);
    const [artistImage, setArtistImage] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [uri, setUri] = useState();
    const [genre, setGenre] = useState();
    const [releaseData, setReleaseDate] = useState();
    const [artist, setArtist] = useState();
    const [modalReviewShow, setModalReviewShow] = useState(false);
    const [modalNoAccess, setModalNoAccess] = useState(false);

    useEffect( async () => {

        if (item.mediaType === "track") {
            const results = await getSpotifyAccess(item.item.artists[0].name);
            await setArtistImage(results.artist.artists.items[0].images[1].url);
            setName(item.item.name);
            setUri(item.item.uri);
            setArtist(item.item.artists[0].name)
        } else if (item.mediaType === "albums") {
            const results = await getSpotifyAccess(item.item.artists[0].name);
            await setArtistImage(results.artist.artists.items[0].images[1].url);
            setImage(item.item.images[1].url);
            setName(item.item.name);
            setUri(item.item.uri);
            setReleaseDate(item.item.release_data);
            setArtist(item.item.artists[0].name);
        } else if (item.mediaType === "artist") {
            setArtistImage(item.item.images[1].url)
            setName(item.item.name);
            setUri(item.item.uri);
            setGenre(item.item.genres); 
        }
    }, [{ item }])

    const writeReview = () => {
       if (user !== undefined) {
           setModalReviewShow(true)
       } else {
           setModalNoAccess(true);
       }
    }



    return (
        <>
            <Container fluid>
                <Row>
                    <Col align="center">
                        <h1>{artist}</h1>
                        <h3>{name}</h3>
                    </Col>
                    <Col>
                        <img src={artistImage} />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col>
                        <img src={image} />
                    </Col>
                    <Col>
                        <SpotifyPlayer
                            uri={uri}
                        />
                    </Col>
                    <Col>
                        <h3>Reviews</h3>
                        <Button onClick={() => writeReview()}>Write Review</Button>
                    
                    </Col>
                </Row>
            </Container>
            <NoAccessModal 
                show={modalNoAccess}
                onHide={() => setModalNoAccess(false)}              
            />
        </>
    )
};

export default Review;