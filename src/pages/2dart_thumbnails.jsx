import React from 'react';

import { ThumbnailImg, WorkThumbnailPage } from "../components/WorkThumbnail";

import boneBanner from "../img/bone.jpeg"
import sculptureBanner from "../img/sculpture.jpeg"

function TwoDThumbnailPage(props) {

    var thumbnailImgs = [
        <ThumbnailImg tmbImg={boneBanner} href="" />,
        <ThumbnailImg tmbImg={sculptureBanner} href="" />
    ];

    return (
        <WorkThumbnailPage WorkTitle="2D Art" thumbnailImgs={thumbnailImgs}></WorkThumbnailPage>
    )

}

export default TwoDThumbnailPage;