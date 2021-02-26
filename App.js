/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import Navigation from './config/navigation'

export default () => {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
};