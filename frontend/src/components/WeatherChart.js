import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeatherChart = ({ events }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (!events || events.length === 0) {
      console.log("No events data available");
      return;
    }

    console.log("Events data received:", events);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Group events by type and count occurrences
    const eventTypeCounts = events.reduce((acc, event) => {
      const eventType = event.EVENT_TYPE;
      if (!acc[eventType]) {
        acc[eventType] = 0;
      }
      acc[eventType] += 1;
      return acc;
    }, {});

    console.log("Event Type Counts:", eventTypeCounts);

    const labels = Object.keys(eventTypeCounts);
    const data = Object.values(eventTypeCounts);

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Number of Events',
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [events]);

  return <canvas ref={chartRef}></canvas>;
};

export default WeatherChart;