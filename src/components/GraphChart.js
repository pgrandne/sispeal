import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import './Components.css';

const data = [
  {annee: '2008', rendement: 80},
  {annee: '2009', rendement: 75},
  {annee: '2010', rendement: 85},
  {annee: '2011', rendement: 90},
  {annee: '2012', rendement: 80},
  {annee: '2013', rendement: 78},
  {annee: '2014', rendement: 72},
  {annee: '2015', rendement: 93},
  {annee: '2016', rendement: 83},
  {annee: '2017', rendement: 72},
  {annee: '2018', rendement: 86},
  {annee: '2019', rendement: 78},
  {annee: '2020', rendement: 67},
];

const GraphChart = () => {
  return (
    <React.Fragment>
    <h4 className="title">Evolution du rendement en France au fil des années</h4>
    <BarChart className="cont-graph"
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
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="rendement" fill="#82ca9d" />
    </BarChart>
    </React.Fragment>
  );
}

export default GraphChart;