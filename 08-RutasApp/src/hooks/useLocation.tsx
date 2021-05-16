import { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interfaces/appInterfaces';

export const useLocation = () => {

     const [ hasLocation, sethasLocation ] = useState( false );
     const [ initialPosition, setInitialPosition ] = useState<Location>({
          latitude: 0,
          longitud: 0
     });
     
     useEffect(() => {
          Geolocation.getCurrentPosition(
               ({ coords }) => {

                    setInitialPosition({
                         latitude: coords.latitude, 
                         longitud: coords.longitude
                    });

                    sethasLocation( true );
               },
               (err) => console.log({ err }), { enableHighAccuracy: true }               
          ); 
     }, []);

     return {
          hasLocation,
          initialPosition
     }
}
