import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { csv } from "d3-fetch";

import './Components.css';

const GraphChart = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/files/rendement_annee.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <React.Fragment>
      <h4 className="title">Evolution du rendement en France au fil des années (en Giga m3 et %)</h4>
      <ComposedChart className="cont-graph"
        width={900}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="annee" />
        <YAxis unit="Gm3" yAxisId="left"/>
        <YAxis unit="%" dataKey="rendement" orientation="right" yAxisId="right" stroke="#ff7300"/>
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="consommation" stackId="a" fill="#8884d8" />
        <Bar yAxisId="left" dataKey="pertes" stackId="a" fill="#82ca9d" />
        <Line yAxisId="right" type="monotone" dataKey="rendement" stroke="#ff7300" />
      </ComposedChart>
    </React.Fragment>
  );
}

export default GraphChart;