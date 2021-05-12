import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import "./index.css";


const geoUrl = "https://raw.githubusercontent.com/pgrandne/sispeal/main/src/Map/gadm36_FRA_1.json";

const MapChart = ({ setTooltipContent }) => {
  const position = { coordinates: [2.213749, 46.227638], zoom: 15 };

  return (
    <div className="model">
      <ComposableMap data-tip="" projectionConfig={{ scale: 170 }}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME_1 } = geo.properties;
                    console.log(`${NAME_1}`);
                    setTooltipContent(`${NAME_1}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
