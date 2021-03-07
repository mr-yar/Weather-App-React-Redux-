import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  forecast: {
    cod: 'null',
    message: 0,
    cnt: 0,
    list: [
      {
        dt: 0,
        main: {
          temp: 0,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          sea_level: 0,
          grnd_level: 0,
          humidity: 0,
          temp_kf: 0
        },
        weather: [
          {
            id: 0,
            main: 'null',
            description: 'null',
            icon: 'null'
          }
        ],
        clouds: {all: 0},
        wind: {
          speed: 0,
          deg: 0
        },
        visibility: 0,
        pop: 0,
        sys: {pod: 'null'},
        dt_txt: 'null'
      }
    ],
    city: {
      id: 0,
      name: 'null',
      coord: {
        lat: 0,
        lon: 0
      },
      country: 'null',
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0
    }
  },
  loading: false,
  selectedDay: 0
};

const tableSlice = createSlice({
  name: 'Table',
  initialState,
  reducers: {
    tableLoadAction(state, action) {
      state.loading = true;
    },
    tablePutAction(state, action) {
      state.forecast = action.payload;
      state.selectedDay = 0;
      state.loading = false;
    },
    selectedDay(state, action) {
      state.selectedDay = action.payload;
    }
  }
});

export const {tableLoadAction} = tableSlice.actions;
export const {tablePutAction} = tableSlice.actions;
export const {selectedDay} = tableSlice.actions;
export const tableReducer = tableSlice.reducer;
