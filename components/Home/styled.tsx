import React, { Component, useEffect } from "react";
import styled from 'styled-components/native'
import { Image, TouchableOpacity, Platform } from 'react-native'
import Colors from '../../constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context';

export const HeaderContainer = styled.View`
  height: 60px;
  justify-content: center;
  padding: 16px;
`
export const Header = ({ navigation }) => (
  <SafeAreaView>
    <HeaderContainer>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image style={{ width: 25, height: 25 }} source={require('../../assets/drawer.png')} />
      </TouchableOpacity>
    </HeaderContainer>
  </SafeAreaView>
)

export const Container = styled.View`
  background-color: ${Colors.blue};
  flex: 1;
`
export const Label = styled.Text`
  color: ${Colors.white};
  font-size: 22px
`
export const Content = styled.View`
 padding: 16px;
 padding-top: ${Platform.OS == 'ios' ? 0 : 16}
`
export const Btn = styled.TouchableOpacity`
 border-radius: 30px;
 background-color: ${Colors.white};
 width: 80px;
 height: 40px;
 justify-content: center;
 align-items: center;
`
export const BtnText = styled.Text`
 color: ${Colors.blue};
 font-size: 18px
`
export const BtnsRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 32px;
`