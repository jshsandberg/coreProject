import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Col from "react-bootstrap/esm/Col";
import SpotifyPlayer from "react-spotify-player";


export default function CarouselComponent({arr}) {

  const [count, setCount] = useState(0)

  console.log(arr[count])

    return (
        <>
        <Col>
          <Carousel interval={null} indicators={false} onSelect={(e) => {setCount(e)}}> 
              {arr.map((item, i) => {
                return (
                  <Carousel.Item>
                      <img
                        style={{marginLeft: "27%", width: "45%"}}
                        src={item.images[0].url}
                        alt="First slide"
                      />
                  </Carousel.Item>
                )
              })}
          </Carousel>
        </Col>
        <Col>
          <SpotifyPlayer
              uri={arr[count].uri}
          />
        </Col>

        </>
    )
}