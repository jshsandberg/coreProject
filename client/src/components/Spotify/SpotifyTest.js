import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SpotifyWebApi from "../../../client/node_modules/spotify-web-api-js";
import SpotifyPlayer from "react-spotify-player";
import SpotifyPlayerSDK from '../../../client/node_modules/react-spotify-web-playback';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RightArrow from "../../utils/right-arrow.svg";
import LeftArrow from "../../utils/left-arrow.svg";
import VideoGameModal from "../Modal/VideoGameModal";
import Modal from 'react-bootstrap/esm/Modal';



function SpotifyFinder() {

//    //const spotifyApi = new SpotifyWebApi();

    const client_id = "017a12b1f67741a48d49f1860b9d32fd";
    const client_secret = "0b468a31a00f4ac3993afee311172a6e";

  const authEndpoint = "https://accounts.spotify.com/authorize";

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = "017a12b1f67741a48d49f1860b9d32fd";
  const redirectUri = "http://localhost:3000/spotify/";
  const scopes = [
      "user-top-read",
      "user-read-currently-playing",
      "user-read-playback-state",
      "streaming",
      "user-read-email",
      "user-read-private"
  ];

//   const params = useParams();
  



    const [token, setToken] = useState("");
//     const [urlHash, setUrlHash] = useState();

//     const getAuth = () => {
//       let _token = urlHash.access_token;
//       setToken(_token);
//       console.log(token)
//     }



//     const spotifyCheck = () => {
//         // spotifyApi.setAccessToken("BQBST6xzSvlE05RsoV7BN8_XA4HrVEmeJ0gDmhtVjFnNuh6OaWdWFq5pKh_nj7Yp5poHifr7mPs1L-rw64o");
//         // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
//         //     if (err) console.error(err);
//         //     else console.log('Artist albums', data);
//         //     });
//         // spotifyApi.searchTracks('artist:Love').then(
//         //     function (data) {
//         //       console.log('Search tracks by "Love" in the artist name', data);
//         //     },
//         //     function (err) {
//         //       console.error(err);
//         //     }
//         //   );
//         // spotifyApi.searchTracks('Love').then(
//         //     function (data) {
//         //       console.log('Search by "Love"', data);
//         //     },
//         //     function (err) {
//         //       console.error(err);
//         //     }
//         //   );
//         console.log(params);
//         const hash = window.location.hash
//         .substring(1)
//         .split("&")
//         .reduce(function(initial, item) {
//           if (item) {
//             var parts = item.split("=");
//             initial[parts[0]] = decodeURIComponent(parts[1]);
//           }
//           return initial;
//         }, {});
//       window.location.hash = "";

//       console.log(hash)
//       setUrlHash(hash)

//     }

//     const getSong = () => {
//     //   console.log(token)
//     //   const authOptions = {
//     //     url: 'https://accounts.spotify.com/api/token',
//     //     params: {
//     //       code: token,
//     //       redirect_uri: redirectUri,
//     //       grant_type: 'authorization_code'
//     //     },
//     //     headers: {
//     //       'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//     //     },
//     //     json: true
//     //   };

//     //   axios.post('https://accounts.spotify.com/api/token').then(res => console.log(res));


//     // axios({
//     //   //url: "https://api.spotify.com/v1/me/top/artists", 
//     //   url: "https://api.spotify.com	/v1/browse/new-releases",
//     //   method: "get",
//     //   headers: {
//     //     // Accept: "application/json",
//     //     // Content-Type: "application/json",
//     //     'Authorization': "Bearer " + token
//     //   }
//     // })
//     // .then(res => console.log(res))

//     //  }
    

  

//     // useEffect(() => {
//     //   // axios({
//     //   //   url: 'https://accounts.spotify.com/api/token',
//     //   //   method: "POST",
//     //   //   params: {
//     //   //     grant_type: 'authorization_code'
//     //   //   },
//     //   //   headers: {
//     //   //     'Authorization' : Basic + "MDE3YTEyYjFmNjc3NDFhNDhkNDlmMTg2MGI5ZDMyZmQ6MGI0NjhhMzFhMDBmNGFjMzk5M2FmZWUzMTExNzJhNmU="

//     //   //   }
//     //   // }).then(res => console.log(res))

//     // },[])

//     // window.onSpotifyWebPlaybackSDKReady = () => {
//     //   const token = '[My Spotify Web API access token]';
//     //   const player = new Spotify.Player({
//     //     name: 'Web Playback SDK Quick Start Player',
//     //     getOAuthToken: cb => { cb(token); }
//     //   });
    
//     //   // Error handling
//     //   player.addListener('initialization_error', ({ message }) => { console.error(message); });
//     //   player.addListener('authentication_error', ({ message }) => { console.error(message); });
//     //   player.addListener('account_error', ({ message }) => { console.error(message); });
//     //   player.addListener('playback_error', ({ message }) => { console.error(message); });
    
//     //   // Playback status updates
//     //   player.addListener('player_state_changed', state => { console.log(state); });
    
//     //   // Ready
//     //   player.addListener('ready', ({ device_id }) => {
//     //     console.log('Ready with Device ID', device_id);
//     //   });
    
//     //   // Not Ready
//     //   player.addListener('not_ready', ({ device_id }) => {
//     //     console.log('Device ID has gone offline', device_id);
//     //   });
    
//     //   // Connect to the player!
//     //   player.connect();
//     // };
    const check = () => {
      axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(clientId + ':' + client_secret)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
      .then(tokenResponse => {      
        setToken(tokenResponse.data.access_token);
  
        axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
          method: 'GET',
          headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        })
        .then (res => {console.log(res)})       
    })
  }
    

