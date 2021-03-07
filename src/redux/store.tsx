import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {inputReducer} from './reducers/inputReducer';
import {tableReducer} from './reducers/tableReducer';
import {rootWatcher} from './saga/rootSaga';

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {inputReducer, tableReducer},
  preloadedState,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootWatcher);
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
