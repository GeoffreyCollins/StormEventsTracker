import React, { useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import { EventContext } from '../../context/EventContext';

const EventPercentageChart = () => {
    const { events } = useContext(EventContext);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const eventTypeData = events.reduce((acc, event) => {
                acc[event.EVENT_TYPE] = (acc[event.EVENT_TYPE] || 0) + 1;
                return acc;
              }, {});

            const labels = Object.keys(eventTypeData);
            const data = Object.values(eventTypeData);
            const total = data.reduce((acc, curr) => acc + curr, 0);

            const pieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Event Type Percentage',
                        data: data.map(count => ((count / total) * 100).toFixed(2)),
                        backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(199, 199, 199, 0.6)',
                        'rgba(83, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(199, 199, 199, 0.6)'
                        ],
                        hoverBackgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(199, 199, 199, 0.8)',
                        'rgba(83, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(199, 199, 199, 0.8)'
                        ],
                    }], 
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context) => {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    const percent = context.dataset.data[context.dataIndex] || 0;
                                    return `${label}: ${value} (${percent}%)`;
                                },
                            },
                        },
                    },
                },
            });
        
            return () => {
                pieChart.destroy();
            };
        }
    }, [events]);

    return <div style={{ width: '1350px', height: '500px' }}> <canvas ref={chartRef} /></div>;
};

export default EventPercentageChart;