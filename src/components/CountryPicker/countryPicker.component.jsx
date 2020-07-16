import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries, fetchData } from '../../api';

// const CountryPicker = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// };
const CountryPicker = () => {
  //  state, modified state
  const [fetchedCounties, setFetchedCounties] = useState([]);
  const [fetchedCountryData, setCountryData] = useState({});

  const handleCountryChange = async (country) => {
    //set state to countryData
    setCountryData(await fetchData(country));

    if (country) {
      console.log(fetchedCountryData);
    } else {
      console.log('not working');
    }

    //set data to state
    // this.setState({ data: fetchedData, country: country });
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCounties(await fetchCountries());
    };

    fetchAPI();
    //second parameter will change only if setFetchedConties is changed
    //allow us to pick different counties
  }, [setFetchedCounties]);
  //   console.log(fetchData('Afghanistan'));
  //   console.log(fetchCountries());

  //   const logInput = (input) => {
  //     console.log(input);
  //   };

  return (
    <FormControl>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value=''>Global</option>
        {fetchedCounties.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
