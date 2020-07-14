import React from 'react';
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
      <p className='title'>Basic Protective Measures</p>
      <div className='infobox-container'>
        <div className='info-element'>
          <img src={Icon1} alt='icon' className='icon' />
          <div className='text-container'>
            <h3>Wash your hands frequently</h3>
            <p>
              Regularly and thoroughly clean your hands with an alcohol-based
              hand rub or wash them with soap and water.
            </p>
          </div>
        </div>
        <div className='info-element'>
          <img src={Icon2} alt='icon' className='icon' />
          <div className='text-container'>
            <h3>Maintain social distancing</h3>
            <p>
              Maintain at least 3 feet distance between yourself and anyone to
              ensure you don't spread the virus.
            </p>
          </div>
        </div>
        <div className='info-element'>
          <img src={Icon3} alt='icon' className='icon' />
          <div className='text-container'>
            <h3>Avoid touching eyes, nose and mouth</h3>
            <p>
              Hands touch many surfaces and can pick up viruses. Once
              contaminated, hands can transfer the virus to your eyes, nose or
              mouth. From there, the virus can enter your body and can make you
              sick.
            </p>
          </div>
        </div>
        <div className='info-element'>
          <img src={Icon4} alt='icon' className='icon' />
          <div className='text-container'>
            <h3>Wear a mask</h3>
            <p>
              The greatest benefit of masking the masses comes not from
              shielding the mouths of the healthy but from covering the mouths
              of people already infected.
            </p>
          </div>
        </div>
        <div className='info-element'>
          <img src={Icon5} alt='icon' className='icon' />
          <div className='text-container'>
            <h3>
              If you have fever, cough and difficulty breathing, seek medical
              care early or quarentine for 14 days.
            </h3>
            <p>
              Stay home if you feel unwell. If you have a fever, cough and
              difficulty breathing, seek medical attention and call in advance.
              Follow the directions of your local health authority.
            </p>
          </div>
        </div>
        <div className='info-element'>
          <img src={Icon6} alt='icon' className='icon' />
          <div className='text-container'>
            <h3>
              Stay informed and follow advice given by your healthcare provider
            </h3>
            <p>
              Stay informed on the latest developments about COVID-19. Follow
              advice given by your healthcare provider, your national and local
              public health authority or your employer on how to protect
              yourself and others from COVID-19.
            </p>
          </div>
        </div>
        <a
          className='source'
          href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
        >
          <i>Source WHO website</i>
        </a>
      </div>
      <div height={'300px'}>fdaf</div>
    </div>
  );
};

export default InfoBox;
