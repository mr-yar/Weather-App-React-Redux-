import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {Input} from './components/Input';
import {Info} from './components/Info';
import {Scale} from './components/Scale/Scale';
import {setBg} from './components/Scale/setBg';
import './styles/main.sass';

function App(): JSX.Element {
  const weather = useSelector((state: RootState) => state.inputReducer.weather);


  return (
    <div className={setBg(weather)}>
      <div className="container">
        <Input />
        <Info weather={weather} />
        <Scale weather={weather} />
      </div>
    </div>
  );
}

export default App;
