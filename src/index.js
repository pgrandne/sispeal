import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import './index.css';

import MapChart from './MapChart';

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <h2 className="model">Visualisation des données SISPEA</h2>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);