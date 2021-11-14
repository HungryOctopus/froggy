import React from 'react';
import { Bar } from 'react-chartjs-2';

function IndividualChart(props) {
  return (
    <div className="chart">
      <Bar
        data={props.chartData}
        options={{
          title: {
            display: props.displayTitle,
            text: 'Animals saved by you:',
            fontSize: 25
          }
        }}
      />
    </div>
  );
}
export default IndividualChart;