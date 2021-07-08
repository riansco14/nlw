import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        justifyContent: 'flex-start'
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontFamily: theme.fonts.title700 ,
        fontSize: 18,
        color: theme.colors.heading,
        marginBottom: 12
    },
    ownerType: {
        fontFamily: theme.fonts.text500 ,
        fontSize: 13,
        color: theme.colors.highlight,
        marginBottom: 24
    }
})
