import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
     actor: Cast
}

export const CastItem = ({ actor }: Props) => {

     const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

     return (
          <View style={ styles.container }>
               {
                    actor.profile_path && (
                         <Image
                              source={{ uri }}
                              style={{ width: 45, height: 57, borderRadius: 10, marginTop: 4 }}
                         />
                    )
               }               

               <View style={ styles.actorInfo }>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                         { actor.name }
                    </Text>
                    <Text style={{ fontSize: 15, opacity: 0.7 }}>
                         { actor.character }
                    </Text>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
    container: {
         height: 60,
         flexDirection: 'row',
         borderRadius: 11,
          shadowColor: "white",
          shadowOffset: {
               width: 0,
               height: 10,
          },
          shadowOpacity: 0.24,
          shadowRadius: 7,

          elevation: 4,
          marginRight: 10,
          paddingRight: 20
    },
    actorInfo: {
         marginLeft: 20,
         marginTop: 5
    }
});