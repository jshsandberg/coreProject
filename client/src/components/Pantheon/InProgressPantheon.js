import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { UserContext } from "../../context/userContext";
import { GetMusic } from "../Functions/GetMusic";
import { GetFinalMusic } from "../Functions/GetFinalMusic"



export default function InProgressPantheon() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [music, setMusic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [final, setFinal] = useState([]);

    useEffect(() => {

        const findMusic = async () => {
            const foundMusic = await GetMusic(user);

            const foundFinalBattleMusic = await GetFinalMusic(user);
            await setFinal(foundFinalBattleMusic);
            await setMusic(foundMusic);
            await setIsLoading(false);
        }

        findMusic()

    }, []);

    return (
        <>
            {!isLoading &&
              <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        {final.map((item, i) => {
                   
                                return (
                                    <Col align="center" key={i}>
                                        <h1>Final</h1>
                                        <h2>{item.category}</h2>
                                        <Button onClick={() => history.push({pathname: "/finalArena", state: item})}>Choose your Song</Button>
                                    </Col>
                                )
                            })}
                        {music.map((item, i) => {
                            return (
                                <Col align="center" key={i}>
                                    <h2>{item.category}</h2>
                                    <Button onClick={() => history.push({pathname: "/arena", state: item})}>Choose your Song</Button>
                                </Col>
                            )
                        })}
            
                    </Row>
                </Container>
            }
        </>
    )
}