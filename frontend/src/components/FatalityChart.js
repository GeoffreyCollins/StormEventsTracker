import React, { useContext, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import {FatalityContext } from '../context/FatalityContext';

const FatalityChart = () => {
    const { fatalities } = useContext(FatalityContext);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const monthlyFatalities = Array(12).fill(0);
            fatalities.forEach(fatality => {
                const month = parseInt(fatality._id.month, 10) - 1;
                monthlyFatalities[month] += fatality.count;
            });

            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
                        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
                    ],
                    datasets: [{
                        label: 'Number of Fatalities',
                        data: monthlyFatalities,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    }],
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
                myChart.destroy();
            };
        }
    })

    return <canvas ref={chartRef} />;
};

export default FatalityChart;