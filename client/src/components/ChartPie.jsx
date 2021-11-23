import React from "react";
import { Pie } from "react-chartjs-2";

function ChartPie(props) {
  return (
    <div className="chart">
      <Pie data={props.chartData} />
    </div>
  );
}
export default ChartPie;
