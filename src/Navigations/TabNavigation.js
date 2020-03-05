import React from 'react';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Components/HomeScreen';
import Logout from '../Components/LogoutScreen';
import Detail from './HomeNavigation';


const Tab = createBottomTabNavigator();

export default (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home'
                    } else if (route.name === 'Logout') {
                        iconName = 'restaurant-menu';
                    }
                    return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Detail" component={Detail} />
            <Tab.Screen name="Logout" component={Logout} />
        </Tab.Navigator>
    )
}