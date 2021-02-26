import { AnyAction } from 'redux';
import {
  LOG_IN_SUCCESS,
  LOG_OUT
} from '../types';
import auth from '@react-native-firebase/auth';

const initialState = {
  // user: {},
  // isLoading: false,
  // token: null,
  // error: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...initialState,
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

// export interface Interface {
//   existingNumber: typeof initialState.existingNumber;
//   user: typeof initialState.user;
// }
