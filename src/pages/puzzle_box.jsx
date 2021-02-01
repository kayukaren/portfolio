import React from 'react';

// template page
import { ArtWorkTeamPage } from "../components/ArtWorkPage";

// header image
import banner from '../img/puzzleBox/PuzzleBox_Banner.png';
// lower images
import imgPuzzleBox1 from "../img/puzzleBox/1.png";
import imgPuzzleBox2 from "../img/puzzleBox/2.jpg";
import imgPuzzleBox3 from "../img/puzzleBox/3.jpg";
import imgPuzzleBox4 from "../img/puzzleBox/4.jpg";
import imgPuzzleBox5 from "../img/puzzleBox/5.jpg";
import imgPuzzleBox6 from "../img/puzzleBox/6.png";



function PuzzleBox(props) {
    return (
        <ArtWorkTeamPage
            ArtWorkName="Puzzle Box Palace"
            OneLineExplain="Puzzle Box Palace is an escape room style puzzle game where you are pulled into your grandfather's magical puzzle box. Solve puzzles, manipulate the puzzle box, and jump across furniture as you look for a way out."
            HeaderImage={banner}
            DevTime="Approximately 200 hours per person"
            TeamSize="12 People"
            Engine="Unreal Engine 4"
            Platform="PC and PS4"
            Tools="3ds Max, Photoshop, Zbrush, Substance Painter, Substance Designer, UE4"
            Responsibilities={["Make decision for art vision and make sure art style stays consistent throughout the game"
                , "Create Art Style Guide for color palette, interior design, shape language, and lighting guideline"
                , "Collaborate with Game Designer, Level Design Lead, and Programming Lead"
                , "Assign tasks for art team and communicate with external artist"
                , "Furniture and puzzle elements modeling using 3ds Max"
                , "Make part of the base materials using Substance Designer and Photoshop"
                , "Create textures for props and environment art assets"
                , "Environment lighting"]}
            SecondaryImage={[imgPuzzleBox1, imgPuzzleBox2, imgPuzzleBox3, imgPuzzleBox4, imgPuzzleBox5, imgPuzzleBox6]}

        ></ArtWorkTeamPage>
    )
}

export default PuzzleBox;