import React, { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';
import './spinner.styles.scss';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='Loading...' className='spinner' />
    </Fragment>
  );
};

export default Spinner;
