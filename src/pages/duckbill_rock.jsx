import React from 'react';

// template page
import { ArtWorkSoloPage } from "../components/ArtWorkPage";

// header image
import imgRock from '../img/portfolioImgs/Small_Image/Rock_Aug2020.png';
// lower images
import imgRock2 from "../img/portfolioImgs/jade-luo-highlowpoly.jpg";


function DuckBillPage(props) {
    return (
        <ArtWorkSoloPage
            ArtWorkName="Duck Bill Rock"
            OneLineExplain="Use reference photos for duckbill rock to make a photorealistic model. Final renders are done by UE4."
            HeaderImage={imgRock}
            SecondaryImage={imgRock2}
            MarmosetIframeSrc="https://www.artstation.com/embed/29272101"
        ></ArtWorkSoloPage>
    )
}

export default DuckBillPage;