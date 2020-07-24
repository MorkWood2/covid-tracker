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

    this.setState({
      usData: fetchedUSData,
      usDailyData: fetchedUSDataDaily,
      worldData: fetchedWorldData,
    });
  }

  render() {
    const { usData, usDailyData, worldData } = this.state;

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
