import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme'
const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

     const { width } = useWindowDimensions();

     return (
     <Drawer.Navigator
          drawerType={ width >= 768 ? "permanent" : "front" }
          drawerContent={ (props) => <MenuInterno { ...props } /> }
     >
          <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
          <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
     </Drawer.Navigator>
     );
}

const MenuInterno = ( props: DrawerContentComponentProps<DrawerContentOptions> ) => {
     
     return (
          <DrawerContentScrollView>
               <View style={ styles.avatarContainer }>
                    <Image
                         source={{
                              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                         }}
                         style={ styles.avatar }
                    />
               </View>
          </DrawerContentScrollView>
     )
}