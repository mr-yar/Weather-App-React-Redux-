import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {IWeather} from '../../common/types';

export interface InfoProps {
  weather: IWeather;
  temp?: boolean;
}
export function Info({weather, temp}: InfoProps): JSX.Element {
  const isLoading = useSelector((state: RootState) => state.inputReducer.loading);

  if (weather.cod === 0) {
    return (
      <div>
        <h1>Enter city</h1>
      </div>
    );
  }

  if (weather.cod === 404) {
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

  const temperature = Math.floor(weather.main.temp);
  return (
    <div className="info">
      <div className="info-location">
        <span className="city">{city}</span>
        <span className="country">{country}</span>
      </div>
      {temp ? (
        <div className="info-temp">
          {temperature}
          <span>°</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
