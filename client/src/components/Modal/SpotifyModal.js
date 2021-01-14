import React from "react";
import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/esm/Button';
import "./Modal.css";
import SpotifyPlayer from "react-spotify-player";


// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ButtonGroup from 'react-bootstrap/ButtonGroup'


function SpotifyModal(props) {


    console.log(props);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
                <div style={{textTransform: "capitalize"}}>
                    {props.item.name}
                </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <SpotifyPlayer
                        uri={props.item.uri}
                    />
                    </div>
                    <div className="col">
                      <img className="videoGameImage" src={props.item.images[0].url} alt={props.item.name} />
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

export default SpotifyModal;