import React from "react";
import Carousel from "react-bootstrap/Carousel";


const Slider = ({start}) => {
  return (
    <Carousel fade>
       {start.map((ele, i) => (
         <Carousel.Item key={i}>
            <img className="d-block w-100" src={ele} alt="First slide" />
         </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Slider;
