import React, { useCallback, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Charcoal from "../utils/Media/Charcoal.jpg";
import RedBox from "../components/Box/RedBox";
import TwoMan from "../components/Tounament/TwoMan";
import ChallengeSearchBar from "../components/SearchBar/ChallengeSearchBar";
import SearchMusic from "../components/Arena/SearchMusic";
import { UserContext } from "../context/userContext";
import { SubmitBattle } from "../components/Functions/SubmitBattle";
import { FindBattle } from "../components/Functions/FindBattle";
import Footer from "../components/Footer/Footer";
import Alert from 'react-bootstrap/Alert';




export default function ArenaPage({ location }) {

    const history = useHistory();



    const {user, setUser} = useContext(UserContext);
    const [battle, setBattle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [childData, setChildData] = useState([]);
    const [alert, setAlert] = useState(null)

    useEffect(() => {


        const promise = async () => {
            const check = await FindBattle(user.username, location.state);
            await setBattle(check);
            await setIsLoading(false);
        };

        if (user === null || user === undefined) {
            history.push({pathname: "/"})
        } else {

            promise()
        }

    }, [])


    const getChildData = useCallback(info => {
        setChildData(childData => [...childData, info]);
    }, []);

    const submitBattle = async (item, user, pantheonId) => {
        const battle = await SubmitBattle(item.slice(-1)[0], user, pantheonId);
        await setAlert(battle)
    }

    return (
        <>
            {!isLoading &&
                <>
                    <Header />
                    <Container fluid style={{backgroundImage: `url(${Charcoal})`}}>
                        <br></br>
                        <Row>
                            <Col>
                            {alert && (
                                <>
                                    <Alert variant="danger" onClick={() => setAlert(null)} dismissible>
                                        <Alert.Heading>{alert}</Alert.Heading>             
                                    </Alert>
                                </>
                            )}
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs={2}>
                                <Button onClick={() => submitBattle(childData, user, location.state._id)}>Sumbit Challenger</Button>
                            </Col>
                            <Col align="center">
                                <RedBox text={location.state.category}/>
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                            <Col xs={4}>
                                <RedBox text={"Choose your song!"} />
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                        </Row>
                        <br></br>
                        {/* Need to make a universal picture for bracketsz, this design is for only two man, should arenas only be allowed to choose songs? */}
                        <Row>
                            <Col>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                                <TwoMan childData={childData} battle={battle}/>
                            </Col>
                            <Col>
                            
                            </Col>
                            <Col xs={6}>
                                <SearchMusic getChildData={getChildData} />
                            </Col>
                            <Col xs={2}>
                            
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                </>
            }
        </>
    )
};