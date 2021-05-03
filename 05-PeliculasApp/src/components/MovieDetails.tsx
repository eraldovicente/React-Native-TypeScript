import React from 'react';
import { Text, View } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import { CastItem } from './CastItem';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface Props {
     movieFull: MovieFull,
     cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
     return (
          <>
               {/* Detalles */}
               <View style={{ marginHorizontal: 28 }}>
                    <View style={{ flexDirection: 'row' }}>
                         <Icon
                              name="star-outline"
                              color="grey"
                              size={ 19 }
                         />
                         <Text> { movieFull.vote_average } </Text>

                         <Text
                              ellipsizeMode='tail' 
                              numberOfLines={1}
                         >
                             - { movieFull.genres.map( g => g.name ).join(', ')}
                         </Text>
                    </View>

                    {/* História */}
                    <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                         História
                    </Text>

                    <Text style={{ fontSize: 16 }}>
                         { movieFull.overview }
                    </Text>

                    {/* Presupuesto */}
                    <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold' }}>
                         Presupuesto
                    </Text>
                    <Text style={{ fontSize: 18}}>
                         { currencyFormatter.format( movieFull.budget, { code:'USD' }) }
                    </Text>
               </View>

               {/* Casting */}
               <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ fontSize: 24, marginTop: 10, fontWeight: 'bold', marginHorizontal: 30 }}>
                         Actores
                    </Text>
                    <CastItem actor={ cast[0] } />

               </View>
          </>
     )
}
