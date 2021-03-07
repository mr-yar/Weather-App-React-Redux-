import React from 'react';
import {useDispatch} from 'react-redux';
import {dateGetDay, getLocalDate} from '../../../common/utils';
import {Precipitation} from '../../Precipitation/Precipitation';
import {selectedDay} from '../../../redux/reducers/tableReducer';
import {IDayProps} from '../../../common/types';

export const Day = (props: IDayProps): JSX.Element => {
  const dispatch = useDispatch();
  const {selected, forecastDay, timezone, id} = props;
  const d = new Date(forecastDay[0].dt * 1000);
  const date = getLocalDate(timezone, d);
  const temp = Math.floor(forecastDay[0].main.temp);

  function selectDay() {
    dispatch(selectedDay(id));
  }

  return (
    <button
      type="button"
      className={selected ? 'day selected' : 'day'}
      onClick={selectDay}
    >
      <div className="day-precipitation">
        <Precipitation weather={forecastDay[0]} size="5rem" />
      </div>
      <div className="day-info">
        <div className="day-info-dayOfWeek">{dateGetDay(date)}</div>
        <div className="day-info-temp">
          {temp}
          <span>°</span>
        </div>
      </div>
    </button>
  );
};
