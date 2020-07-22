//api fetch
import axios from 'axios';
//endpoint

const stateData = 'https://disease.sh/v3/covid-19/countries/USA';

const dailyUSData =
  'https://disease.sh/v3/covid-19/historical/USA?lastdays=120';

const worldData = 'https://disease.sh/v3/covid-19/all';

// const dailyWorldData =
//   'https://disease.sh/v3/covid-19/historical/all?lastdays=120';

//Country/Global graph data

const countryData = 'https://disease.sh/v3/covid-19/countries';

const fetchDailyurl =
  'https://disease.sh/v3/covid-19/historical/all?lastdays=120';

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

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWorldData = async () => {
  try {
    const response = await axios.get(worldData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchDailyWorldData = async () => {
//   try {
//     const response = await axios.get(dailyWorldData);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchCountries = async () => {
  try {
    const response = await axios.get(countryData);
    return response.data.map((arr) => arr.country);
    // return response.map((res) => res.country);
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async (country) => {
  let changeableUrl = countryData;

  if (country) {
    changeableUrl = `${countryData}/${country}`;
  }

  try {
    //response.data destructure
    const {
      data: { active, recovered, deaths },
    } = await axios.get(changeableUrl);
    return { active, recovered, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(fetchDailyurl);

    const modifiedData = {
      dailyCases: Object.values(data.cases),
      dailyDeaths: Object.values(data.deaths),
      dailyRecovered: Object.values(data.recovered),
      dailyDate: Object.keys(data.recovered),
      confirmed: true,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
