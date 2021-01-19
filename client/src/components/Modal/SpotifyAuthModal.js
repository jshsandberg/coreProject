import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import "./Modal.css";

function SpotifyAuthModal(props) {

    const history = useHistory();

    const client_id = "017a12b1f67741a48d49f1860b9d32fd";
    const client_secret = "0b468a31a00f4ac3993afee311172a6e";
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const clientId = "017a12b1f67741a48d49f1860b9d32fd";
    const redirectUri = "http://localhost:3000/home/";
    const scopes = [
        "user-top-read",
        "user-read-currently-playing",
        "user-read-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private"
    ];


    const buttonStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }


    return (
        <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Link your account with Spotify?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <a href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                        <Button style={buttonStyle}>                      
                            Yes
                        </Button>   
                    </a> 
                    </div>
                    <div className="col">
                        <Button onClick={() => history.push({pathname: "/home"})} style={buttonStyle}>No</Button>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            By linking your account, you will be able to listen to the complete song reviewed either by you or your friends.
        </Modal.Footer>
      </Modal>
        </>
    )
};

export default SpotifyAuthModal;