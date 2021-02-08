import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/reducers/rootReducer';
import {inputHandler, inputSearch} from '../redux/actions/actions';
import {API_ADRESS, API_KEY} from '../api';

export function Input(): JSX.Element {
  const dispatch = useDispatch();

  const {inputValue} = useSelector(
    (state: RootState) => state.inputReducer
  );

  function apiCitySearch(cityName: string) {
    const url = `https://${API_ADRESS}?q=${cityName}&appid=${API_KEY}&units=metric`;

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(inputSearch(result)));
  }

  function handleInput(event: any) {
    const {value} = event.target;
    dispatch(inputHandler(value));
  }

  function keyPressInput(event: any) {
    if (event.key === 'Enter') {
      apiCitySearch(inputValue);
      dispatch(inputHandler(''));
    }
  }

  return (
    <div className="input">
      <input
        className="input-text"
        // contentEditable="true"
        spellCheck="false"
        placeholder="Enter city..."
        onChange={(event) => handleInput(event)}
        onKeyPress={keyPressInput}
        value={inputValue}
      />
    </div>
  );
}
