import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
         flex: 1,
         backgroundColor: 'black',
     },
    calculadoraContainer: {
         flex: 1,
         paddingHorizontal: 20,
         justifyContent: 'flex-end'
    },
    resultado: {
         color: 'white',
         fontSize: 60,
         textAlign: 'right'
    },
    resultadoPequeno: {
         color: 'rgba(255, 255, 255, 0.5)',
         fontSize: 30,
         textAlign: 'right'         
    },
    fila: {
         flexDirection: 'row',
         justifyContent: 'center',
         marginBottom: 18,
         paddingHorizontal: 10 
    },
    boton: {
         height: 70,
         width: 70,
         backgroundColor: '#494949',
         borderRadius: 100,
         justifyContent: 'center',
         marginHorizontal: 3
    },
    botonTexto: {
         textAlign: 'center',
         padding: 10,
         fontSize: 25,
         color: 'white',
         fontWeight: '300'
    }
});