import React from 'react';

import { ThumbnailImg, WorkThumbnailPage } from "../components/WorkThumbnail";

import puzzleBoxBanner from "../img/puzzleBox/PuzzleBox_Banner.png"

function TeamThumbnailPage(props) {

    var thumbnailImgs = [
        <ThumbnailImg tmbImg={puzzleBoxBanner} href="#puzzlebox" />
    ];

    return (
        <WorkThumbnailPage WorkTitle="Team" thumbnailImgs={thumbnailImgs}></WorkThumbnailPage>
    )

}

export default TeamThumbnailPage;