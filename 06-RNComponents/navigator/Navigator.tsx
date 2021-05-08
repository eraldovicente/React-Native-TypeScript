import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../src/screens/HomeScreen';
import { Animation101Screen } from '../src/screens/Animation101Screen';
import { Animation102Screen } from '../src/screens/Animation102Screen';
import { SwitchScreen } from '../src/screens/SwitchScreen';
import { AlertScreen } from '../src/screens/AlertScreen';
import { TextInputScreen } from '../src/screens/TextInputScreen';
import { PullToRefreshScreen } from '../src/screens/PullToRefreshScreen';
import { CustomSectionListScreen } from '../src/screens/CustomSectionListScreen';
import { ModalScreen } from '../src/screens/ModalScreen';
import { InfiniteScrollScreen } from '../src/screens/InfiniteScrollScreen';
import { SlidesScreen } from '../src/screens/SlidesScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
     return (
     <Stack.Navigator
          screenOptions={{
               headerShown: false,
               cardStyle: {
                    backgroundColor: 'white'
               }
          }}          
     >
          <Stack.Screen name="HomeScreen" component={ HomeScreen } />
          <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
          <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
          <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
          <Stack.Screen name="AlertScreen" component={ AlertScreen } />
          <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
          <Stack.Screen name="PullToRefreshScreen" component={ PullToRefreshScreen } />
          <Stack.Screen name="CustomSectionListScreen" component={ CustomSectionListScreen } />
          <Stack.Screen name="ModalScreen" component={ ModalScreen } />
          <Stack.Screen name="InfiniteScrollScreen" component={ InfiniteScrollScreen } />
          <Stack.Screen name="SlidesScreen" component={ SlidesScreen } />
     </Stack.Navigator>
     );
}