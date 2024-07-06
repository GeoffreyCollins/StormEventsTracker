import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto';

Chart.register(...registerables);

const WeatherChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.BEGIN_DATE_TIME),
        datasets: [
          {
            label: 'Event Types',
            data: data.map(item => item.EVENT_TYPE),
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: data.map(item => item.BEGIN_DATE_TIME),
          },
        },
      },
    });
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default WeatherChart;