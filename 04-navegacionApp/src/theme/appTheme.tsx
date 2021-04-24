import { StyleSheet } from "react-native";

export const colores = {
     primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
         marginHorizontal: 20
    },
    titulo: {
         fontSize: 30,
         marginBottom: 10
    },
    botonGrande: {
         width: 100,
         height: 100,
         backgroundColor: 'red',
         borderRadius: 20,
         alignItems: 'center',
         justifyContent: 'center',
         margin: 10
    },
    botonGrandeTexto: {
         color: 'white',
         fontSize: 18,
         fontWeight: 'bold',
    },
    avatarContainer: {
         alignItems: 'center',
         marginTop: 10
    },
    avatar: {
         width: 150,
         height: 150,
         borderRadius: 100
    },
    menuContainer: {
         marginVertical: 30,
         marginHorizontal: 50
    },
    menuBoton: {
         marginVertical: 10
    },
    menuTexto: {
         fontSize: 20
    }
});