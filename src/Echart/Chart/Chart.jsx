import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { option } from "./Options/Options";
import { data } from "../Data/Data";

function Chart() {
  useEffect(() => {
    reformData();
  }, []);

  const reformData = () => {
    const alcoholSet = [...new Set(data.map((item) => `Alcohol-${item.Alcohol}`))];

    const sums = {};
    const counts = {};
    data.forEach((item) => {
      const alcohol = item["Alcohol"];
      const malicAcid = item["Malic Acid"];
      sums[alcohol] = (sums[alcohol] || 0) + malicAcid;
      counts[alcohol] = (counts[alcohol] || 0) + 1;
    });

    const averages = Object.keys(sums).map((alcohol) =>
      (sums[alcohol] / counts[alcohol]).toFixed(2)
    );
    option.xAxis.data = [...alcoholSet];
    option.series[0].data= [...averages]
  };

  return (
    <div>
      <ReactECharts  option={option} />
    </div>
  );
}

export default Chart;
