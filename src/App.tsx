import React from 'react';
import {Input} from './scripts/components/Input';
import {Info} from './scripts/components/Info';
import {Scale} from './scripts/components/Scale/Scale';
import './styles/main.sass';

function App(): JSX.Element {
  return (
    <div className="app">
      <div className="container">
        <Input />
        <Info />
        <Scale />
      </div>
    </div>
  );
}

export default App;
