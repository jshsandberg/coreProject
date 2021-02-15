import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Col from "react-bootstrap/esm/Col";

export default function CarouselComponent({arr}) {

    return (
        <>
        <Col>
          <Carousel interval={null} indicators={false}> 
              {arr.map((item, i) => {
                return (
                  <Carousel.Item>
                      <img
                        style={{marginLeft: "26%", width: "45%"}}
                        src={item.images[0].url}
                        alt="First slide"
                      />
                  </Carousel.Item>
                )
              })}
          </Carousel>
        </Col>
        <Col>
        
        </Col>

        </>
    )
}