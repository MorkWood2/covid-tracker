import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import './worldGraph.styles.scss';
import { Line, HorizontalBar, defaults } from 'react-chartjs-2';

const WorldGraph = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const {
    dailyCases,
    dailyDeaths,
    dailyRecovered,
    dailyDate,
    confirmed,
  } = dailyData;

  defaults.global.defaultFontColor = '#CAD6E6';
  defaults.global.defaultFontFamily = ' Lato, sans-serif';

  const lineChart = confirmed ? (
    <Line
      data={{
        labels: dailyDate.map((date) => date),
        datasets: [
          {
            data: dailyCases.map((cases) => cases),
            label: 'Cases',
            borderColor: '#ba97ff',
            fill: false,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
          {
            data: dailyDeaths.map((deaths) => deaths),
            label: 'Deaths',
            borderColor: '#fb5151',
            fill: false,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
          {
            data: dailyRecovered.map((recovered) => recovered),
            label: 'Recovered',
            borderColor: '#0675e4',
            fill: false,
            lineTension: 0.1,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          fontSize: 15,
          fontColor: 'whitesmoke',
          fontFamily: "'Lato', sans-serif",
          text: `Global Statistics - 4 months`,
        },
      }}
    />
  ) : null;

  const barChart = country ? (
    <HorizontalBar
      data={{
        labels: ['Deaths', 'Active Cases', 'Recovered'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#fb5151', '#ba97ff', '#0675e4'],
            data: [data.deaths, data.active, data.recovered],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          fontSize: 15,
          fontColor: 'whitesmoke',
          fontFamily: "'Lato', sans-serif",
          text: `Total Statistics in ${country} - approx.`,
        },
      }}
    />
  ) : null;

  return <div>{country ? barChart : lineChart}</div>;
};

export default WorldGraph;
