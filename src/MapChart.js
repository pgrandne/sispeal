import React, { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const colorScale = scaleLinear()
  .domain([0, 100])
  .range(["#ffedea", "#ff5233"]);

const geoUrl = "https://raw.githubusercontent.com/pgrandne/sispeal/main/src/Map/gadm36_FRA_1.json";

const MapChart = ({ setTooltipContent }) => {
  const position = {
    coordinates: [2.213749, 46.227638],
    zoom: 15,
    maxZoom: 19,
    minZoom: 12
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`./rendement.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
      <ComposableMap data-tip="" projectionConfig={{ scale: 170 }}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          maxZoom={position.maxZoom}
          minZoom={position.minZoom}
        >
                {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find((s) => s.ISO3 === geo.properties.NAME_1);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
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
              );
                })
            }
          </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
  );
};

export default memo(MapChart);
