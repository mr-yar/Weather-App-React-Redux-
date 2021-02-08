export function inputHandler(value: string): Record<string, any> {
  return {type: 'INPUT_HANDLER', payload: value};
}
export function inputSearch(value: string): Record<string, any> {
  return {type: 'INPUT_SEARCH', payload: value};
}
