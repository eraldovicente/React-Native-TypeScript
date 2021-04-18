import React from 'react';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ height: 400 }}>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <DimensionesScreen />
    </SafeAreaView>
  )
}

