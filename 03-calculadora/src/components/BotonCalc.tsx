import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
     texto: string;
     color?: string;
}

export const BotonCalc = ( { texto, color = '#494949' }: Props ) => {
     return (
          <View style={{ 
               ...styles.boton,
               backgroundColor: color
          }}>
               <Text style={ styles.botonTexto }>{ texto }</Text>
          </View> 
     )
}
