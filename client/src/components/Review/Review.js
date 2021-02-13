import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import SpotifyPlayer from "react-spotify-player";
import { UserContext } from "../../context/userContext";
import { getSpotifyAccess } from "../Functions/SpotifyFree"
import { getArtistAlbums } from "../Functions/GetArtistAlbums";
import "../Functions/SpotifyFree";

function Review({ item }) {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [artistImage, setArtistImage] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getArtistImage = async () => {
            try {
                const results = await getSpotifyAccess(item.artist);
                console.log("rerender")
                await setArtistImage(results.artist[0].images[1].url);
                const artistAlbums = await getArtistAlbums(results.artist[0].id);
                await console.log(albumImages)
                await setAlbumImages(artistAlbums);
                await setIsLoading(false);

      
            } catch (err) {
                console.log(err)
            }
        };
        getArtistImage()
    }, [])

    const writeReview = () => {
       if (user !== undefined) {
           history.push({pathname: `/writereview/:${item.name}`, state: item})
       } else {
           console.log("hello")
       }
    }



    return (
        <>
            {!isLoading &&
                <Container fluid>
                    <br></br>
                    <Row>
                        <Col>
                            <img src={artistImage} />
                        </Col>
                        <Col style={{paddingTop: "5%"}}>
                            <h1 style={{color: "white"}}>{item.artist}</h1>
                            <h3 style={{color: "white"}}>{item.name}</h3>
                        </Col>
                        <Col>
                            <SpotifyPlayer
                                uri={item.uri}
                            />
                        </Col>
                        <Col xs={4}>
                            <h3>Reviews</h3>
                            <Button onClick={() => writeReview()}>Write Review</Button>
                        </Col>
                    </Row>
                    <br></br>
                    {albumImages &&
                        <Row>
                            <Col xs={1}>
                       
                            </Col>
                            <Col>
                
                                <img src={albumImages.albums[count].images[1].url} />
                            </Col>
                            {/* <Col>
                            <img src={albumImages.albums[count + 1].images[1].url} />

                            </Col>
                            <Col>
                            <img src={albumImages.albums[count + 2].images[1].url} />

                            </Col>
                            <Col>
                            <img src={albumImages.albums[count + 3].images[1].url} />

                            </Col> */}
                            <Col xs={1}>
                            
                            </Col>
                        </Row>
                    }
                </Container>
}
        </>
    )
};

export default Review;