//api fetch
import axios from 'axios';
//endpoint

const stateData = 'https://disease.sh/v3/covid-19/countries/USA';

const dailyUSData =
  'https://disease.sh/v3/covid-19/historical/USA?lastdays=120';

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

export const fetchUSDataDaily = async () => {
  try {
    const response = await axios.get(dailyUSData);

    // const {
    //   cases: dailyCases,
    //   deaths: dailyDeaths,
    //   recovered: dailyRecovered,
    // } = response.data;

    // console.log(dailyCases, dailyDeaths, dailyRecovered);
    // console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};
