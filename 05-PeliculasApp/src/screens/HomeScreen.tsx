import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

     const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
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
                              data={ nowPlaying }
                              renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                              sliderWidth={ windowWidth }
                              itemWidth={ 230 }
                              inactiveSlideOpacity={ 0.9 }
                         />
                    </View>

                    {/* Películas  populares */}
                    <HorizontalSlider title="En cine" movies={ popular } />
                    <HorizontalSlider title="Top Rated" movies={ topRated } />
                    <HorizontalSlider title="UpComing" movies={ upcoming } />

               </View>
          </ScrollView>
     )
}
