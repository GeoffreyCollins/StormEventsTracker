import React, { useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import { EventContext } from '../context/EventContext';

const EventTypeChart = () => {
  const { events } = useContext(EventContext);
  const chartRef = useRef(null);

  useEffect(() => {
    if (events && events.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      const eventTypeCounts = events.reduce((acc, event) => {
        acc[event.EVENT_TYPE] = (acc[event.EVENT_TYPE] || 0) + 1;
        return acc;
      }, {});

      const labels = Object.keys(eventTypeCounts);
      const data = Object.values(eventTypeCounts);

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Event Count',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
  }, [events]);

  return <canvas ref={chartRef} />;
};

export default EventTypeChart;