import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import {Hour} from './Hour';
import {IHoursProps, ListForecastItem} from '../../../common/types';

export const Hours = ({forecast}: IHoursProps): JSX.Element => (
  <div className="hours">
    <Scrollbars>
      {forecast.map((item: ListForecastItem) => (
        <Hour key={item.dt} forecastItem={item} />
      ))}
    </Scrollbars>
  </div>
);
