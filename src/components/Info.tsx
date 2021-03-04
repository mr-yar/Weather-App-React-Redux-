import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export function Info({weather}: any): JSX.Element {
  const isLoading = useSelector(
    (state: RootState) => state.inputReducer.loading
  );
  if (weather === null) {
    return (
      <div>
        <h1>Enter city</h1>
      </div>
    );
  }

  if (weather.cod === '404') {
    return (
      <div>
        <h1>City wasn&apos;t found</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading... Please wait</h1>
      </div>
    );
  }

  const city = weather.name;

  const {country} = weather.sys;

  const {temp} = weather.main;
  return (
    <div className="info">
      <div className="info-location">
        <span className="city">{city}</span>
        <span className="country">{country}</span>
      </div>
      <div className="info-temp">
        {Math.floor(temp)}
        <span>°</span>
      </div>
    </div>
  );
}
