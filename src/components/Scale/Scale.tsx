import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Precipitation} from './Precipitation';
import {
  dateGetDate,
  dateGetHours,
  dateGetMinutes,
  dateGetMonth,
  dateGetSeconds,
  dateGetYear
} from './date';
import {getDateTimeZone} from './setBg';
import {RootState} from '../../redux/store';

export function Scale({weather}: any): JSX.Element {
  const [date, setDate] = useState(new Date());

  const isLoading = useSelector(
    (state: RootState) => state.inputReducer.loading
  );

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (weather !== null && weather.cod !== '404') {
      interval = setInterval(() => {
        setDate(getDateTimeZone(weather.timezone || null));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [weather]);

  if (weather === null || isLoading || weather.cod === '404') {
    return <div />;
  }

  return (
    <div className="scale">
      <div className="scale-value">
        <Precipitation weather={weather} />
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
    </div>
  );
}
