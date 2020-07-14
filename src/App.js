import React from 'react';
import './App.css';

import { UsaDisplay, Header, InfoBox, WorldDisplay } from './components';

import { fetchUSData, fetchUSDataDaily, fetchWorldData } from './api';

class App extends React.Component {
  state = {
    usData: {},
    usDailyData: {},
    worldData: {},
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
      //   //active, deaths...
      //   // console.log(fetchedUSData);
      // }
    );
  }

  render() {
    const { usData, usDailyData, worldData } = this.state;

    return (
      <div>
        <Header />
        <UsaDisplay data={usData} dailyData={usDailyData} />
        <WorldDisplay data={worldData} />
        <InfoBox />
      </div>
    );
  }
}

export default App;
