import React from 'react';

import { ThumbnailImg, WorkThumbnailPage } from "../components/WorkThumbnail";

import rockBanner from "../img/portfolioImgs/Rock_Aug2020.png"

function ThreeDThumbnailPage(props) {

    var thumbnailImgs = [
        <ThumbnailImg tmbImg={rockBanner} href="#duckbill" />
    ];

    return (
        <WorkThumbnailPage WorkTitle="3D Art" thumbnailImgs={thumbnailImgs}></WorkThumbnailPage>
    )

}

export default ThreeDThumbnailPage;