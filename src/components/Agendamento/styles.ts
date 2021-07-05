import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    content: {
        flex: 1
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    category: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        marginRight: 24
    },

    footer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    date: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        color: theme.colors.heading,
        marginLeft: 6
    },
    playersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    players: {
        fontFamily: theme.fonts.text500,
        fontSize: 13,
        color: theme.colors.heading,
        marginLeft: 6
    }


})
