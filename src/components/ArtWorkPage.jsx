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
import Jumbotron from 'react-bootstrap/Jumbotron';

import Header from '../components/Header';

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



class ArtWorkSoloPage extends React.Component {

    render() {
        const headerImgStyle = {
            maxWidth: '80%',
            maxHeight: 'auto',
            padding: '5px',
            borderRadius: '25px'
        };

        const lowerImgStyle = {
            maxWidth: '80%',
            maxHeight: 'auto',
            padding: '5px',
            borderRadius: '25px'
        };
        return (

            <>
                <Header></Header>
                <Jumbotron>
                    <h1>{this.props.ArtWorkName}</h1>
                </Jumbotron>
                <Row>
                    <Col>
                        <img src={this.props.HeaderImage} style={headerImgStyle}></img>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <h3>{this.props.OneLineExplain}</h3>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={this.props.SecondaryImage} style={lowerImgStyle}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>
                            Marmoset Live Rendering
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe
                            width="720px"
                            height="640px"
                            src={this.props.MarmosetIframeSrc}
                            frameborder="0"
                            allowfullscreen
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            onmousewheel=""
                            scrolling="no">
                        </iframe>
                    </Col>
                </Row>
            </>
        )
    }
}

class ArtWorkTeamPage extends React.Component {

    render() {
        const headerImgStyle = {
            maxWidth: '100%',
            maxHeight: '80%',
            padding: '5px',
            borderRadius: '25px'
        };

        const lowerImgStyle = {
            maxWidth: '80%',
            maxHeight: 'auto',
            padding: '5px',
            borderRadius: '25px'
        };
        var respon_list = this.props.Responsibilities.map(
            function map_resp(resp) {
                return (<li className="text-left"> {resp}</li>)
            }
        )
        var secondaryImgList = this.props.SecondaryImage.map(
            function sec_img(img) {
                return (<img src={img} style={lowerImgStyle}></img>)
            }
        )
        return (

            <>
                <Header></Header>
                <Jumbotron>
                    <h1>{this.props.ArtWorkName}</h1>
                </Jumbotron>
                <Row>
                    <Col md={6} className="my-auto">
                        <img src={this.props.HeaderImage} style={headerImgStyle}></img>
                    </Col>
                    <Col className="my-auto">
                        <h3 className="text-left">Development Time: {this.props.DevTime}</h3>
                        <h3 className="text-left">Team Size: {this.props.TeamSize}</h3>
                        <h3 className="text-left">Engine: {this.props.Engine}</h3>
                        <h3 className="text-left">Platform: {this.props.Platform}</h3>
                        <h3 className="text-left">Tools: {this.props.Tools}</h3>
                        <h3 className="text-left">Responsibilities:</h3>
                        <ul>
                            {respon_list}
                        </ul>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col />
                    <Col md={6}>
                        <h3 >{this.props.OneLineExplain}</h3>
                    </Col>
                    <Col />
                </Row>

                {/* <Row>
                    <Col />
                    <Col md={8}>
                        <Row>
                            <Col><h3>Responsibilities:</h3></Col>
                        </Row>
                        <Row>
                            <Col md={1} />
                            <Col className="text-left">{respon_list}</Col>
                        </Row>

                    </Col>
                    <Col />
                </Row> */}


                <Row>
                    <Col>
                        <h3>
                            Additional Images:
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {secondaryImgList}
                    </Col>
                </Row>
            </>
        )
    }
}

export { ArtWorkSoloPage, ArtWorkTeamPage };