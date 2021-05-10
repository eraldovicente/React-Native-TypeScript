import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

     const { setDarkTheme, setLightTheme, theme: { colors } } = useContext( ThemeContext );

     return (
          <View style={ styles.globalMargin }>
               <HeaderTitle title="Theme" />

               <View style={{ 
                    flexDirection: 'row', 
                    justifyContent: 'space-between' 
               }}>
                    <TouchableOpacity 
                         onPress={ setLightTheme }
                         activeOpacity={ 0.8 }
                         style={{
                              width: 120,
                              height: 50,
                              borderRadius: 20,
                              backgroundColor: colors.primary,
                              justifyContent: 'center'
                         }}
                    >
                         <Text 
                              style={{ 
                                   color: 'white', 
                                   textAlign: 'center',
                                   fontSize: 16 
                         }}>
                              Light
                         </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                         onPress={ setDarkTheme }
                         activeOpacity={ 0.8 }
                         style={{
                              width: 120,
                              height: 50,
                              borderRadius: 20,
                              backgroundColor: colors.primary,
                              justifyContent: 'center'
                         }}
                    >
                         <Text 
                              style={{ 
                                   color: 'white', 
                                   textAlign: 'center',
                                   fontSize: 16 
                         }}>
                              Dark
                         </Text>
                    </TouchableOpacity>
               </View>

          </View>
     )
}
