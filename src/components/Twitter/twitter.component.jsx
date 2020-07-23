import React from 'react';
import Fade from 'react-reveal/Fade';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './twitter.styles.scss';

const Twitter = () => {
  return (
    <Fade>
      <div className='twitter-container'>
        <h2>Stay Informed</h2>
        <div className='tweet-container'>
          <div className='twitter-element'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='CDCgov'
              options={{ height: 500, width: 300 }}
            />
          </div>
          <div className='twitter-element'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='COVID19Tracking'
              options={{ height: 500, width: 300 }}
            />
          </div>
          <div className='twitter-element'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='WHO'
              options={{ height: 500, width: 300 }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Twitter;
