import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import { UserContext } from "../../context/userContext";
import "./Modal.css";

function AuthTokenModal(props) {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);


    const buttonStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    }

    const confirmedUser = () => {
        setUser(props.tokenUser);
        history.push({pathname: "/home"});
        props.onHide();
     


    };

    const declinedUser = () => {
        localStorage.removeItem('auth-token');
        history.push({pathname: "/"});
        props.onHide();
      

    

    };
    

    return (
        <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.tokenUser === undefined ? <div></div> : <h3>Is this your account, {props.tokenUser.name}?</h3>}                        
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div style={{textAlign: "center"}}>
                            {props.tokenUser === undefined ? <div></div> : <h3>{props.tokenUser.username}</h3>}                        
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <Button onClick={() => confirmedUser()} style={buttonStyle}>Yes</Button>
                    </div>
                    <div className="col">
                        <Button closeButton onClick={() => declinedUser()} style={buttonStyle}>No</Button>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        </>
    )
};

export default AuthTokenModal;