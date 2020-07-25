import React, { Fragment } from 'react';
import spinner from '../../assets/spinner.gif';
import './spinner.styles.scss';

const Spinner = () => {
  return (
    <Fragment>
      <div className='spinner-container'>
        <h4 className='spinner-text'>
          Make sure your AdBlocker isn't blocking the API{' '}
          <span role='img' aria-label='face'>
            😜
          </span>
        </h4>
        <img src={spinner} alt='Loading...' className='spinner' />
      </div>
    </Fragment>
  );
};

export default Spinner;
