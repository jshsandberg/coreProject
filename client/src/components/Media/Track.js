import React, { useState } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import SpotifyModal from "../Modal/SpotifyModal";

function Media(props) {


    const [media, setMedia] = useState(props.media.tracks);
    const [trackInfo, setTrackInfo] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState(null);
   
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={9}>
                        <Container fluid>
                            <Row>
                                {media.items.map((items, i) => {
                                    return (
                                        <>
                                            <Col xs={3}>
                                                <img onClick={() => {setModalShow(true); setModalData(items)}} onMouseEnter={() => setTrackInfo(items)} style={{width: "115%"}} src={items.album.images[1].url}></img>
                                            </Col>
                                        </>
                                    )
                                })}
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        {trackInfo !== null &&
                                        <>
                                        <h4>Artist Name : {trackInfo !== null ? trackInfo.artists[0].name : <div></div>}</h4>
                                        <br></br>
                                        <h4>Album Name : {trackInfo !== null ? trackInfo.album.name : <div></div>}</h4>
                                        <br></br>
                                        <h4>Song Name : {trackInfo !== null ? trackInfo.name : <div></div>}</h4>
                                        </>
                                        }
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
            <SpotifyModal
            item={modalData}
            show={modalShow}
            onHide={() => setModalShow(false)}
            track={true}
            //token={token}
            />

        </>
    )
    

};

export default Media;