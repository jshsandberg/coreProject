import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetVotingPantheon } from "../Functions/GetVotingPantheon";
import { UserContext } from "../../context/userContext";
import { FilterData } from "../Functions/FilterData";


export default function VoteBox() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [votingArr, setVotingArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);


    useEffect(() => {
        
        const votingPantheon = async () => {
            const foundVotingPantheon = await GetVotingPantheon(user);
            // await setVotingArr(foundVotingPantheon);
            const filteredData = await FilterData(foundVotingPantheon, user.username);
            await setVotingArr(filteredData)
            await setIsLoading(false)
        };

        votingPantheon();
    }, []);

    

    return (
        <>
            {!isLoading &&
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        {votingArr.map((item, i) => {
                            console.log(item)
                                return (
                                    <>
                                        <Col align="center" key={i}>
                                            <h3>{item.battle.fighterOne.username} vs {item.battle.fighterTwo.username}</h3>
                                            <Button onClick={() => {
                                                const obj = {
                                                    state: item.battle,
                                                    pantheon: item.pantheon
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
                        )}
                    </Row>
                </Container>
            }
        </>
    )
};