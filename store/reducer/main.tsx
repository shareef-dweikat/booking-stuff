import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  error: null,
};
export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'PROMOTION_SUCCESS':
      return {
        ...state,
        isLoading: false,
      }
    case 'PROMOTION_ERROR':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state
      };
  }
};
export interface Interface {
  isLoading: false,
}
