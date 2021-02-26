import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/Home/Home';
import Login from '../components/Home/Login/Login';
import AuthLoading from '../components/Home/AuthLoading/AuthLoading';
import auth from '@react-native-firebase/auth';

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerPosition="right">
    <AppDrawer.Screen
      name="HomeStack"
      component={HomeStackScreen}
    //   options={{
    //     gestureEnabled: false,
    //   }}
    />
  </AppDrawer.Navigator>
);


const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
);

export default () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [user, setUser] = useState(null);

    // React.useEffect(() => {
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     setUser({});
    //   }, 500);
    // }, []);

     // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    // console.log(user, "usssss")
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