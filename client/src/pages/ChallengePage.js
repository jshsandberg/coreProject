import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import SideNavBar from "../components/NavBar/SideNav";
import ChallengeSearchBar from "../components/SearchBar/ChallengeSearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function ChallengePage() {

    const {user, setUser} = useContext(UserContext)


    return (
        <>
            <SideNavBar />
            <Container />
                <Row>
                    <Col xs={2}> 
                    
                    </Col>
                    <Col>
                        <ChallengeSearchBar />
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>

        </>
    )
};

export default ChallengePage;