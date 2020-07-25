import React from 'react';
import Fade from 'react-reveal/Fade';
import './infoBox.styles.scss';
import Icon1 from '../../assets/021-washing hands.png';
import Icon2 from '../../assets/026-no group.png';
import Icon3 from '../../assets/011-No touch.png';
import Icon4 from '../../assets/001-protection.png';
import Icon5 from '../../assets/012-calendar.png';
import Icon6 from '../../assets/041-news.png';

const InfoBox = () => {
  return (
    <div>
      <Fade>
        <p className='title'>Basic Protective Measures</p>
      </Fade>
      <div className='infobox-container'>
        <div className='info-element'>
          <Fade>
            <img src={Icon1} alt='icon' className='icon' />
            <div className='text-container'>
              <h3>Wash your hands frequently</h3>
              <p>
                Clean your hands often, either with soap and water for 20
                seconds or a hand sanitizer that contains at least 60% alcohol.
              </p>
            </div>
          </Fade>
        </div>
        <div className='info-element'>
          <Fade>
            <img src={Icon2} alt='icon' className='icon' />
            <div className='text-container'>
              <h3>Maintain social distancing</h3>
              <p>
                Put distance between yourself and other people (at least 6
                feet).
              </p>
            </div>
          </Fade>
        </div>
        <div className='info-element'>
          <Fade>
            <img src={Icon3} alt='icon' className='icon' />
            <div className='text-container'>
              <h3>Avoid touching eyes, nose and mouth</h3>
              <p>
                To help prevent infections, keep your hands away from your eyes,
                nose, and mouth.
              </p>
            </div>
          </Fade>
        </div>
        <div className='info-element'>
          <Fade>
            <img src={Icon4} alt='icon' className='icon' />
            <div className='text-container'>
              <h3>Wear a mask</h3>
              <p>
                CDC recommends that people wear cloth face coverings in public
                settings and when around people outside of their household,
                especially when other social distancing measures are difficult
                to maintain.
              </p>
            </div>
          </Fade>
        </div>
        <div className='info-element'>
          <Fade>
            <img src={Icon5} alt='icon' className='icon' />
            <div className='text-container'>
              <h3>Quarantine If You Might Be Sick</h3>
              <p>
                Stay home for 14 days after your last contact with a person who
                has COVID-19. Quarantine is used to keep someone who{' '}
                <i> might have been exposed to COVID-19 </i> away from others.
              </p>
            </div>
          </Fade>
        </div>
        <div className='info-element'>
          <Fade>
            <img src={Icon6} alt='icon' className='icon' />
            <div className='text-container'>
              <h3>
                Stay informed and follow advice given by your healthcare
                provider
              </h3>
              <p>
                Stay informed on the latest developments about COVID-19. Follow
                advice given by your healthcare provider, your national and
                local public health authority or your employer on how to protect
                yourself and others from COVID-19.
              </p>
            </div>
          </Fade>
        </div>
        <a
          className='source'
          href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
        >
          <i>Source WHO website</i>
        </a>
      </div>
    </div>
  );
};

export default InfoBox;
