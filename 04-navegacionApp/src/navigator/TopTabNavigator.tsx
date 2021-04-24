import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { ChatScreen } from '../screens/ChatScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatScreen" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}