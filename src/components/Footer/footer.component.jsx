import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <h3>
        Be apart of the community.
        <br />
        Stay Home{' '}
        <span role='img' aria-label='house'>
          🏡
        </span>{' '}
      </h3>
      <h5>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{' '}
        Created by{' '}
        <a href='https://markwild.dev/' title='Mark'>
          Mark Wild
        </a>{' '}
        API by{' '}
        <a href='https://disease.sh/' title='Mark'>
          disease.sh
        </a>
      </h5>
    </div>
  );
};

export default Footer;
