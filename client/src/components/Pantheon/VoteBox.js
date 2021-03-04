import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetVotingPantheon } from "../Functions/GetVotingPantheon";
import { UserContext } from "../../context/userContext";
import { FilterData } from "../Functions/FilterData";
import { GetFinalVotingPantheon } from "../Functions/GetFinalVotingPantheon";


export default function VoteBox() {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [votingArr, setVotingArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [finalVotingArr, setFinalVotingArr] = useState([]);


    useEffect(() => {
        
        const votingPantheon = async () => {
            const foundVotingPantheon = await GetVotingPantheon(user);
            const foundFinalVotingPantheon = await GetFinalVotingPantheon(user);
            await setFinalVotingArr(foundFinalVotingPantheon);
            const filteredData = await FilterData(foundVotingPantheon, user.username);
            await setVotingArr(filteredData)
            await setIsLoading(false)
        };

        votingPantheon();
    }, []);

    

    return (
        <>
            {isLoading ? 
                <>
                
                </>
            :
            finalVotingArr.length === 0 && votingArr.length === 0 ?
            
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        <Col align="center">
                            <h1>There are no Pantheon for you to vote on.</h1>
                        </Col>
                    </Row>
                </Container>
            :
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                    {finalVotingArr.map((item, i) => {
                            console.log(item)
                                return (
                                    <>
                                        <Col align="center" key={i}>
                                            <h1>Final</h1>
                                            <h3>{item[0].finalBattle.fighterOne.username} vs {item[0].finalBattle.fighterTwo.username}</h3>
                                            <Button onClick={() => {
                                                const obj = {
                                                    state: item[0].finalBattle,
                                                    pantheon: item[0]._id,
                                                    final: true
                                                }
                                                history.push({pathname: "/voting", state: obj})}}>Vote</Button>
                                        </Col>
                                    </>
                                )
                            }
                        )}
                        {votingArr.map((item, i) => {
                            console.log(item)
                                return (
                                    <>
                                        <Col align="center" key={i}>
                                            <h3>{item.battle.fighterOne.username} vs {item.battle.fighterTwo.username}</h3>
                                            <Button onClick={() => {
                                                const obj = {
                                                    state: item.battle,
                                                    pantheon: item.pantheon,
                                                    final: false
                                                }
                                                history.push({pathname: "/voting", state: obj})}}>Vote</Button>
                                        </Col>
                                    </>
                                )
                            }
                        )}
                    </Row>
                </Container>
            }
        </>
    )
};