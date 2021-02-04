import React, { useContext, useState, useCallback } from "react";
import { UserContext } from "../context/userContext";
import SideNavBar from "../components/NavBar/SideNav";
import ChallengeSearchBar from "../components/SearchBar/ChallengeSearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function ChallengePage() {

    const {user, setUser} = useContext(UserContext);
    const [childData, setChildData] = useState([]);


    const getChildData = useCallback(info => {
        setChildData(childData => [...childData, info]);
    }, []);

    

    return (
        <>
            <SideNavBar />
            <Container />
                <Row>
                    <Col xs={2}> 
                    
                    </Col>
                    <Col>
                        <ChallengeSearchBar getChildData={getChildData}/>
                    </Col>
                    <Col>
                        <Result ={childData}
                    
                    </Col>
                </Row>

        </>
    )
};

export default ChallengePage;