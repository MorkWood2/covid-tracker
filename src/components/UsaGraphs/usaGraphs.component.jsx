import React from 'react';
import { fetchUSData } from '../../api';
import { HorizontalBar, Line } from 'react-chartjs-2';

import './usaGraphs.styles.scss';

const UsaGraphs = (fetchUSData) => {
  console.log(fetchUSData);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default UsaGraphs;
