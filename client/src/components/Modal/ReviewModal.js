import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import { UserContext } from "../../context/userContext";
import { saveReview } from "../Functions/SaveReview";
import "./Modal.css";


function ReviewModal(props) {

    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    const [value, setValue] = useState("");


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
            Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={(e) => saveReview(e, value, user, props.item.id)}>
                <label>Review:
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />   
            </form>               
           <Button onClick={props.onHide} style={buttonStyle}>Close</Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        </>
    )
};

export default ReviewModal