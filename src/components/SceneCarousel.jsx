import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'



// some demo pics to start with
import bg1 from '../materialize-assets/img/bg.jpg';
import bg2 from '../materialize-assets/img/bg2.jpg';
import bg3 from '../materialize-assets/img/bg3.jpg';

// import header from 'material-kit-react/src'

import imgAirCompressor from '../img/portfolioImgs/AirCompressor1.jpg';
import imgFreeze from '../img/portfolioImgs/Freeze1.png';
import imgGun from '../img/portfolioImgs/Gun1.png';
import imgHouse from '../img/portfolioImgs/House1.jpg';
import imgOtherWorld from '../img/portfolioImgs/OtherWorld1.jpg';
import imgRock from '../img/portfolioImgs/Rock_Aug2020.png';


class SceneCarousel extends React.Component {
    render() {
        return (
            <Row className='px-md-5 mx-md-5'>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgAirCompressor}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgFreeze}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgGun}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgHouse}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgOtherWorld}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgRock}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        )
    }
}

export default SceneCarousel;