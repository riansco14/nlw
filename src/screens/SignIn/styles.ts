import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: '100%',
        height: 360
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 40,
        marginBottom: 16,
        textAlign: "center",
        lineHeight: 40,

    },
    subtitle: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 64,
        lineHeight: 25
    }

})
