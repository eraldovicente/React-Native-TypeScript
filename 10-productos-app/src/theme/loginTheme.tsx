import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingVertical: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
    },
    label: {
        marginTop: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'black',
        fontSize: 20
    },
    inputFieldIOS: {
        borderBottomColor: 'black',
        borderStartWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 20,
        color: 'black'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    buttonReturn: {
        position: 'absolute',
        top: 10,
        right: 10,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    }
});