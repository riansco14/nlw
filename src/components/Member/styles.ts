import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        flexDirection: 'row'
    },
    imageContainer: {

    },
    image: {
        width: 48,
        height: 48, 
    },
    membroContent: {
        flex: 1
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginRight: 8
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    }

})