//     // return (
//     //     <>
//     //     <SpotifyPlayer
//     //       uri="spotify:artist:26T4yOaOoFJvUvxR87Y9HO"
//     //     />
  
//     //         <button onClick={() => spotifyCheck()}>Login With Spotify</button>

//     //         <a
//     //     className="btn btn--loginApp-link"
//     //     href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//     //       "%20"
//     //     )}&response_type=token&show_dialog=true`}
//     //   >
//     //     Login to Spotify
//     //   </a>


//     //   <button onClick={() => getAuth()}>Exchange</button>

//     //   <button onClick={() => getSong()}>Song</button>


//     //       <SpotifyPlayerSDK
//     //       token={token}
//     //       uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
//     //       />;

//     //     </>
//     // )

    return (
        <>
           <Container fluid>
                    <Row>
                        <Col xs={1}>
                            <img 
                            // onClick={() => leftArrow()} 
                            className="left-arrow" src={LeftArrow} alt="left-arrow"></img>
                        </Col>
                            <Col>
                                {/* <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.image} alt={i} /> */}
                                <h3>hello</h3>
                                <a
                                  className="btn btn--loginApp-link"
                                  href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                                    "%20"
                                  )}&response_type=token&show_dialog=true`}
                                >
                                  Login to Spotify
                                </a>
                            </Col>
                            <Col>
                                {/* <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.image} alt={i} /> */}
                                <h3>hello</h3>
                                <button onClick={check} />
                            </Col>
                            <Col>
                                {/* <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.image} alt={i} /> */}
                                <h3>hello</h3>
                            </Col>
                            <Col>
                                {/* <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.image} alt={i} /> */}
                                <h3>hello</h3>
                            </Col>
                            <Col>
                                {/* <img onClick={() => {setModalShow(true); setModalData(item)}} className="image-flex" src={item.image} alt={i} /> */}
                                <h3>hello</h3>
                            </Col>
                        <Col xs={1}>
                            <img 
                            // onClick={() => rightArrow()}
                             className="right-arrow" src={RightArrow} alt="right-arrow"></img>
                        </Col>
                    </Row>
                </Container>
        </>
      )
}


export default SpotifyFinder