import {combineReducers} from 'redux';

import {inputReducer} from './inputReducer';

export const rootReducer = combineReducers({inputReducer});
export type RootState = ReturnType<typeof rootReducer>;
