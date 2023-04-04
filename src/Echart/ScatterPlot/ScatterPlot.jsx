import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { option } from "./option";
import { data } from "../Data/Data";

function ScatterPlot() {

  useEffect(() => {
    getdata();
  }, []);

  function getdata() {
    const result = data.map((item) => {
      return [item["Color intensity"], item["Hue"]];
    });
    console.log("🚀 ~ file: ScatterPlot.jsx:16 ~ result ~ result:", result[0]);


    option.series[0].data = [...result];
    console.log("🚀 ~ file: ScatterPlot.jsx:5 ~ data:", option.series[0]);

  }

  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
}

export default ScatterPlot;
