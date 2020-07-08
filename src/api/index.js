//api fetch
import axios from 'axios';
//endpoint

const stateData = 'https://disease.sh/v3/covid-19/countries/USA';

// console.log(stateData);

export const fetchUSData = async () => {
  try {
    const {
      data: {
        active,
        deaths,
        recovered,
        tests,
        todayCases,
        todayDeaths,
        cases,
      },
    } = await axios.get(stateData);
    return {
      active,
      deaths,
      recovered,
      tests,
      todayCases,
      todayDeaths,
      cases,
    };
  } catch (error) {
    console.log(error);
  }
};
