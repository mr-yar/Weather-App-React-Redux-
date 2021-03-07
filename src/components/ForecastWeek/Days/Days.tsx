import React from 'react';
import {useSelector} from 'react-redux';
import {Day} from './Day';
import {RootState} from '../../../redux/store';
import {IDaysProps, IWeather} from '../../../common/types';

export const Days = ({forecastDays, timezone}: IDaysProps): JSX.Element => {
  const selectedDay = useSelector((state: RootState) => state.tableReducer.selectedDay);
  return (
    <div className="days">
      {forecastDays.map((item: IWeather[], index: number) => {
        if (index === selectedDay) {
          return (
            <Day
              forecastDay={item}
              timezone={timezone}
              id={index}
              selected
              key={item[0].dt}
            />
          );
        }
        return <Day forecastDay={item} timezone={timezone} id={index} key={item[0].dt} />;
      })}
    </div>
  );
};
