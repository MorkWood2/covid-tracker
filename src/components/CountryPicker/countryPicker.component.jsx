import React, { useState, useEffect } from 'react';
import {
  NativeSelect,
  FormControl,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import styles from './countryPicker.styles.scss';

import { fetchCountries } from '../../api';

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    background: 'linear-gradient(115deg, #ff79aa, #b743ff)',
    boxShadow: '0 5px 20px -2px rgba(200, 50, 150, 0.7)',
    color: 'whitesmoke',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
    },
  },
}))(InputBase);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

const CountryPicker = ({ handleCountryChange }) => {
  //  state, modified state
  const [fetchedCounties, setFetchedCounties] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCounties(await fetchCountries());
    };

    fetchAPI();
    //second parameter will change only if setFetchedConties is changed
    //allow us to pick different counties
  }, [setFetchedCounties]);

  return (
    <MuiThemeProvider theme={theme}>
      <FormControl className={styles.FormControl}>
        <NativeSelect
          defaultValue=''
          onChange={(e) => handleCountryChange(e.target.value)}
          input={<BootstrapInput />}
        >
          <option value=''>Global</option>

          {fetchedCounties.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </MuiThemeProvider>
  );
};

export default CountryPicker;
