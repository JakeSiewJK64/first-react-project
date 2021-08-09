import { makeStyles } from "@material-ui/core";
import { StyleSheet } from "react-native";

export const UserStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 500,
    },
    title: {
        fontSize: 50,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        flex: 1,
        padding: 20,
    }
});

export const FlexStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    }
});