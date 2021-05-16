import React, { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import './Components.css';

const colorScale = scaleLinear()
  .domain([0, 100])
  .range(["red", "green"]);


const geoUrl = "https://raw.githubusercontent.com/pgrandne/sispeal/main/public/files/carte_france_departement.json";

const MapChartDep = () => {

  const [content, setContent] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/files/rendement_departement.csv`).then((data) => {
      setData(data);
    });
  }, []);


  return (
    <React.Fragment>
      <ReactTooltip>{content}</ReactTooltip>
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
                const d = data.find((s) => s.region === geo.properties.NAME_2);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["rendement"]) : "#D6D6DA"}
                    onMouseEnter={() => {
                      const { NAME_2 } = geo.properties;
                      console.log(`${NAME_2}`);
                      setContent(`${NAME_2}- Rendement de ${d["rendement"]} % - ${d["nombre"]} Collectivités `);

                    }}
                    onMouseLeave={() => {
                      setContent("");
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
    </React.Fragment>
  );
};

export default memo(MapChartDep);