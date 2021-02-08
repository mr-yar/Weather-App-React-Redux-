import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/rootReducer';
import {Precipitation} from './Precipitation';
import {
  dateGetDate,
  dateGetHours,
  dateGetMinutes,
  dateGetMonth,
  dateGetSeconds,
  dateGetYear
} from './date';

export function Scale(): JSX.Element {
  const weather = useSelector(
    (state: RootState) => state.inputReducer.weather
  );

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (weather === null || weather.cod === '404') {
    return <div />;
  }

  return (
    <div className="scale">
      <div className="scale-value">
        <Precipitation />
        <div className="scale-value__date">
          <span>{dateGetDate(date)}</span>
          :
          <span>{dateGetMonth(date)}</span>
          :
          <span>{dateGetYear(date)}</span>
        </div>
        <div className="scale-value__time">
          <span>{dateGetHours(date)}</span>
          :
          <span>{dateGetMinutes(date)}</span>
          :
          <span>{dateGetSeconds(date)}</span>
        </div>
      </div>
    </div>
  );
}
