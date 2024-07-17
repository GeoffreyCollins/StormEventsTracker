import React, { useEffect, useRef, useContext } from 'react';
import Chart from 'chart.js/auto';
import { EventContext } from '../../context/EventContext';

const WeatherChart = () => {
  const { events } = useContext(EventContext);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const monthlyEvents = Array(12).fill(0);
      events.forEach(event => {
        const month = parseInt(event.BEGIN_YEARMONTH.toString().slice(-2), 10) - 1;
        monthlyEvents[month]++;
      });

      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
            'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
          ],
          datasets: [{
            label: 'Number of Events',
            data: monthlyEvents,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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

  return <div style={{ width: '1350px', height: '500px'}}><canvas ref={chartRef} /></div>;
};

export default WeatherChart;