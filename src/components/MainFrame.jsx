import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';

import { Parallax, Background } from 'react-parallax';

// import some test image
// import bgImage1 from '../materialize-assets/img/bg.jpg';
import bgImage1 from '../img/sculpture.jpeg';

// headshot
// import headshot from '../materialize-assets/img/faces/avatar.jpg';
import headshot from '../img/head.jpeg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PinterestIcon from '@material-ui/icons/Pinterest';

// carousel
import SceneCarousel from './SceneCarousel';

// navbar
import Header from './Header';

// detail artwork
import DetailArtwork from './DetailArtwork';

class MainFrame extends React.Component {
    render() {
        return (
            <>

                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={bgImage1}
                    bgImageAlt="the background"
                    strength={-200}
                    bgImageStyle={{ top: '-5rem' }}
                >
                    {/* Blur transition from min to max */}
                    <div style={{ height: 600 }}></div>
                </Parallax>
                <Header></Header>

                <div className='main main-raised'>
                    <Row className='justify-content-md-center'>
                        <Col md={"auto"} >
                            <Media className='avatar' style={{ transform: 'translateY(-50%)' }}>
                                <img src={headshot} alt='circle headshot' className="img-raised rounded-circle img-fluid" style={{ maxWidth: '150px', maxHeight: '150px' }}></img>
                            </Media>
                            <Row style={{ position: 'relative', top: '-75px' }}>
                                <Col>
                                    <h3>Jade Luo</h3>
                                    <h5>3D Artist</h5>
                                    <PinterestIcon />
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col className='mx-3'>
                            <SceneCarousel></SceneCarousel>
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col>
                            <DetailArtwork />
                        </Col>
                    </Row>

                </div>
            </>
        )
    }
}

export default MainFrame;