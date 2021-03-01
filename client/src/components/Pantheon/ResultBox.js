import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import { GetResults } from "../Functions/GetResults";
import { UserContext } from "../../context/userContext";


export default function ResultBox() {

    const {user, setUser} = useContext(UserContext);
    const [resultArr, setResultArr] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {

        const checkForResults = async () => {
            await GetResults(user)
        }
    }, []);


    return (
        <>
            {!isLoading &&
                <Container style={{borderStyle: "solid", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor: "white"}}>
                    <Row>
                        {resultArr.map((item, i) => {
                            return (
                                <>
                             
                                </>
                            )
                        })}
                    </Row>
                </Container>
            }
        </>
    )
}