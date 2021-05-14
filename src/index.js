import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import Header from './components/Header';
import MapChart from './components/MapChart';
import Footer from './components/Footer';

import './index.css';



const App = () => {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <Header />
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
        <div className="column side"></div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);