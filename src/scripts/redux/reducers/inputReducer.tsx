const initialState = {
  inputValue: '',
  weather: null
};

export function inputReducer(state = initialState, action:any) {
  if (action.type === 'INPUT_HANDLER') {
    return {
      ...state,
      inputValue: action.payload
    };
  }
  if (action.type === 'INPUT_SEARCH') {
    return {
      ...state,
      weather: action.payload
    };
  }
  return state;
}
