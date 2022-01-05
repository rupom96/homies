import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="mt-5">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fVRxSd9/ban1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption text-left">
                        <h3 className="head-caption" >Welcome to Homies</h3>
                        <p className="head-para" >A Trusted & Loyal Retailer of Real State</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9s5nSwG/ban2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="head-caption">Try Our Services!</h3>
                        <p className="head-para">Our services cant be more affordable and best! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NxzWCwK/ban3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="head-caption">Join Us</h3>
                        <p className="head-para">Contribute us for improvement!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




        </div>
    );
};

export default Banner;