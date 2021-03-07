import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Info} from '../Main/Info';
import {Hours} from './Hours/Hours';
import {Days} from './Days/Days';
import {getLocalDate} from '../../common/utils';
import {tableLoadAction} from '../../redux/reducers/tableReducer';
import {RootState} from '../../redux/store';
import {IForecast, IWeather, ListForecast, ListForecastItem} from '../../common/types';
import closeSvg from './svg/close.svg';

export const ForecastTable = ({weather}: {weather: IWeather}): JSX.Element => {
  const dispatch = useDispatch();

  const forecast: IForecast = useSelector(
    (state: RootState) => state.tableReducer.forecast
  );
  const selectedDay: number = useSelector(
    (state: RootState) => state.tableReducer.selectedDay
  );

  useEffect(() => {
    dispatch(tableLoadAction(weather.name));
  }, [weather]);

  if (forecast === null) {
    return <div />;
  }

  function sortList() {
    const forecastList: any = [];
    forecast.list.forEach((item: ListForecast) => {
      const d = new Date(item.dt * 1000);
      const dateTime = getLocalDate(weather.timezone || 0, d);
      const day = dateTime.getDate();
      const time = dateTime.getHours();

      if (!forecastList[day]) {
        forecastList[day] = [];
      }
      forecastList[day].push({
        ...item,
        day,
        time,
        timezone: forecast.city.timezone
      });
    });
    return forecastList.filter((n: ListForecastItem) => n);
  }

  const forecastSorted = sortList();
  return (
    <div className="forecast-table">
      <div className="forecast-header">
        <Info weather={weather} />
        <div className="forecast-close">
          <Link to="/">
            <img src={closeSvg} alt="" className="forecast-closeIcon" />
          </Link>
        </div>
      </div>
      <Hours
        key={forecastSorted[selectedDay].dt}
        forecast={forecastSorted[selectedDay]}
      />
      <Days forecastDays={forecastSorted} timezone={weather.timezone} />
    </div>
  );
};
