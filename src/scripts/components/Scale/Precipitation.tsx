import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/rootReducer';
import weatherCloud from '../../../svg/ic-weather-cloud.svg';
import weatherCloudy from '../../../svg/ic-weather-cloudy.svg';
import weatherDrop from '../../../svg/ic-weather-drop.svg';
import weatherMoon from '../../../svg/ic-weather-moon.svg';
import weatherSnow from '../../../svg/ic-weather-snow.svg';
import weatherSunny from '../../../svg/ic-weather-sunny.svg';
import weatherUmbrella from '../../../svg/ic-weather-umbrella.svg';
import weatherWind from '../../../svg/ic-weather-wind.svg';
import weatherWindStorm from '../../../svg/ic-weather-wind-storm.svg';
import weatherWindStormRain from '../../../svg/ic-weather-wind-storm-rain.svg';

export function Precipitation(): JSX.Element {
  const weather = useSelector(
    (state: RootState) => state.inputReducer.weather
  );

  const precipitationId = weather.weather[0].id;

  function setIcon(id: number) {
    switch (true) {
      case id >= 200 && id < 300:
        if (id < 210 && id >= 230) return weatherWindStormRain;
        return weatherWindStorm;

      case id >= 300 && id < 400:
        if (id >= 310) return weatherDrop;
        return weatherUmbrella;

      case id >= 500 && id < 600:
        if (id === 511) return weatherSnow;
        return weatherDrop;
      case id >= 600 && id < 700:
        return weatherSnow;
      case id >= 700 && id < 800:
        return weatherWind;

      case id === 800:
        if (
          new Date().getHours() <= 6
          || new Date().getHours() >= 20
        ) {
          return weatherMoon;
        }
        return weatherSunny;
      case id > 800:
        if (id >= 803) return weatherCloud;
        return weatherCloudy;

      default:
        return weatherCloudy;
    }
  }

  return (
    <img
      className="scale-value__precipitation"
      alt=""
      src={setIcon(precipitationId)}
    />
  );
}
