import { AnyAction } from 'redux';
import {
  LOG_IN,
  LOG_IN_FAILED,
  LOG_IN_SUCCESS,
  LOG_OUT
} from '../types';
import auth from '@react-native-firebase/auth';

const initialState = {
 
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...initialState,
        isLoading: false
      };
      case LOG_IN_FAILED:
        alert(action.payload)
      return {
        ...initialState,
        isLoading: false

      };
      case LOG_IN:
        return {
          ...initialState,
          isLoading: true
        };
    case LOG_OUT:
      auth().signOut()
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export interface Interface {

}
