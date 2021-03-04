import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { UserContext } from "../context/userContext";
import RedBox from "../components/Box/RedBox";
import Charcoal from "../utils/Media/Charcoal.jpg";
import WhiteBox from "../components/Box/WhiteBox";
import Footer from "../components/Footer/Footer";
import { GetPantheon } from "../components/Functions/GetPantheon";
import PantheonBox from "../components/Box/PantheonBox";

function HomePage() {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);
    const [pantheonShow, setPantheonShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [pantheonData, setPantheonData] = useState([]);
    const [rerender, setRerender] = useState(0)


    useEffect(() => {

        const checkPantheon = async () => {

            if (user === null || user === undefined) {
                console.log(user)
                // history.push({pathname: "/"})
            } else {
                const gotPantheon = await GetPantheon(user.username);
                await setPantheonData(gotPantheon)
                await setIsLoading(false)
            }
        }
        checkPantheon();
    }, [rerender]);


    const black = {
        backgroundColor: "#464646", 
        borderColor: "#464646"
    };

    const rerenderPage = useCallback(info => {
        setRerender(Math.random());
    }, []);

    const signOut = () => {
        window.localStorage.removeItem("auth-token");
        setUser(null)
        history.push({pathname: "/"})
    }

    return (
        <>
            {!isLoading &&
            <>
            <Container fluid style={{backgroundImage: `url(${Charcoal})`, position: "fixed", top: "0px", height: "100%"}}>

            <Header />
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <Row>
                    <Col>
                    <br></br>
                        <SearchBar />
                    </Col>
                    <Col>
                    <br></br>
                    <Row>
                        <Col>
                            <h3>{user.name}</h3>
                        </Col>
                        <Col>
                            <Button style={black} onClick={() => signOut()}>Sign Out</Button>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                <br></br>
                <Container>
                    <PantheonBox />
                </Container>
                <br></br>
                <Container>
                    <Row>
                        <Col onClick={() => history.push({pathname: "/pantheon"})}>
                            <RedBox text="Create Pantheon" />
                        </Col>
                        <Col onClick={() => history.push({pathname: "/profile"})}>
                            <RedBox text="Profile Settings" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col onClick={() => history.push({pathname: "/friends"})}>
                            <RedBox text="Friends" />
                        </Col>
                        <Col onClick={() => pantheonShow ? setPantheonShow(false) : setPantheonShow(true)}>
                            <RedBox text="Pantheon Invites" number={pantheonData.length} />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                {pantheonShow &&
                    <Container fluid>
                        <Row>
                            <Col>
                                <WhiteBox data={pantheonData} user={user} rerender={rerenderPage} />
                            </Col>
                        </Row>
                    </Container>
                }
            </Container>
            <Footer />
            </Container>
            </>
            }
        </>
    )
}

export default HomePage;