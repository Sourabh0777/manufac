import "./App.css";
import Chart from "./Echart/Chart/Chart";
import ScatterPlot from "./Echart/ScatterPlot/ScatterPlot";
import { ChartDiv } from "./Styles/styles";

function App() {
  return (
    <div className="App">
      <ChartDiv>
        <Chart />
      </ChartDiv>
      <ChartDiv>
        <ScatterPlot />
      </ChartDiv>
    </div>
  );
}

export default App;
