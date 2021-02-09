import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import HomeNavbar from "../components/NavBar/HomeNavBar";
import VideoGame from "../components/VideoGame/VideoGame";
import NoAccessModal from "../components/Modal/NoAccessModal";
import SearchBar from "../components/SearchBar/SearchBar";
// import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
import axios from "axios";
import API from "../utils/API";
import { UserContext } from "../context/userContext";
// import Alert from 'react-bootstrap/Alert'
// import Button from 'react-bootstrap/Button'



  
  

function HomePage(props) {

    const history = useHistory();


    const {user, setUser} = useContext(UserContext);
    const [token, setToken] = useState();
    const [modalShow, setModalShow] = useState(false);

    const jwt = require("jsonwebtoken");





    useEffect(() => {
   
        getHash();
        getUserId();

        }, [])

    useEffect(() => {
 
        axios({
            url: "https://api.spotify.com/v1/me/top/artists", 
            method: "get",
            headers: {
              'Authorization': "Bearer " + token
            }
          })
          .then(res => console.log(res))

    }, [token]);

    const getHash = async () => {

        const hash = window.location.hash
        .substring(1)
        .split("&")
        .reduce(function(initial, item) {
            if (item) {
                var parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
                }
            return initial;
        }, {});
        window.location.hash = "";
        setToken(hash.access_token)
    }

    const getUserId = async () => {

        let _token = localStorage.getItem("auth-token");
            if (_token === null) {
                setModalShow(true);
            } else {
                const decoded = jwt.verify(_token, "secret");  
                try {
                  const newUser = await API.getUserbyId(decoded.id);
                  setUser(newUser.data)
                } catch(err) {
                  console.log(err)
                  }
            }
    }

    const bottomBorder = {
        borderBottom: "double"
    }

    return (
        <>
            <Header />
            <HomeNavbar user = {props} />
            <SearchBar />
            <br></br>
            <br></br>
            <Row style={bottomBorder}>
                <h1 style={{paddingLeft: "20px"}}>Video Games</h1>
            </Row>
            <br></br>
            <VideoGame />
            <NoAccessModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              backdrop="static"
              keyboard={false}
            />
        </>
    )
}

export default HomePage;