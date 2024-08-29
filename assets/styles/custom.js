import { StyleSheet } from "react-native";
import colors from "./colors";

export const fonts = {
    tiny: 13,
    small: 16,
    normal: 18,
    medium: 21,
    large: 23,
    giant: 42,
};

export const spacing = {
    tiny: 19,
    small: 28,
    normal: 32,
    medium: 40,
    large: 45,
    giant: 50,
};

export const elements = {
    borderRadius: 30,
};

export const scheme = StyleSheet.create({
    auth: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
        paddingLeft: 10,
        paddingRight: 10,
    },

    wallet: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        paddingHorizontal: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
});