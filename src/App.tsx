import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './scripts/redux/reducers/rootReducer';
import {Input} from './scripts/components/Input';
import {Info} from './scripts/components/Info';
import {Scale} from './scripts/components/Scale/Scale';
import {setBg} from './scripts/components/Scale/setBg';
import './styles/main.sass';

function App(): JSX.Element {
  const weather = useSelector(
    (state: RootState) => state.inputReducer.weather
  );


  return (
    <div className={setBg(weather)}>
      <div className="container">
        <Input />
        <Info />
        <Scale />
      </div>
    </div>
  );
}

export default App;
