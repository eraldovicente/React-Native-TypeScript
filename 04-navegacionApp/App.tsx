import 'react-native-gesture-handler';
import React from 'react';

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { Tabs } from './src/navigator/Tabs';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App;