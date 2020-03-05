import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../Components/RestaurantDetailScreen';

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Detail"
            headerMode="none"
        >
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}