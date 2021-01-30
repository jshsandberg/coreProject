import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

function Media(props) {


    const [trackProps, setTrackProps] = useState();
    const [albumProps, setAlbumProps] = useState();
    const [artistProps, setArtistProps] = useState();
    const [finalArtist, setFinalArtist] = useState();
    const [mediaType, setMediaType] = useState();
    const [mediaInfo, setMediaInfo] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        
    
        const splicedTracks = props.media.track.tracks.items.slice(0, 6);
        setTrackProps(splicedTracks);

        const splicedAlbums = props.media.albums.albums.items.slice(0, 6);
        setAlbumProps(splicedAlbums);

        
        const splicedArtists = props.media.artist.artists.items.slice(0, 3);
        setArtistProps(splicedArtists);

    }, [])
    



    return (
        <>
            <Container fluid>
                <h1>Top Choice</h1>
            </Container>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Songs</h1>
                    </Col>
                </Row>
                <Row>
                    {trackProps && trackProps.map((items, i) => {
                        return (
                            <>
                                <Col xs={4}>
                                    <Container fluid>
                                        <Row>
                                            <Col xs={2}>
                                            <img onClick={() => {setModalShow(true); setModalData(items); setMediaType("track")}} style={{marginBottom: "5px"}} src={items.album.images[2].url} alt={i} key={i}></img>

                                            </Col>
                                            <Col onClick={() => {setModalShow(true); setModalData(items)} }xs={10}>
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
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Artists</h1>
                    </Col>
                </Row>
                <Row>
                    {artistProps && artistProps.map((items, i) => {
                        return (
                            <>
                                <Col style={{display: "flex", justifyContent: "center"}} xs={4}>
                                    <img onClick={() => {setModalShow(true); setModalData(items); setMediaType("artist")}}style={{marginBottom: "5px", borderRadius: "50%"}} src={items.images.length > 0 ? items.images[2].url : User} alt={i} key={i}></img>
                                    <p>{items.name}</p>
                                </Col>                                                                                                           
                            </>
                        )
                    })}
                </Row>
            </Container>
            <br></br>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Albums</h1>
                    </Col>
                </Row>
                <Row>
                    {albumProps && albumProps.map((items, i) => {
                        return (
                            <>
                                <Col xs={4}>
                                    <img onClick={() => {setModalShow(true); setModalData(items); setMediaType("albums")}} style={{marginBottom: "5px"}} src={items.images.length > 0 ? items.images[2].url : User} alt={i} key={i}></img>
                                    <p>{items.name}</p>
                                </Col>                                                                                                           
                            </>
                        )
                    })}
                </Row>
            </Container>
            <SpotifyModal
            item={modalData}
            show={modalShow}
            onHide={() => setModalShow(false)}
            mediaType ={mediaType}
            //token={token}
            />

        </>
    )
    

};

export default Media;