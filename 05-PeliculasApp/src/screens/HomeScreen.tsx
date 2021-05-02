import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

     const { peliculasEnCine, isLoading } = useMovies();
     const { top } = useSafeAreaInsets();

     if ( isLoading ) {
          return (
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="red" size={ 100 } />
               </View>
          )
     }

     return (

          <ScrollView>
               <View style={{ marginTop: top + 20 }}>

                    {/* Carosel Principal */}
                    <View style={{ height: 340 }}>
                         <Carousel
                              data={ peliculasEnCine }
                              renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                              sliderWidth={ windowWidth }
                              itemWidth={ 230 }
                         />
                    </View>

                    {/* Películas  populares */}
                    <View style={{ height: 190 }}>
                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>En cine</Text>
                         <FlatList
                              data={ peliculasEnCine }
                              renderItem={ ({ item }: any) => (
                                   <MoviePoster movie={ item } width={ 120 } height={ 150 } />
                              )}
                              keyExtractor={ (item) => item.id.toString() }
                              horizontal={ true }
                              showsHorizontalScrollIndicator={ false }
                         />
                    </View>
               </View>
          </ScrollView>
     )
}
