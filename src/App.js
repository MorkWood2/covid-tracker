import React from 'react';
import './App.css';

import { UsaDisplay, Header } from './components';

import { fetchUSData, fetchUSDataDaily } from './api';

class App extends React.Component {
  state = {
    usData: {},
    usDailyData: {},
  };

  // handleClick = () => {
  //   console.log('clicked')
  //   this.setState({
  //     hidden : !hidden
  //   })
  // }

  async componentDidMount() {
    const fetchedUSData = await fetchUSData();

    const fetchedUSDataDaily = await fetchUSDataDaily();

    this.setState({ usData: fetchedUSData, usDailyData: fetchedUSDataDaily });
  }

  render() {
    const { usData, usDailyData } = this.state;

    return (
      <div>
        <Header />
        <UsaDisplay data={usData} dailyData={usDailyData} />
      </div>
    );
  }
}

export default App;
