import React, { useState } from 'react';
import './usaDisplay.styles.scss';
import CountUp from 'react-countup';
import UsaGraphs from '../UsaGraphs/usaGraphs.component';

const UsaDisplay = ({ data, dailyData }) => {
  const {
    active,
    deaths,
    recovered,
    tests,
    todayCases,
    todayDeaths,
    cases,
  } = data;
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  if (!active) {
    return 'loading';
  }

  const currentDate = () => {
    const date = new Date();
    const dateFormat = date.toLocaleDateString();
    return dateFormat;
  };

  return (
    <div>
      <h1 className='heading'>
        USA{' '}
        <span role='img' aria-label='american flag'>
          🇺🇸
        </span>
      </h1>
      <div className='content-container'>
        <h1 className='box-title'>Today</h1>
        <h6>{currentDate()}</h6>
        <div className='box-container'>
          <div className='box'>
            <h5>CONFIRMED CASES</h5>
            <CountUp
              start={0}
              end={todayCases}
              duration={1.5}
              separator=','
              className='counter'
            />
          </div>
          <div className='box'>
            <h5>DEATHS</h5>

            <CountUp
              start={0}
              end={todayDeaths}
              duration={1.5}
              separator=','
              className='counter red'
            />
          </div>
        </div>
        <p className='note'>
          {' '}
          <i>
            * Note : 0 value might indicate no reports yet from the Department
            of Health within this day
          </i>
        </p>
      </div>
      <div className='content-container'>
        <h1 className='box-title'>All Time</h1>
        <div className='box-container'>
          <div className='box'>
            <h5>TESTS CONDUCTED</h5>
            <CountUp
              start={0}
              end={tests}
              duration={1.9}
              separator=','
              className='counter blue'
            />
          </div>

          <div className='box'>
            <h5>CONFIRMED CASES</h5>

            <CountUp
              start={0}
              end={cases}
              duration={1.6}
              separator=','
              className='counter red'
            />
          </div>

          <div className='box'>
            <h5>ACTIVE CASES</h5>
            <CountUp
              start={0}
              end={active}
              duration={1}
              separator=','
              className='counter yellow'
            />
          </div>
          <div className='box'>
            <h5>DEATHS</h5>

            <CountUp
              start={0}
              end={deaths}
              duration={1.1}
              separator=','
              className='counter red'
            />
          </div>
          <div className='box'>
            <h5>RECOVERED</h5>
            <CountUp
              start={0}
              end={recovered}
              duration={1.4}
              separator=','
              className='counter blue'
            />
          </div>
        </div>
        <div className='button-wrapper'>
          <button onClick={toggleTrueFalse}>
            {' '}
            {isToggled ? 'Hide Chart' : 'Show Chart'}
          </button>
        </div>

        {isToggled ? <UsaGraphs data={data} dailyData={dailyData} /> : null}
      </div>
    </div>
  );
};

export default UsaDisplay;
