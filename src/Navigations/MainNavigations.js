import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Components/LoginScreen';
import TabNav from '../Navigations/TabNavigation';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode='none'>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="tabMenu" component={TabNav} />
        </Stack.Navigator>
    )
}
