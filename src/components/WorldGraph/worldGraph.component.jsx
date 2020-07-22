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
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyDeaths.map((deaths) => deaths),
            label: 'Deaths',
            borderColor: 'black',
            backgroundColor: 'rgba(0,0,0,0.5)',
            fill: true,
          },
          {
            data: dailyRecovered.map((recovered) => recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0,255,0,0.5)',
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
              'rgba(0,0,255,0.5)',
              'rgba(0, 217, 255, 0.5)',
              'rgba(255,0,0,0.5)',
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
