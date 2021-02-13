import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SpotifyModal from "../Modal/SpotifyModal";
import User from "../../utils/Media/User.png";

function Album({ media, getChildData }) {

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
                        `<h1 style={{marginBottom: "0px"}}>Albums</h1>
                        <hr style={{marginTop: "2px", backgroundColor: "#db3d44", height: "3px"}}></hr>
                    </Col>
                </Row>
                <Row>
                    {media && media.albums.map((items, i) => {

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
                                    <Container>
                                        <Row>
                                            <Col align="center" style={{paddingTop: "4%"}}>
                                                <Container>
                                                    <Col>
                                                    
                                                    </Col>
                                                    <Col style={{backgroundColor: "#db3d44", paddingTop: "7%", paddingBottom: "1px"}} xs={6}>
                                                        <img key={items.name} onClick={ async () => {isChallenge ? getChildData(itemObj) : history.push({pathname: `/review/${items.name}`, state: itemObj})}} style={{marginBottom: "5px"}} src={items.images.length > 0 ? items.images[2].url : User} alt={i} key={i}></img>
                                                        <p style={{color: "white"}}>{items.name}</p>
                                                    </Col>
                                                    <Col>
                                                    
                                                    </Col>
                                     
                                                </Container>
                                            
                                            </Col>
                                        </Row>
                                    </Container>
                                    <br></br>
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