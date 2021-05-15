import React, { useContext } from 'react';
import { GranularityContext } from './Gran-context';

import './Components.css';


const Selection = props => {
  const granularity = useContext(GranularityContext);

  return (
    <React.Fragment>
      <h4 className="title">
        Carte des rendements en 2019 par {granularity.isRegion ? "Région" : "Département"}
      </h4>
      <div className="button">
      <button onClick={granularity.change}>
        Basculer vers les {granularity.isRegion ? "départements" : "régions"}
      </button>
      </div>
    </React.Fragment>
  );
};

export default Selection;