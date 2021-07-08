import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        width: '100%',
        height: 234,
        justifyContent: 'flex-end',

    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 28,
        color: theme.colors.heading
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        lineHeight:21,
        color: theme.colors.heading

    },
    members: {
        marginLeft: 24,
        marginTop: 24
    },
    footer: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        marginBottom: getBottomSpace()
    }
})
