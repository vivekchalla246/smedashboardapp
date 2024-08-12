import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Resource Allocation',
        data: data.map(item => item.allocation),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      }
    ]
  };

  return <Line data={chartData} />;
};

export default Chart;