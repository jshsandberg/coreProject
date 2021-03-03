import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetResults } from "../Functions/GetResults";
import { UserContext } from "../../context/userContext";
import { GetFinalResults } from "../Functions/GetFinalResults";


export default function ResultBox() {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);
    const [resultArr, setResultArr] = useState([]);
    const [finalResultArr, setFinalResultArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {

        const checkForResults = async () => {
            const foundResults = await GetResults(user);
            const foundFinalResults = await GetFinalResults(user);
            await setFinalResultArr(foundFinalResults);
            await setResultArr(foundResults);
            await setIsLoading(false)
            
        };

        checkForResults()
    }, []);


    return (
        <>
            {!isLoading &&
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                    {finalResultArr.map((item, i) => {
                        console.log(item)
                            return (
                                <>
                                    <Col key={i} align="center">
                                        <h1>Final</h1>
                                        <h3>{item[0].category}</h3>
                                        <Button onClick={() => history.push({pathname: "/finalResults", state: item[0]})}>See Results</Button>
                                    </Col>
                                </>
                            )
                        })}
                        {resultArr.map((item, i) => {
                            return (
                                <>
                                    <Col key={i} align="center">
                                        <h3>{item.category}</h3>
                                        <Button onClick={() => history.push({pathname: "/results", state: item})}>See Results</Button>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
                </Container>
            }
        </>
    )
}