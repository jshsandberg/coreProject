import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RightArrow from "../../utils/right-arrow.svg";
import LeftArrow from "../../utils/left-arrow.svg";
import SpotifyModal from "../Modal/SpotifyModal";
import Spinner from 'react-bootstrap/esm/Spinner';


function Spotify(props) {

    const client_id = "017a12b1f67741a48d49f1860b9d32fd";
    const client_secret = "0b468a31a00f4ac3993afee311172a6e";
    
    const [spotifySelector, setSpotifySelector] = useState();
    const [url, setUrl] = useState();
    const [token, setToken] = useState();
    const [spotifyResultsNewRelease, setSpotifyResultsNewRelease] = useState([]);
    const [spotifyResultsPlaylsit, setSpotifyResultsPlaylsit] = useState([]);
    const [mappedData, setMappedData] = useState([]);
    const [mappedDataPlaylist, setMappedDataPlaylist] = useState([]);
    const [count, setCount] = useState(0);
    const [category, setCategory] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        setUrl(`https://api.spotify.com/v1/browse/new-releases`)
    }, []);
    
    useEffect(() => {
        setSpotifySelector(props.spotifySelector)
    }, [props]);

    useEffect(() => {
        if (spotifySelector === "new-releases") {
            setUrl(`https://api.spotify.com/v1/browse/${spotifySelector}`)
        } else {
            setUrl(`https://api.spotify.com/v1/browse/categories/${spotifySelector}/playlists`)
        };
    }, [spotifySelector]);


    useEffect(() => {

        axios('https://accounts.spotify.com/api/token', {
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
          },
          data: 'grant_type=client_credentials',
          method: 'POST'
        })
        .then(tokenResponse => {      
          setToken(tokenResponse.data.access_token);
    
          axios(url, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
          })
          .then(res => {
              if (url === `https://api.spotify.com/v1/browse/${spotifySelector}`){
                setSpotifyResultsNewRelease(res.data.albums.items);
                setSpotifyResultsPlaylsit([]);
                setCategory(true);
              } else {
                setSpotifyResultsPlaylsit(res.data.playlists.items);
                setSpotifyResultsNewRelease([]);
                setCategory(false);
              }
            })          
        });
      }, [url]); 

      useEffect(() => seperateSpotifyData(), [spotifyResultsNewRelease])

      const seperateSpotifyData = async () => {
        const clonedSpotifiedResutls = await [...spotifyResultsNewRelease];  
        const clonedSpotifiedResutlsPlaylist = await [...spotifyResultsPlaylsit];

            if (clonedSpotifiedResutls !== undefined) {
                let result = [];
                for (let i = 4; i > 0; i--) {
                    result.push(clonedSpotifiedResutls.splice(0, Math.ceil(clonedSpotifiedResutls.length / i)));
                }
                setMappedData(result);
            }

            if (clonedSpotifiedResutlsPlaylist !== undefined) {
                let result2 = [];
                for (let i = 4; i > 0; i--) {
                    result2.push(clonedSpotifiedResutlsPlaylist.splice(0, Math.ceil(clonedSpotifiedResutlsPlaylist.length / i)));
                }
                setMappedDataPlaylist(result2);
            }
        };

    const leftArrow = () => {
        if (count === 0) {
            setCount(3)
        } else {
            setCount(count - 1);
        }
    };

    const rightArrow = () => {
        if (count === 3) {
            setCount(0)
        } else {
            setCount(count + 1);
        }
    };


    if (mappedData.length === 0 || mappedDataPlaylist.length === 0) {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Spinner style={{marginLeft: "auto", marginRight: "auto", display: "block"}} animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        )
    }  else {

            return (
                <>
                    <Container fluid>
                            <Row>
                                <Col xs={1}>
                                    <img onClick={() => leftArrow()} className="left-arrow" src={LeftArrow} alt="left-arrow"></img>
                                </Col>
                                {mappedData[0].length > 1 ? mappedData[count].map((item, i) => {
                                        return (
                                            <>
                                                <Col>
                                                    <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.images[1].url} alt={i} />
                                                    <h3>{item.name}</h3>
                                                    <h4 style={{textAlign: "center"}}>{item.artists[0].name}</h4>
                                                    {item.artists[1] !== undefined ? <h4 style={{textAlign: "center"}}>{item.artists[1].name}</h4> : <div></div>}
                                                </Col>
                                                <SpotifyModal
                                                    item={modalData}
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    token={token}
                                                />
                                            </>
                                        )
                                    })
                                    :
                                    mappedDataPlaylist[count].map((item, i) => {
                                        return (
                                            <>
                                                <Col>
                                                    <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.images[0].url} alt={i} />
                                                    <h3>{item.name}</h3>
                                                </Col>
                                                <SpotifyModal
                                                    item={modalData}
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    token={token}
                                                />
                                            </>
                                        )
                                    })
                                }
                                <Col xs={1}>
                                    <img onClick={() => rightArrow()} className="right-arrow" src={RightArrow} alt="right-arrow"></img>
                                </Col>
                            </Row>
                    </Container>
                </>
            )
        }
}


export default Spotify;