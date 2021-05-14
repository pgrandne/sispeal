import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import Header from './components/Header';
import MapChart from './components/MapChart';
import GraphChart from './components/GraphChart';
import Footer from './components/Footer';

import './index.css';




const App = () => {
  const [content, setContent] = useState("");
  return (
    <React.Fragment>
      <Header />
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <hr />
      <GraphChart />
      <Footer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);