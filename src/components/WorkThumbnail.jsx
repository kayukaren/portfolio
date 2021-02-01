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

function zip(arrays) {
    return Array.apply(null, Array(arrays[0].length)).map(function (_, i) {
        return arrays.map(function (array) { return array[i] })
    });
}


class ThumbnailImg extends React.Component {
    render() {
        const thumbnailImgStyle = {
            maxWidth: '80%',
            maxHeight: 'auto',
        };
        return (<Col className="mx-1"><a href={this.props.href}><img src={this.props.tmbImg} style={thumbnailImgStyle} /></a></Col>)
    }
}

class WorkThumbnailPage extends React.Component {

    render() {
        const headerImgStyle = {
            maxWidth: '80%',
            maxHeight: 'auto',
            padding: '5px',
            borderRadius: '25px'
        };


        return (

            <>
                <Header></Header>
                <Jumbotron>
                    <h1>{this.props.WorkTitle} Project Thumbnails</h1>
                </Jumbotron>
                <Row>
                    {this.props.thumbnailImgs}
                </Row>
            </>
        )
    }
}


export { ThumbnailImg, WorkThumbnailPage };