import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Precipitation} from '../Precipitation/Precipitation';
import {
  dateGetDate,
  dateGetHours,
  dateGetMinutes,
  dateGetMonth,
  dateGetSeconds,
  dateGetYear,
  getLocalDate
} from '../../common/utils';
import {RootState} from '../../redux/store';
import {IWeather} from '../../common/types';

export function Scale({weather}: {weather: IWeather}): JSX.Element {
  const [date, setDate] = useState(new Date());

  const isLoading = useSelector((state: RootState) => state.inputReducer.loading);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (weather.cod !== 0 && weather.cod !== 404) {
      interval = setInterval(() => {
        const d = new Date();
        setDate(getLocalDate(weather.timezone || 0, d));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [weather]);

  if (weather.cod === 0 || isLoading || weather.cod === 404) {
    return <div />;
  }

  return (
    <div className="scale">
      <div className="scale-value">
        <Precipitation weather={weather} size="4rem" />
        <div className="scale-value__date">
          <span>
            {dateGetDate(date)}
            {' '}
          </span>
          <span>
            {dateGetMonth(date)}
            {' '}
          </span>
          <span>
            {dateGetYear(date)}
            {' '}
          </span>
        </div>
        <div className="scale-value__time">
          <span>{dateGetHours(date)}</span>
          <div>:</div>
          <span>{dateGetMinutes(date)}</span>
          <div>:</div>
          <span>{dateGetSeconds(date)}</span>
        </div>
      </div>
      <Link to="/forecast">
        <button type="button" className="scale-button">
          Подробный прогноз
        </button>
      </Link>
    </div>
  );
}
