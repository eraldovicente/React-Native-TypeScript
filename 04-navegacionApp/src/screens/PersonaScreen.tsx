import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{}

export const PersonaScreen = ( { route, navigation }:Props ) => {

     const params = route.params;

     useEffect( () => {

          navigation.setOptions({
               title: params!.nombre
          })
     }, []);

     return (
          <View style={ styles.globalMargin }>
               <Text style={ styles.titulo }>
                    {
                         JSON.stringify( params, null, 3 )
                    }     
               </Text>
          </View>
     )
}
