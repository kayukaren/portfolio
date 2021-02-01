import React from 'react';
import logo from './logo.svg';
import './App.css';

import './materialize-assets/css/material-kit.css'

import SceneCarousel from './components/SceneCarousel';
import Header from './components/Header';
import MainFrame from './components/MainFrame';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HashRouter, Route, Link } from "react-router-dom";

import ArtWorkSoloPage from "./components/ArtWorkPage";
import DuckBillPage from "./pages/duckbill_rock";
import PuzzleBox from "./pages/puzzle_box";

import TeamThumbnailPage from "./pages/teamwork_thumbnail";
import ThreeDThumbnailPage from "./pages/3dart_thumbnails";
import TwoDThumbnailPage from "./pages/2dart_thumbnails";

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        {/* <MainFrame /> */}

        <Route exact path='/' component={MainFrame}></Route>
        {/* <Route path="/home"><DuckBillPage /></Route> */}

        <Route path="/team"><TeamThumbnailPage /></Route>
        <Route path="/3dart"><ThreeDThumbnailPage /></Route>
        <Route path="/2dart"><TwoDThumbnailPage /></Route>

        <Route path="/duckbill"><DuckBillPage /></Route>

        <Route path="/puzzlebox"><PuzzleBox /></Route>

      </div>
    </HashRouter>

  );
}

export default App;
