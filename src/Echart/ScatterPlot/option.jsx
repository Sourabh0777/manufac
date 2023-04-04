export const option = {
  backgroundColor: "#c2cdca",
  // borderradius:"5%",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  title: [
    {
      text: "Color Intensity",
      left: "45%",
      top: "85%",
    },
    {
      text: "Scatter plot between “Color Intensity” and “Hue”",
    },
    {
      text: "Hue",
      left: "6%",
      top: "14%",
    },
  ],
  legend: {
    top: "5%",
  },
  xAxis: {},
  yAxis: {},
  series: [
    {
      name: "Hue",

      symbolSize: 20,
      data: [],
      type: "scatter",
    },
  ],
};
