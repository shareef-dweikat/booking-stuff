import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/Home/Home';
import Login from '../components/Home/Login/Login';
import AuthLoading from '../components/Home/AuthLoading/AuthLoading';

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
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    React.useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
        setUser({});
      }, 500);
    }, []);

    return (
        <NavigationContainer>
            {isLoading ? (
                <AuthLoading />
            ) : user ? (
                <AppDrawerScreen />
            ) : (
                        <AuthStackScreen />
                    )}
        </NavigationContainer>
    );
};