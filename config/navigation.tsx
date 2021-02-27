import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/Home/Home';
import Login from '../components/Login/Login';
import AuthLoading from '../components/Login/Login';
import auth from '@react-native-firebase/auth';
import DatePicker from '../components/DatePicker/DatePicker';
import TimePicker from '../components/TimePicker/TimePicker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux'
import { fetchDate } from '../store/action/date';
import { Container, Content, Label } from './styled'
import { TouchableOpacity } from 'react-native';

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
    <AppDrawer.Navigator
      drawerContent={() =>
        <Container>
          <TouchableOpacity onPress={() => auth().signOut()}>
            <Label>Sign out</Label>
          </TouchableOpacity>
        </Container>
      }
      drawerPosition="right">
      <AppDrawer.Screen
        name="HomeStack"
        component={HomeStackScreen}

      />

    </AppDrawer.Navigator>
  )



const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{
        header: () => null
      }}
      name="Home" component={HomeScreen} />
    <HomeStack.Screen

      name="DatePicker" component={DatePicker} />
    <HomeStack.Screen
      name="TimePicker" component={TimePicker} />

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
  const dispatch = useDispatch()
  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(fetchDate())
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {initializing ? (
          <AuthLoading />
        ) : user ? (
          <AppDrawerScreen />
        ) : (
              <AuthStackScreen />
            )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};