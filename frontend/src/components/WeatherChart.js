import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const WeatherChart = ({ events }) => { // Define WeatherChart component
  const chartRef = useRef(null); // Create a reference to the canvas element
  const chartInstanceRef = useRef(null); // Create a reference to the Chart.js instance

  useEffect(() => {
    if (!events || events.length === 0) {
      console.log("No events data available");
      return;
    }

    console.log("Events data received:", events); // Log events data

    if (chartInstanceRef.current) { // Check if a chart instance exists
      chartInstanceRef.current.destroy(); // Destroy the existing chart instance, to prevent memory leaks
    }

    // Group events by type and count occurrences
    const eventTypeCounts = events.reduce((acc, event) => {
      const eventType = event.EVENT_TYPE; // Extract event type
      if (!acc[eventType]) {
        acc[eventType] = 0; // Initialize count to 0 if not present
      }
      acc[eventType] += 1;
      return acc;
    }, {});

    console.log("Event Type Counts:", eventTypeCounts); // Log event type counts

    const labels = Object.keys(eventTypeCounts); // Extract event types as labels
    const data = Object.values(eventTypeCounts); // Extract event counts as data

    const ctx = chartRef.current.getContext('2d'); // Get the canvas context
    chartInstanceRef.current = new Chart(ctx, { // Create a new Chart.js instance
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

  return <canvas ref={chartRef}></canvas>; // Render canvas element
};

export default WeatherChart;