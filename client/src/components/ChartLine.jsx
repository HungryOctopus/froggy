import React from "react";
import { Line } from "react-chartjs-2";

function ChartLine(props) {
  return (
    <div className="chart">
      <Line
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: "All Animals saved:",
            fontSize: 25,
          },
        }}
      />
    </div>
  );
}
export default ChartLine;
