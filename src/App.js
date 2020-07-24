import React from 'react';
import Spinner from './components/Spinner/spinner.component.jsx';
import './App.css';

import {
  UsaDisplay,
  Header,
  InfoBox,
  WorldDisplay,
  Footer,
  Twitter,
} from './components';

import {
  fetchUSData,
  fetchUSDataDaily,
  fetchWorldData,
  // fetchDailyWorldData,
} from './api';

class App extends React.Component {
  state = {
    usData: {},
    usDailyData: {},
    worldData: null,
    // dailyWorldData: null,
  };

  async componentDidMount() {
    const fetchedUSData = await fetchUSData();

    const fetchedUSDataDaily = await fetchUSDataDaily();

    const fetchedWorldData = await fetchWorldData();

    // const fetchedDailyWorldData = await fetchDailyWorldData();

    this.setState(
      {
        usData: fetchedUSData,
        usDailyData: fetchedUSDataDaily,
        worldData: fetchedWorldData,
        // dailyWorldData: fetchedDailyWorldData,
      }
      // () => {
      //   console.log(fetchedWorldData);
      // }
    );
    // console.log(fetchedDailyWorldData);
  }

  render() {
    const { usData, usDailyData, worldData } = this.state;
    // console.log(dailyWorldData);
    return (
      <div>
        <Header />

        {usData ? (
          <UsaDisplay data={usData} dailyData={usDailyData} />
        ) : (
          <Spinner />
        )}
        {worldData ? <WorldDisplay data={worldData} /> : <Spinner />}

        <InfoBox />
        <Twitter />
        <Footer />
      </div>
    );
  }
}

export default App;
