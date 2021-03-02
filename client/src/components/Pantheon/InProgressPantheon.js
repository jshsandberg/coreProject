import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { UserContext } from "../../context/userContext";
import { GetMusic } from "../Functions/GetMusic";



export default function InProgressPantheon() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [music, setMusic] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const findMusic = async () => {
            const foundMusic = await GetMusic(user);
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
                        {music.map((item, i) => {
                            return (
                                <Col key={i}>
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