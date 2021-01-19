import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import { UserContext } from "../../context/userContext";
import "./Modal.css";

function NoAccessModal(props) {

    const history = useHistory();

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
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Looks like you are not signed in! Please Login or Singup to Access this page!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Button onClick={() => history.push({pathname: "/"})} style={buttonStyle}>Welcome Page</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        </>
    )
};

export default NoAccessModal;