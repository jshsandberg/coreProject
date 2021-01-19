import React, { useState, useEffect } from "react";
import GameData from "../../utils/GameData"; 
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RightArrow from "../../utils/right-arrow.svg";
import LeftArrow from "../../utils/left-arrow.svg";
import VideoGameModal from "../Modal/VideoGameModal";
import Spinner from 'react-bootstrap/esm/Spinner';

import Modal from 'react-bootstrap/esm/Modal';

import "./VideoGame.css";

function VideoGame() {

    // const [gameData, setGameData] = useState(GameData);
    
    const [gameData, setGameData] = useState(GameData)
    const [mappedData, setMappedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => seperateGameData(), [count])

    const seperateGameData = async () => {

        const clonedGameData = [...gameData]
        const arr1 = await clonedGameData.splice(0, 5);
        const arr2 = await clonedGameData.splice(0, 5);
        const arr3 = await clonedGameData.splice(0, 5);
        const arr4 = await clonedGameData.splice(0, 5);
        await setMappedData([arr1, arr2, arr3, arr4])
        await setIsLoading(false)
    }

    const leftArrow = () => {
        if (count === 0) {
            setCount(3)
        } else {
            setCount(count - 1);
        }
    };

    const rightArrow = () => {
        if (count === 3) {
            setCount(0)
        } else {
            setCount(count + 1);
        }

    };

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    } else {

        return (
            <>
                <Container fluid>
                    <Row>
                        <Col xs={1}>
                            <img onClick={() => leftArrow()} className="left-arrow" src={LeftArrow} alt="left-arrow"></img>
                        </Col>
                        {mappedData[count].map((item, i) => {
                                return (
                                    <>
                                        <Col>
                                            <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.image} alt={i} key={i} />
                                            <h3>{item.name}</h3>
                                            
                                        </Col>
                                    </>
                                )
                            }
                        )}
                        <Col xs={1}>
                            <img onClick={() => rightArrow()} className="right-arrow" src={RightArrow} alt="right-arrow"></img>
                        </Col>
                    </Row>
                </Container>

                <VideoGameModal
                    item={modalData}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        )
    }
}



export default VideoGame;