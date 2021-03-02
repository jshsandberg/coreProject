import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetVotingPantheon } from "../Functions/GetVotingPantheon";
import { UserContext } from "../../context/userContext";


export default function VoteBox() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [votingArr, setVotingArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);


    useEffect(() => {
        
        const votingPantheon = async () => {
            const foundVotingPantheon = await GetVotingPantheon(user);
            await setVotingArr(foundVotingPantheon);
            console.log(foundVotingPantheon)
            await setIsLoading(false)
        };

        votingPantheon();
    }, [])

    return (
        <>
            {!isLoading &&
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        {votingArr.map((item, i) => {
                            console.log(item)
                            if (item.numOfPlayers === 4) {
                                return (
                                    <>
                                        <Col align="center" key={i}>
                                            <h3>{item.battle.battleOne.fighterOne.username} vs {item.battle.battleOne.fighterTwo.username}</h3>
                                            <Button onClick={() => {
                                                const obj = {
                                                    state: item.battle.battleOne,
                                                    pantheon: item._id
                                                }
                                                history.push({pathname: "/voting", state: obj})}}>Vote</Button>
                                        </Col>
                                        <Col align="center" key={i}>
                                            <h3>{item.battle.battleTwo.fighterOne.username} vs {item.battle.battleTwo.fighterTwo.username}</h3>
                                            <Button onClick={() => {
                                                const obj = {
                                                    state: item.battle.battleTwo,
                                                    pantheon: item._id
                                                }
                                                history.push({pathname: "/voting", state: obj})}}>Vote</Button>
                                        </Col>
                                    </>
                                )
                            }
                        
                            // item.battle.map((battle, i) => {
                            //     return (
                            //         <>
                            //             <Col key={i} align="center">
                            //                 <h3>{battle.fighter1.username} vs {battle.fighter2.username}</h3>
                            //                 <Button onClick={() => history.push({pathname: "/voting", state: item})}>Vote</Button>
                            //             </Col>
                            //         </>
                            //     )
                            // })
                        })}
                    </Row>
                </Container>
            }
        </>
    )
};