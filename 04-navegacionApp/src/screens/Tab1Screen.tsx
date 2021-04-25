import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Tab1Screen = () => {

     const { top } = useSafeAreaInsets();

     useEffect(() => {
          console.log('Tab1Screen effect');               
     }, [])

     return (
          <View style={{ 
               ...styles.globalMargin,
               marginTop: top + 10
          }}>
               <Text style={ styles.titulo }> Iconos </Text>
               <Text>
                    <Icon name="leaf-outline" size={80} color="#900" />
                    <Icon name="leaf-outline" size={80} color="#900" />
                    <Icon name="leaf-outline" size={80} color="#900" />
                    <Icon name="leaf-outline" size={80} color="#900" />
                    <Icon name="leaf-outline" size={80} color="#900" />
                    <Icon name="leaf-outline" size={80} color="#900" />
               </Text>

          </View>
     )
}
