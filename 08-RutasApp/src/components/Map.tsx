import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../pages/LoadingScreen';
import { Fab } from './Fab';

interface Props {
     markers?: Marker[];
}

export const Map = ({ markers }: Props) => {

     const { hasLocation, initialPosition, getCurrentLocation  } = useLocation();

     const mapViewRef = useRef<MapView>();

     const centerPosition = async() => {

          const { latitude, longitude } = await getCurrentLocation();

          mapViewRef.current?.animateCamera({
               center: { latitude, longitude }
          })
     }

     if ( !hasLocation ) {

          return <LoadingScreen />          
     }

     return (
          <>
               <MapView
                    ref={ ( el ) => mapViewRef.current = el! }
                    style={{ flex: 1 }}
                    // provider={ PROVIDER_GOOGLE }
                    showsUserLocation
                    initialRegion={{
                         latitude: initialPosition.latitude,
                         longitude: initialPosition.longitude,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                    }}
               >
                    {/* <Marker
                         image={ require('../assets/custom-marker.png') }
                         coordinate={{
                              latitude: 37.78825,
                              longitude: -122.4324
                         }}
                         title="Esto es un título"
                         description="Esto es una descripción del marcador"                  
                    /> */}
               </MapView>

               <Fab
                    iconName="compass-outline"
                    onPress={ centerPosition }
                    style={{
                         position: 'absolute',
                         bottom: 20,
                         right: 10
                    }}
               />
          </>
     )
}
