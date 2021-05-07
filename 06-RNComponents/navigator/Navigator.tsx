import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../src/screens/HomeScreen';
import { Animation101Screen } from '../src/screens/Animation101Screen';
import { Animation102Screen } from '../src/screens/Animation102Screen';
import { SwitchScreen } from '../src/screens/SwitchScreen';
import { AlertScreen } from '../src/screens/AlertScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
     return (
     <Stack.Navigator
          screenOptions={{
               headerShown: false
          }}          
     >
          <Stack.Screen name="HomeScreen" component={ HomeScreen } />
          <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
          <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
          <Stack.Screen name="SwitchScreen" component={  SwitchScreen  } />
          <Stack.Screen name="AlertScreen" component={  AlertScreen  } />
     </Stack.Navigator>
     );
}