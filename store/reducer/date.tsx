import { AnyAction } from 'redux';
import {
  FETCH_DATE,
  FETCH_DATE_SUCCESS,
  UPDATE_DATE,
  UPDATE_DATE_SUCCESS
} from '../types';

const initialState = {
  date: null,
  isLoading: false
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) { 
    case FETCH_DATE_SUCCESS:
      console.log(action.payload, "FETCH_DATE_SUCCESS")
      return {
        ...initialState,
        date: action.payload,
        isLoading: false
      };
      case UPDATE_DATE_SUCCESS:
        console.log(action.payload, "UPDATE_DATE_SUCCESS")
        return {
          ...initialState,
          date: action.payload,
          isLoading: false
        };
    case UPDATE_DATE:
      console.log(action.payload, "UPDATE_DATE")
      return {
        ...initialState,
        isLoading: true
      };
      case FETCH_DATE:
      console.log(action.payload, "FETCH_DATE")
      return {
        ...initialState,
        date: action.payload,
        isLoading: true
      };
    default:
      return state;
  }
};
export interface Interface {
  date: string,
  isLoading: boolean
}
