import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.brand,
    },
    iconWrapper: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.line,
    },
    icon: {
        width: 24,
        height: 18,

    },
    content: {
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'


    },
    subtitle: {
    }

})