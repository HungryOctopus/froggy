import React from "react";
import { Bar } from "react-chartjs-2";

function ChartTotal(props) {
  return (
    <div className="chartTotal">
      <Bar
        data={props.chartData}
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default ChartTotal;
