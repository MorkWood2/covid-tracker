import React from 'react';
import Fade from 'react-reveal/Fade';
import { HorizontalBar, Line } from 'react-chartjs-2';

import './usaGraphs.styles.scss';
//{ active, deaths, recovered, tests, todayCases, todayDeaths, cases }
const UsaGraphs = ({
  data: { active, deaths, recovered, tests, todayCases, todayDeaths, cases },
  dailyData,
}) => {
  const {
    data: {
      timeline: {
        cases: dailyCases,
        deaths: dailyDeaths,
        recovered: dailyRecovered,
      },
    },
  } = dailyData;
  // console.log(dailyData);

  //   console.log(dailyCases, dailyDeaths, dailyRecovered);

  //   console.log(active, deaths, recovered, tests, todayCases, todayDeaths, cases);

  const barChart = {
    labels: ['Tests Conducted', 'Cases', 'Recovered', 'Deaths', 'Active Cases'],
    datasets: [
      {
        label: 'All Time (US)',
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
          'rgba(186, 151, 255, 0.7)',
          'rgba(247, 147, 114, 0.7)',
          'rgba(81, 241, 251, 0.7)',
          'rgba(251, 81, 81, 0.7)',
          'rgba(243, 234, 136, 0.7)',
        ],
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [tests, cases, recovered, deaths, active],
      },
    ],
  };
  Object.keys(dailyCases);
  const lineChart1 = {
    labels: Object.keys(dailyCases),
    datasets: [
      {
        label: 'Confirmed Cases (US)',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(247, 188, 78, .4)',
        borderColor: 'rgba(247, 188, 78, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(dailyCases),
      },
    ],
  };
  const lineChart2 = {
    labels: Object.keys(dailyDeaths),
    datasets: [
      {
        label: 'Death Cases (US)',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderColor: 'rgba(0,0,0,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(dailyDeaths),
      },
    ],
  };

  const lineChart3 = {
    labels: Object.keys(dailyRecovered),
    datasets: [
      {
        label: 'Recoved Cases (US)',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(68, 129, 187, .4)',
        borderColor: 'rgba(68, 129, 187, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(dailyRecovered),
      },
    ],
  };

  return (
    <div>
      <Fade>
        <div className='graph-container'>
          <div className='graph-element'>
            <HorizontalBar data={barChart} />
          </div>
          <div className='graph-element'>
            <Line data={lineChart1} />
          </div>
          <div className='graph-element'>
            <Line data={lineChart2} />
          </div>
          <div className='graph-element'>
            <Line data={lineChart3} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UsaGraphs;
