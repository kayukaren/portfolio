import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import LandscapeIcon from '@material-ui/icons/Landscape';
import SportsIcon from '@material-ui/icons/Sports';
import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay';


// import some demo images
import img1 from '../materialize-assets/img/examples/studio-1.jpg';
import img2 from '../materialize-assets/img/examples/studio-2.jpg';
import img3 from '../materialize-assets/img/examples/studio-3.jpg';
import img4 from '../materialize-assets/img/examples/studio-4.jpg';
import img5 from '../materialize-assets/img/examples/studio-5.jpg';

// env portfolio
import imgHorrorHouse from '../img/portfolioImgs/Small_Image/Horror_House_May2019.jpg';
import imgOtherWorld from '../img/portfolioImgs/Small_Image/Other_World_Aug2018.jpg';

// props
import imgFreezeFinal from '../img/portfolioImgs/Small_Image/FreezeFinal.png';
import imgRock from '../img/portfolioImgs/Small_Image/Rock_Aug2020.png';
import imgGun from '../img/portfolioImgs/Small_Image/Gun_Jun2020.png';
import imgAirCompressor from '../img/portfolioImgs/Small_Image/AirCompressor.jpg';



class ArtworkImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hover: false };
        this.toggleEnter = this.toggleEnter.bind(this);
        this.toggleLeave = this.toggleLeave.bind(this);
    }

    toggleEnter() {
        this.setState({ hover: true });
    }

    toggleLeave() {
        this.setState({ hover: false })
    }

    render() {
        const portfolioImgStyle = {
            maxWidth: '100%',
            maxHeight: 'auto',
            padding: '5px',
            borderRadius: '25px'
        };
        if (this.state.hover) {
            portfolioImgStyle.WebkitFilter = 'blur(2px)';
            portfolioImgStyle.filter = 'blur(2px)';
        }
        const hoverTextStyle = {
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            background: 'rgb(0, 0, 0)', /* fallback color */
            background: 'rgba(0, 0, 0, 0)',
            zIndex: 3,
            mixBlendMode: 'difference'
        }

        const hoverSubtitleStyle = {
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            background: 'rgb(0, 0, 0)', /* fallback color */
            background: 'rgba(0, 0, 0, 0)',
            zIndex: 3,
            mixBlendMode: 'difference'
        }
        return (
            <Container onMouseEnter={this.toggleEnter} onMouseLeave={this.toggleLeave} className='m-0 px-1' style={{ display: 'inline-flex', position: 'relative', zIndex: 1, justifyContent: 'center', flexDirection: "column", textAlign: "center" }}>

                <img src={this.props.DisplayImg} style={portfolioImgStyle} />
                {this.state.hover && <h3 style={hoverTextStyle}> {this.props.DisplayTitle} </h3>}
                {this.state.hover && <p style={hoverSubtitleStyle}> {this.props.DisplaySubtitle} </p>}


            </Container>
        )
    }
}


class DetailArtwork extends React.Component {



    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row className='justify-content-md-center'>
                    <Col md={4}>
                        <Nav variant="pills" className='justify-content-center'>

                            <Nav.Item>

                                <Nav.Link eventKey="first">
                                    <Container>
                                        <Row className='justify-content-center mb-2'>
                                            <LandscapeIcon style={{ fontSize: '36px' }} />
                                        </Row>
                                        <Row className='justify-content-center my-1'>
                                            Environment
                                        </Row>
                                    </Container>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <Container>
                                        <Row className='justify-content-center mb-2'>
                                            <SportsIcon style={{ fontSize: '36px' }} />
                                        </Row>
                                        <Row className='justify-content-center my-1'>
                                            Props
                                        </Row>
                                    </Container>
                                </Nav.Link>
                            </Nav.Item>


                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" className='text-center gallery'>
                                <Container>
                                    <Row className='justify-content-center my-3'>
                                        <Col md={1} />
                                        <Col md={5} className='mx-auto'>
                                            {/* <img src={img1} style={portfolioImgStyle}></img> */}
                                            {/* <ArtworkImage DisplayImg={img1} DisplayText='more details' />
                                            <ArtworkImage DisplayImg={img2} DisplayText='more details' /> */}
                                            <ArtworkImage DisplayImg={imgHorrorHouse} DisplayTitle='Horror House' DisplaySubtitle='2019' />

                                        </Col>
                                        <Col md={5} className='mx-auto'>
                                            <ArtworkImage DisplayImg={imgOtherWorld} DisplayTitle='Other World' DisplaySubtitle='2018' />
                                        </Col>
                                        <Col md={1} />
                                    </Row>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Container>
                                    <Row className='justify-content-center my-3'>
                                        <Col md={1} />
                                        <Col md={5} className='mx-auto'>

                                            <ArtworkImage DisplayImg={imgFreezeFinal} DisplayTitle='Mr. Freeze Diorama' DisplaySubtitle='2020' />
                                            <ArtworkImage DisplayImg={imgRock} DisplayTitle='Duck Bill Rock' DisplaySubtitle='2020' />

                                        </Col>
                                        <Col md={5} className='mx-auto'>
                                            <ArtworkImage DisplayImg={imgGun} DisplayTitle='Gun' DisplaySubtitle='2020' />
                                            <ArtworkImage DisplayImg={imgAirCompressor} DisplayTitle='Air Compressor' DisplaySubtitle='2019' />
                                        </Col>
                                        <Col md={1} />
                                    </Row>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container >
        )
    }
}

export default DetailArtwork;