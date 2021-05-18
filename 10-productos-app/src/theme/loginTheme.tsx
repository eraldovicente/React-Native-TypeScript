import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingVertical: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'white',
        fontSize: 20
    },
    inputFieldIOS: {
        borderBottomColor: 'white',
        borderStartWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    }
});