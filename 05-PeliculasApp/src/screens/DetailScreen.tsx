import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MovieDetails } from '../components/MovieDetails';
import { useMovieDetails } from '../hooks/useMovieDetails';
// import { Movie } from '../interfaces/movieInterface'
import { RootStackParams } from '../navigation/Navigation';



const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( { route }: Props ) => {

     const movie = route.params; 
     const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

     const { isLoading, cast, movieFull } = useMovieDetails( movie.id );
     
     console.log({ cast });
     

     return (

          <ScrollView>
               <View style={ styles.imageContainer }>
                    <View style={ styles.imageBorder }>
                         <Image
                              source={{ uri }}
                              style={ styles.posterImage }
                         />
                    </View>
               </View>

               <View style={ styles.marginContainer }>          
                    <Text style={ styles.subTitle }>{ movie.original_title }</Text>
                    <Text style={ styles.title }>{ movie.title }</Text>
               </View>

               
               {
                    isLoading
                         ? <ActivityIndicator size={ 30 } color="grey" style={{ marginTop: 20 }} />
                         : <MovieDetails movieFull={ movieFull! } cast={ cast } />
               }        
                    
               
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     imageContainer: {
          width: '100%',
          height: screenHeight * 0.7,
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 10,
          },
          shadowOpacity: 0.24,
          shadowRadius: 7,

          elevation: 10,
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25 
     },
     imageBorder: {
          flex: 1,
          overflow: 'hidden',
          borderBottomEndRadius: 25,
          borderBottomStartRadius: 25   
     },
     posterImage: {
          flex: 1
     },
     marginContainer: {
          marginHorizontal: 20,
          marginTop: 20
     },
     subTitle: {
          fontSize: 18
     },
     title: {
          fontSize: 20,
          fontWeight: 'bold'
     }
});
