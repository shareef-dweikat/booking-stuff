import { AnyAction } from 'redux';
import {
  UPDATE_DATE
} from '../types';
import auth from '@react-native-firebase/auth';

const initialState = {
  date: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_DATE:
      console.log(action.payload, "adsdad")
      alert('Date Saved')
      return {
        ...initialState,
        date: action.payload
      };
    default:
      return state;
  }
};
export interface Interface {
  date: null,
}
