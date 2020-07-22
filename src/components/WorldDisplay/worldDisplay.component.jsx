import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';
import WorldGraph from '../WorldGraph/worldGraph.component';
import CountryPicker from '../CountryPicker/countryPicker.component';
import CountUp from 'react-countup';
import './worldDisplay.styles.scss';

const WorldDisplay = ({ data: { data } }) => {
  // console.log(dailyWorldData);
  const {
    todayCases,
    todayDeaths,
    tests,
    cases,
    active,
    deaths,
    recovered,
  } = data;

  const [isToggled, setToggled] = useState(true);
  const [worldData, setWorldData] = useState({});
  const [country, setCountry] = useState('');

  const toggleTrueFalse = () => setToggled(!isToggled);

  useEffect(() => {
    async function fetchedData() {
      await fetchData();
    }
    fetchedData();

    //populate data from api, set to state
    // this.setState({ data: fetchedData });
    setWorldData(fetchedData);
  }, []); //notice the empty array here

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    //set data to state
    // this.setState({ data: fetchedData, country: country });
    setWorldData(fetchedData);
    setCountry(country);
  };

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
        <span role='img' aria-label='earth'>
          🌎
        </span>{' '}
        World
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

        {isToggled ? (
          <div>
            <CountryPicker handleCountryChange={handleCountryChange} />
            <WorldGraph data={worldData} country={country} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WorldDisplay;