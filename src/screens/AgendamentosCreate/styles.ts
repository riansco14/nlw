import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        marginTop: 32,
        marginBottom: 12,
        marginLeft: 24
    },
    form: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    fieldData: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleData: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    divider: {
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.highlight,
        marginHorizontal: 6
    },
    descricaoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        marginBottom: 12
    },
    labelDescricao: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
    },
    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },
    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
})
