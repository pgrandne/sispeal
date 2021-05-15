import React, { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import './Components.css';

const colorScale = scaleLinear()
  .domain([50, 100])
  .range(["red", "green"]);

const geoUrl = "https://raw.githubusercontent.com/pgrandne/sispeal/main/public/files/carte_france.json";

const MapChartReg = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/files/rendement_region.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap
      className="cont-map"
      data-tip=""
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-3, -46.5, 0],
        scale: 3400
      }}
    >
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.find((s) => s.region === geo.properties.NAME_1);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["rendement"]) : "#D6D6DA"}
                  onMouseEnter={() => {
                    const { NAME_1 } = geo.properties;
                    console.log(`${NAME_1}`);
                    setTooltipContent(`${NAME_1} - Rendement de ${d["rendement"]} % - ${d["nombre"]} Collectivités `);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
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
    </ComposableMap>
  );
};

export default memo(MapChartReg);