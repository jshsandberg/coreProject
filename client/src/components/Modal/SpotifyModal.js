import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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


  const history = useHistory();

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [uri, setUri] = useState();

  useEffect(() => {
      if (props.mediaType === "track" && props.item !== null) {
        setImage(props.item.album.images[1].url);
        setName(props.item.name);
        setUri(props.item.uri)
      }
      else if (props.mediaType === "album" && props.item !== null) {
        setImage(props.item.images[1].url);
        setName(props.item.name);
        setUri(props.item.uri);
      }
      else if (props.mediaType === "artist" && props.item !== null) {
        setImage(props.item.images[1] === undefined ? <div></div> : props.item.images[1].url);
        setName(props.item.name);
        setUri(props.item.uri);
      }
    else if (props.item !== null) {
      setImage(props.item.images[0].url);
      setName(props.item.name);
      setUri(props.item.uri);
    }
  }, [props]);

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
                    {name}
                </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <SpotifyPlayer
                        uri={uri}
                    />
                    </div>
                    <div className="col">
                      {props.track !== undefined ? <h3>Friend review goes here if any</h3> : <img className="videoGameImage" src={image} alt={name} />}
                      <br></br>
                      <br></br>
                      <Button onClick={() => history.push({pathname: `/review/${name}`, state: { item: props.item, mediaType: props.mediaType }})}>Go to Review</Button>
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