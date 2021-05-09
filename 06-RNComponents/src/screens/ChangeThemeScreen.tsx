import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ChangeThemeScreen = () => {

     const { setDarkTheme } = useContext( ThemeContext );

     return (
          <View style={ styles.globalMargin }>
               <HeaderTitle title="Theme" />

               <TouchableOpacity 
                    onPress={ setDarkTheme }
                    activeOpacity={ 0.8 }
                    style={{
                         width: 150,
                         height: 50,
                         borderRadius: 20,
                         backgroundColor: '#5856D6',
                         justifyContent: 'center'
                    }}
               >
                    <Text 
                         style={{ 
                              color: 'white', 
                              textAlign: 'center',
                              fontSize: 16 
                    }}>
                         Light / Dark
                    </Text>
               </TouchableOpacity>
          </View>
     )
}
