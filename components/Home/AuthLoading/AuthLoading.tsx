import React, { useEffect } from 'react';
import { Container } from './styled';
import { ActivityIndicator } from 'react-native';
// import { useDispatch } from 'react-redux';
// import AsyncStorage from '@react-native-community/async-storage';
// import { setTokens } from '../../store/action/auth';
export default () => (
  <Container>
    {/* <SafeView forceInset={{ top: 'always' }}> */}
    <ActivityIndicator color="white" />
    {/* </SafeView> */}
  </Container>
);
