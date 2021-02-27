import styled from 'styled-components/native'
import { Text, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'

const Height = Dimensions.get('window').height
export const Label = styled.Text`
    color: ${Colors.black};
    font-size: 22px;
    margin-top: ${(props) => props.marginTop ? props.marginTop : 0}px
`
export const LoginInput = styled.TextInput`
    width: 100%;
    margin-top: ${(props) => props.marginTop ? props.marginTop : 0}px
`
export const Content = styled.View`
  align-items: center;
  padding: 16px;
  padding-top: ${Height * 0.1}px;
`
export const Loader = styled.View`
  justify-content: center;
 align-items: center;
  width: 100%;

`
export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`
export const Logo = styled.View`
 width: 75px;
 height: 75px;
 border-radius: 50px;
 background-color: ${Colors.blue};
`
export const SubmitBtn = styled.TouchableOpacity`
 width: 100%;
 height: 50px;
 background-color: ${Colors.black};
 position: absolute;
 bottom: 0;
 flex-direction: row;
 padding-horizontal: 16px;
 flex: 1;
 align-items: center;
justify-content:flex-end
`
export const SubmitBtnText = styled.Text`
 color: ${Colors.white};
 font-size: 15px;
 flex: 0.5
`
export const ErrorMsg = styled.Text`
 color: ${Colors.red};
 font-size:10px;
 alignSelf: flex-start
`
export const SubmitBtnContainer = styled.View`
  flex-direction: row;
  justify-content: space-between
`
export const Arrow = styled.Text`
 color: ${Colors.white};
  
`




