import React from 'react';
import { Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon  from 'react-native-vector-icons/Ionicons';


interface Props {
     movieFull: MovieFull,
     cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
     return (
          <>
               {/* Detalles */}
               <View style={{ marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                         <Icon
                              name="star-outline"
                              color="grey"
                              size={ 19 }
                         />
                         <Text> { movieFull.vote_average } </Text>

                         <Text>
                             - { movieFull.genres.map( g => g.name ).join(', ')}
                         </Text>
                    </View>
               </View>

               {/* Casting */}
          </>
     )
}
