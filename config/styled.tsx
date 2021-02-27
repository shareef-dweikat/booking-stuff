
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native'
import Colors from '../constants/Colors'
import { useDispatch } from 'react-redux'
import { LOG_OUT } from '../store/types';


export const Label = styled.Text`
  color: ${Colors.black};
  font-size: 22px
`
export const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`
export const Content = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <TouchableOpacity onPress={() => dispatch({type: LOG_OUT})}>
        <Label>Sign out</Label>
      </TouchableOpacity>
    </Container>
  )
}