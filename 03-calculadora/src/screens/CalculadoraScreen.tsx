import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

     const [ numeroAnterior, setNumeroAnterior ] = useState('0');
     const [ numero, setNumero ] = useState('0');

     const limpiar = () => {
          setNumero('0');
     }

     const armarNumero = ( numeroTexto: string ) => {
          setNumero( numero + numeroTexto );
     }

     return (
          <View style={ styles.calculadoraContainer }>
               <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
               <Text 
                    style={ styles.resultado }
                    numberOfLines={ 1 }
                    adjustsFontSizeToFit
               >
                    { numero }
               </Text>

               {/* Fila de botones */}
               <View style={ styles.fila }>

                    {/* Boton */}
                    <BotonCalc texto="C" color="#9B9B9B" accion={ limpiar } />                  
                    <BotonCalc texto="+/-" color="#9B9B9B" accion={ limpiar } />                  
                    <BotonCalc texto="del" color="#9B9B9B" accion={ limpiar } />                  
                    <BotonCalc texto="/" color="#FF9427" accion={ limpiar } />                  
               </View>

               {/* Fila de botones */}
               <View style={ styles.fila }>

                    {/* Boton */}
                    <BotonCalc texto="7" accion={ armarNumero } />                  
                    <BotonCalc texto="8" accion={ armarNumero } />                  
                    <BotonCalc texto="9" accion={ armarNumero } />                  
                    <BotonCalc texto="x" color="#FF9427" accion={ limpiar } />                  
               </View>

               {/* Fila de botones */}
               <View style={ styles.fila }>

                    {/* Boton */}
                    <BotonCalc texto="4" accion={ armarNumero } />                  
                    <BotonCalc texto="5" accion={ armarNumero } />                  
                    <BotonCalc texto="6" accion={ armarNumero } />                  
                    <BotonCalc texto="–" color="#FF9427" accion={ limpiar } />                  
               </View>

               {/* Fila de botones */}
               <View style={ styles.fila }>

                    {/* Boton */}
                    <BotonCalc texto="1" accion={ armarNumero } />                  
                    <BotonCalc texto="2" accion={ armarNumero } />                  
                    <BotonCalc texto="3" accion={ armarNumero } />                  
                    <BotonCalc texto="+" color="#FF9427" accion={ limpiar } />                  
               </View>

               {/* Fila de botones */}
               <View style={ styles.fila }>

                    {/* Boton */}
                    <BotonCalc texto="0" ancho accion={ armarNumero } />                  
                    <BotonCalc texto="." accion={ limpiar } />                   
                    <BotonCalc texto="=" color="#FF9427" accion={ limpiar } />                  
               </View>

          </View>
     )
}
