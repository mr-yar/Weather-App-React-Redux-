import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
  weather: null,
  loading: false
};

const inputSlice = createSlice({
  name: 'INPUT',
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
