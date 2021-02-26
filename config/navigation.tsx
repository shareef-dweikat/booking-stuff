import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/Home';
import Login from '../components/Login/Login';
import AuthLoading from '../components/Login/Login';
import auth from '@react-native-firebase/auth';
import { View } from 'react-native';

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator
    drawerPosition="right">
    <AppDrawer.Screen
      name="HomeStack"
      component={HomeStackScreen}

    />
  </AppDrawer.Navigator>
);


const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{
        header: () => null
      }}
      name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator >
    <AuthStack.Screen
      options={{
        header: () => null
      }}
      name="Login" component={Login}
    />
  </AuthStack.Navigator>
);

export default () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log(user, "usssss")
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <NavigationContainer>
      {initializing ? (
        <AuthLoading />
      ) : user ? (
        <AppDrawerScreen />
      ) : (
            <AuthStackScreen />
          )}
    </NavigationContainer>
  );
};