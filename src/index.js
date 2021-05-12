import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import './index.css';

import MapChart from './MapChart';

function App() {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <div className="header">
        <h2>Visualisation des données SISPEA</h2>
      </div>
      <div className="row">
        <div className="column side"></div>
        <div class="column middle">
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
        <div className="column side"></div>
      </div>
      <div className="footer">
        <p>Réalisé par Perrin</p>
        <a href="https://github.com/pgrandne/sispeal/">Voir le code source sur github</a>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);