
export const option = {
  backgroundColor: '#c2cdca',
  margin:"20px",
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'    
    }
  },

  title: [
    {
      text: 'Bar Chart, average of Malic acid',
    },
    {
      text: "Alcohol",
      left: '45%',
      top: '85%',

    },
    {
      text: "Malic Acidy",
      left: '4%',
      top: '13%',

    },
  ],
  legend: {
    top: '5%',

  },
  xAxis: {

    type: 'category',
    data: [],

  },
  yAxis: {
    type: 'value' 
  },
  series: [
    {
      name:"Average of Malic Acid",

      data: [],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(161, 16, 16, 0.585)'
      }
      
    }
  ]
};