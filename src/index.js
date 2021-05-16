import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Selection from './components/Selection';
import MapChartReg from './components/MapChartReg';
import GraphChart from './components/GraphChart';
import MapChartDep from './components/MapChartDep';
import Footer from './components/Footer';
import { GranularityContext } from './components/Gran-context';

import './index.css';

const App = () => {

  const [isRegion, setRegion] = useState(true);

  const change = useCallback(() => {
    setRegion(!isRegion);
  }, [isRegion]);

  let granularity;

  if(isRegion) {
    granularity= (<MapChartReg />)
  }
  else {
    granularity = (<MapChartDep />)
  }

  return (
    <GranularityContext.Provider value={{ isRegion: isRegion, change: change }}>
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