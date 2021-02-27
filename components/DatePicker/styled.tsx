import React from "react";
import styled from 'styled-components/native'
import Colors from '../../constants/Colors'

export const Container = styled.View`
  background-color: ${Colors.white};
  flex: 1;
  padding-top: 32px
`
export const BtnText = styled.Text`
  color: ${(porps: { active: boolean }) => porps.active ? Colors.blue : Colors.gray}
  font-size: 18px;
  text-decoration: ${(porps: { active: boolean }) => porps.active ? 'underline' : 'none'}
  `
export const BtnRow = styled.View`
  flex-direction: row;
  justify-content: space-around
`

export const Btn = styled.TouchableOpacity`
  align-self: center;
  margin-top: ${(props: {marginTop: number}) => props.marginTop ? props.marginTop : 0}px;
`
export const SubmitBtn = styled.TouchableOpacity`
 width: 100%;
 height: 50px;
 background-color: ${Colors.black};
 position: absolute;
 bottom: 0;
 justify-content: space-around;
 padding-horizontal: 16px;
 flex-direction: row
 align-items: center
`
export const SubmitBtnText = styled.Text`
 color: ${Colors.white};
 font-size: 15px;
  align-self: center
`
export const SubmitBtnContainer = styled.View`

`
