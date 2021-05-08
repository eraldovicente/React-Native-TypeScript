import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

export const ModalScreen = () => {

     const [ isVisible, setIsVisible ] = useState(false);

     return (
          <View>
               <HeaderTitle title="Modal Screen" />

               <Button
                    title="Abrir modal"
                    onPress={ () => setIsVisible( true ) }
               />

               <Modal
                    animationType="fade"
                    visible={ isVisible }
                    transparent
               >
                    {/* Backgroud negro */}
                    <View style={{
                         flex: 1,
                         // height: 100,
                         // width: 100,
                         backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                         {/* Contenido del modal */} 
                         <View style={{
                              backgroundColor: 'white'
                         }}>
                              <HeaderTitle title="Modal" />
                              <Text>Cuerpo del modal</Text>
                              <Button 
                                   title="Cerrar"
                                   onPress={ () => setIsVisible( false ) }
                              />
                         </View>

                    </View>
               </Modal>
          </View>
     )
}
