import React from 'react';
import logo from './logo.svg';
import './App.css';

import './materialize-assets/css/material-kit.css'

import SceneCarousel from './components/SceneCarousel';
import Header from './components/Header';
import MainFrame from './components/MainFrame';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
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

      <MainFrame />

    </div>
  );
}

export default App;
