// import React, { useEffect, useState } from "react";
// import Container from 'react-bootstrap/esm/Container';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
// import Card from 'react-bootstrap/Card';
// import SpotifyModal from "../Modal/SpotifyModal";

// function Media(props) {

//    console.log(props)

//     const [trackProps, setTrackProps] = useState(props.media.tracks);
//     const [albumProps, setAlbumProps] = useState(props.media.albums);
//     const [artistProps, setArtistProps] = useState(props.media.artists);
//     const [finalArtist, setFinalArtist] = useState();
//     const [mediaType, setMediaType] = useState();
//     const [mediaInfo, setMediaInfo] = useState(null);
//     const [modalShow, setModalShow] = useState(false);
//     const [modalData, setModalData] = useState(null);

//     useEffect(() => {

//     }, [])
    
//     useEffect(() => {

//         const artist = [];


//         if (artistProps !== undefined && artistProps.items !== undefined) {
//             for (let i = 0; i < artistProps.items.length; i++) {
//                 if (artistProps.items[i].images.length !== 0) {
//                 artist.push(artistProps.items[i]);
//                 };
//             };
//             setFinalArtist(artist);
//         };   

        

//     }, [props]);


//     return (
//         <>
//             <Container fluid>
//                 <Row>
//                     <Col xs={9}>
//                         <Container fluid>
//                             <Row>
//                                 {trackProps && trackProps.items.map((items, i) => {
//                                     return (
//                                         <>
//                                             <Col xs={3}>
//                                                 <img onClick={() => {setModalShow(true); setModalData(items)}} onMouseEnter={() => setMediaInfo(items)} style={{width: "115%"}} src={items.album.images[1].url}></img>
//                                             </Col>
//                                         </>
//                                     )
//                                 })}
//                                    {albumProps && albumProps.items.map((items, i) => {
//                                     return (
//                                         <>
//                                             <Col xs={3}>
//                                                 <img onClick={() => {setModalShow(true); setModalData(items)}} onMouseEnter={() => setMediaInfo(items)} style={{width: "115%"}} src={items.images[1].url}></img>
//                                             </Col>
//                                         </>
//                                     )
//                                 })}
//                                 {finalArtist && finalArtist.map((items, i) => {
//                                     return (
//                                         <>
//                                             <Col xs={3}>
//                                                <img onClick={() => {setModalShow(true); setModalData(items)}} onMouseEnter={() => setMediaInfo(items)} style={{width: "115%"}} src={items.images[1].url}></img>
//                                             </Col>
//                                         </>
//                                     )
//                                 })}
//                             </Row>
//                         </Container>
//                     </Col>
//                     <Col>
//                         <Container>
//                             <Row>
//                                 <Col>
//                                     <div>
//                                         {trackProps !== undefined && 
//                                         <>
//                                             <h4>Artist Name : {mediaInfo !== null ? mediaInfo.artists[0].name : <div></div>}</h4>
//                                             <br></br>
//                                             <h4>Album Name : {mediaInfo !== null ? mediaInfo.album.name : <div></div>}</h4>
//                                             <br></br>
//                                             <h4>Song Name : {mediaInfo !== null ? mediaInfo.name : <div></div>}</h4>
//                                         </>
//                                         }
//                                         {albumProps !== undefined && 
//                                         <>
//                                             <h4>Artist Name : {mediaInfo !== null ? mediaInfo.artists[0].name : <div></div>}</h4>
//                                             <br></br>
//                                             <h4>Album Name : {mediaInfo !== null ? mediaInfo.name : <div></div>}</h4>
//                                         </>
//                                         }
//                                         {artistProps !== undefined &&  
//                                         <>
//                                             <h4>Artist Name : {mediaInfo !== null ? mediaInfo.name : <div></div>}</h4>
//                                             <br></br>
//                                             <h4>Followers : {mediaInfo !== null ? mediaInfo.followers.total: <div></div>}</h4>
//                                         </>
//                                         }
//                                     </div>
//                                 </Col>
//                             </Row>

//                         </Container>
//                     </Col>
//                 </Row>
//             </Container>
//             <SpotifyModal
//             item={modalData}
//             show={modalShow}
//             onHide={() => setModalShow(false)}
//             mediaType ={trackProps !== undefined ? "track" : albumProps !== undefined ? "album" : "artist"}
//             //token={token}
//             />

//         </>
//     )
    

// };

// export default Media;