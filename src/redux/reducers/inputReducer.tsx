import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
  weather: {
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [
      {
        id: 0,
        main: 'null',
        description: 'null',
        icon: 'null'
      }
    ],
    base: 'null',
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    },
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    clouds: {all: 0},
    dt: 0,
    sys: {
      type: 0,
      id: 0,
      country: 'null',
      sunrise: 0,
      sunset: 0
    },
    timezone: 0,
    id: 0,
    name: 'null',
    cod: 0
  },
  loading: false
};

const inputSlice = createSlice({
  name: 'Table',
  initialState,
  reducers: {
    inputHandlerAction(state, action) {
      state.inputValue = action.payload;
    },
    inputSearchLoadAction(state, action) {
      state.loading = true;
    },
    inputSearchPutAction(state, action) {
      state.weather = action.payload;
      state.loading = false;
    }
  }
});

export const {
  inputHandlerAction,
  inputSearchLoadAction,
  inputSearchPutAction
} = inputSlice.actions;
export const inputReducer = inputSlice.reducer;
