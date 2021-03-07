import React from 'react';
import {Precipitation} from '../../Precipitation/Precipitation';
import {dateGetHours, dateGetMinutes, getLocalDate} from '../../../common/utils';
import humidityIcon from '../../Precipitation/svg/ic-weather-drop.svg';
import windIcon from '../../Precipitation/svg/ic-weather-wind.svg';
import {IHourProps} from '../../../common/types';

export const Hour = ({forecastItem}: IHourProps): JSX.Element => {
  const d = new Date(forecastItem.dt * 1000);
  const date = getLocalDate(forecastItem.timezone, d);
  const {humidity} = forecastItem.main;
  const temperature = Math.floor(forecastItem.main.temp);
  const wind = forecastItem.wind.speed;

  return (
    <div className="hour">
      <div className="hour-info">
        <div className="hour-info-precipitation">
          <Precipitation weather={forecastItem} size="6rem" />
        </div>
        <div className="hour-info-text">
          <div className="hour-info-time">
            {dateGetHours(date)}
            :
            {dateGetMinutes(date)}
          </div>
          <div className="hour-info-temp">
            {temperature}
            <span>°</span>
          </div>
        </div>
      </div>
      <div className="hour-details">
        <div className="hour-details-section">
          <img className="hour-details-img" src={humidityIcon} alt="" />
          <div className="hour-details-section-text">
            {humidity}
            %
          </div>
        </div>
        <div className="hour-details-section">
          <img className="hour-details-img" src={windIcon} alt="" />
          <div className="hour-details-section-text">
            {Math.floor(wind)}
            {' '}
            m/s
          </div>
        </div>
      </div>
    </div>
  );
};
