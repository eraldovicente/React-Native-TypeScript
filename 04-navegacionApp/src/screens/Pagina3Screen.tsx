import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ( { navigation }:Props ) => {
     return (
          <View style={ styles.globalMargin }>
               <Text> Pagina3Screen </Text>

               <Button
                    title="Regresar"
                    onPress={ () => navigation.pop() }
               />

               <Button
                    title="Ir al página 1"
                    onPress={ () => navigation.popToTop() }
               />

          </View>
     )
}
