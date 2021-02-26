import { AnyAction } from 'redux';

const initialState = {
  // user: {},
  // existingNumber: null,
  // isLoading: false,
  // token: null,
  // error: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOGOUT':
      // AsyncStorage.clear();
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
