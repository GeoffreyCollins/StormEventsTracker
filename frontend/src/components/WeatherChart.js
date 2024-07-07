import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const WeatherChart = ({ data }) => {
    const chartRef = useRef(null); // Create a reference to the canvas element
    const chartInstance = useRef(null); // Create a reference to the chart instance

    useEffect(() => { // Use the useEffect hook to create the chart when the component mounts
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy the previous chart instance before creating a new one
        }

        const ctx = chartRef.current.getContext('2d'); // Get the canvas context (2D rendering context)
        const chartData = {
            labels: data.map(item => item.month),
            datasets: [
                {
                    label: 'Event Count',
                    data: data.map(item => item.eventCount),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        };
        const options = { // Chart options
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options,
        });
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default WeatherChart;