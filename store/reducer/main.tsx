import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  error: null,
};
export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
 
    default:
      return {
        ...state
      };
  }
};
export interface Interface {
  isLoading: false,
}
