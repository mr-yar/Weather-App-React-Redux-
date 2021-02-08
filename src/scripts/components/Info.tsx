import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '../redux/reducers/rootReducer';

export function Info(): JSX.Element {
  const weather = useSelector(
    (state: RootState) => state.inputReducer.weather
  );

  if (weather === null || weather.cod === '404') {
    return (
      <div>
        <h1>City wasn&apos;t found</h1>
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
