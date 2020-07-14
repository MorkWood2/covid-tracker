import React from 'react';
import './App.css';

import { UsaDisplay, Header, InfoBox, WorldDisplay } from './components';

import { fetchUSData, fetchUSDataDaily, fetchWorldData } from './api';

class App extends React.Component {
  state = {
    usData: {},
    usDailyData: {},
    worldData: null,
  };

  async componentDidMount() {
    const fetchedUSData = await fetchUSData();

    const fetchedUSDataDaily = await fetchUSDataDaily();

    const fetchedWorldData = await fetchWorldData();
    //dat
    // console.log(fetchedWorldData);

    this.setState(
      {
        usData: fetchedUSData,
        usDailyData: fetchedUSDataDaily,
        worldData: fetchedWorldData,
      }
      // () => {
      //   console.log(fetchedWorldData);
      // }
    );
    // console.log(fetchedWorldData);
  }

  render() {
    const { usData, usDailyData, worldData } = this.state;

    return (
      <div>
        <Header />
        <UsaDisplay data={usData} dailyData={usDailyData} />
        {worldData ? <WorldDisplay data={worldData} /> : <div></div>}

        <InfoBox />
      </div>
    );
  }
}

export default App;
