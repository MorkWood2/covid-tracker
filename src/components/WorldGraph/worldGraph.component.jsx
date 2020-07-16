import React from 'react';
import './worldGraph.styles.scss';
import { Line } from 'react-chartjs-2';

const WorldGraph = (data) => {
  //   console.log(usDailyData);

  const { data: worldData, dailyWorldData } = data;
  const { data: dailyData } = dailyWorldData;
  const { cases, deaths, recovered } = dailyData;

  const dailyCases = Object.values(cases);
  const dailyDeaths = Object.values(deaths);
  const dailyRecovered = Object.values(recovered);

  const lineChart = {
    labels: Object.keys(cases),
    datasets: [
      {
        data: dailyCases,
        label: 'Daily Cases',
        borderColor: 'rgb(247, 188, 78, 0.4)',
        fill: true,
      },
      {
        data: dailyDeaths,
        label: 'Daily Deaths',
        borderColor: 'rgba(0,0,0,0.4)',
        backgroundColor: 'rgba(0,0,0,0.4)',
        fill: true,
      },
      {
        data: dailyRecovered,
        label: 'Daily Recovered',
        borderColor: 'rgba(68, 129, 187, .4)',
        backgroundColor: 'rgba(68, 129, 187, .4)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h1>world graph</h1>
      <Line data={lineChart} />
    </div>
  );
};

export default WorldGraph;
