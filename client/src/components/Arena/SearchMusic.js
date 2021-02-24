import React, { useContext, useState, useCallback } from "react";
import { UserContext } from "../../context/userContext";
import ChallengeSearchBar from "../SearchBar/ChallengeSearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Result } from "../Media/Result";

function SearchMusic({getChildData}) {

    const {user, setUser} = useContext(UserContext);
    const [childData, setChildData] = useState([]);


    // const getChildData = useCallback(info => {
    //     setChildData(childData => [...childData, info]);
    // }, []);

    

    return (
        <>
            <Container />
                <Row>
                    <Col>
                        <ChallengeSearchBar getChildData={getChildData}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Result childData={childData} />
                    
                    </Col>
                </Row>

        </>
    )
};

export default SearchMusic;