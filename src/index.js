import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from "react-tooltip";

import Header from './components/Header';
import Selection from './components/Selection';
import MapChartReg from './components/MapChartReg';
import GraphChart from './components/GraphChart';
import MapChartDep from './components/MapChartDep';
import Footer from './components/Footer';
import { GranularityContext } from './components/Gran-context';

import './index.css';

const App = () => {
  const [content, setContent] = useState("");

  const [isRegion, setRegion] = useState(true);

  const change = useCallback(() => {
    setRegion(!isRegion);
  }, [isRegion]);

  let granularity;

  if(isRegion) {
    granularity= ( <MapChartReg setTooltipContent={setContent} />)
  }
  else {
    granularity = ( <MapChartDep setTooltipContent={setContent} />)
  }

  return (
    <GranularityContext.Provider value={{ isRegion: isRegion, change: change }}>
      <ReactTooltip>{content}</ReactTooltip>
      <Header />
      <Selection />
      <div>{granularity}</div>
      <hr />
      <GraphChart />
      <Footer />
      </GranularityContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);