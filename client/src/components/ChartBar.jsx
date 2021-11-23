import React from "react";
import { Bar } from "react-chartjs-2";

function ChartBar(props) {
  return (
    <div className="chart">
      <Bar data={props.chartData} />
    </div>
  );
}
export default ChartBar;
