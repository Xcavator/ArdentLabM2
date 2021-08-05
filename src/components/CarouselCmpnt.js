import React from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselCmpnt extends React.Component {
  render() {
    return (
        <div id="carousel-cmpnt-container">
          <Carousel autoplay showThumbs={false}>
              <div>
                  <img src="/assets/1.jpg" alt='img1' />
              </div>
              <div>
                  <img src="/assets/2.jpg" alt='img2'/>
              </div>
              <div>
                  <img src="/assets/3.jpg" alt='img3'/>
              </div>
          </Carousel>
        </div>
    );
  }
};

export default CarouselCmpnt;