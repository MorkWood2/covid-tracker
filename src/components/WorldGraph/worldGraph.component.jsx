import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import './worldGraph.styles.scss';
import { Line, HorizontalBar } from 'react-chartjs-2';

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
  const lineChart = confirmed ? (
    <Line
      data={{
        labels: dailyDate.map((date) => date),
        datasets: [
          {
            data: dailyCases.map((cases) => cases),
            label: 'Cases',
            backgroundColor: 'rgba(247, 147, 114, .5)',
            borderColor: 'rgba(247, 147, 114, 1)',
            fill: true,
          },
          {
            data: dailyDeaths.map((deaths) => deaths),
            label: 'Deaths',
            borderColor: 'rgba(251, 81, 81, 1)',
            backgroundColor: 'rgba(251, 81, 81, 1)',
            fill: true,
          },
          {
            data: dailyRecovered.map((recovered) => recovered),
            label: 'Recovered',
            borderColor: 'rgba(81, 241, 251, 1)',
            backgroundColor: 'rgba(81, 241, 251, 1)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = country ? (
    <HorizontalBar
      data={{
        labels: ['Recovered', 'Active Cases', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(81, 241, 251, 1)',
              'rgba(247, 147, 114, 1)',
              'rgba(251, 81, 81, 1)',
            ],
            data: [data.recovered, data.active, data.deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <div>{country ? barChart : lineChart}</div>;
};

export default WorldGraph;
