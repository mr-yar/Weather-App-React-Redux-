import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {
  inputHandlerAction,
  inputSearchLoadAction
} from '../../redux/reducers/inputReducer';

export function Input(): JSX.Element {
  const dispatch = useDispatch();

  const {inputValue} = useSelector((state: RootState) => state.inputReducer);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    dispatch(inputHandlerAction(value));
  }

  function keyPressInput(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      dispatch(inputSearchLoadAction(inputValue));
      dispatch(inputHandlerAction(''));
    }
  }

  return (
    <div className="input">
      <input
        className="input-text"
        spellCheck="false"
        placeholder="Enter city..."
        onChange={(event) => handleInput(event)}
        onKeyPress={keyPressInput}
        value={inputValue}
      />
    </div>
  );
}
