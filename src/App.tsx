import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {RootState} from './redux/store';
import {Input} from './components/Main/Input';
import {Info} from './components/Main/Info';
import {Scale} from './components/Main/Scale';
import {setBg} from './common/utils';
import {IWeather} from './common/types';
import {ForecastTable} from './components/ForecastWeek/ForecastTable';
import './styles/main.sass';

function App(): JSX.Element {
  const weather: IWeather = useSelector((state: RootState) => state.inputReducer.weather);

  return (
    <Router>
      <div className={setBg(weather)}>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Input />
              <Info temp weather={weather} />
              <Scale weather={weather} />
            </Route>
            <Route exact path="/forecast">
              {weather.cod !== 0 ? <ForecastTable weather={weather} /> : ''}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
