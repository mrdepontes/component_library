import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

import "./linechart.css";
import { LineChart as RichUtilLinChart, XAxis, YAxis, Line, CartesianGrid } from "recharts";

export const LineChart = ({ data }) => {
  return (
    <RichUtilLinChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </RichUtilLinChart>
  );
};

LineChart.PropTypes = {
  data: PropTypes.arrayOf({
    name: PropTypes.string,
    uv: PropTypes.number,
  }).isRequired,
};

LineChart.defaultProps = {
  data: [
    { name: "Page A", uv: 400 },
    { name: "Page B", uv: 500 },
    { name: "Page C", uv: 600 },
    { name: "Page D", uv: 700 },
    { name: "Page E", uv: 800 },
  ],
};
