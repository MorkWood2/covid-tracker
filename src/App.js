import React from 'react';
import './App.css';

import { UsaDisplay } from './components';

import { fetchUSData } from './api';

class App extends React.Component {
  state = {
    usData: {},
    // hidden: true,
  };

  // handleClick = () => {
  //   console.log('clicked')
  //   this.setState({
  //     hidden : !hidden
  //   })
  // }

  async componentDidMount() {
    const fetchedUSData = await fetchUSData();

    this.setState({ usData: fetchedUSData });
  }

  render() {
    const { usData } = this.state;

    return (
      <div>
        <UsaDisplay data={usData} />
      </div>
    );
  }
}

export default App;