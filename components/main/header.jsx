import React from 'react';
import { fonts } from '../../assets/styles/custom';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import { useNavigationState } from '@react-navigation/native';

const Header = () => {

    const currentRoute = useNavigationState(state => state.routes[state.index].name);

    const getTitle = (currentRoute) => {
        switch (currentRoute) {
            case 'History': return 'History';
            case 'Settings': return 'Settings';
            default: return 'Wallet';
        }
    };

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{getTitle(currentRoute)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 40,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 450,
        width: '100%',
    },

    title: {
        fontFamily: 'GolosSemiBold',
        fontSize: fonts.large,
        fontWeight: '500',
        lineHeight: 80,
        textAlign: 'center',
        color: colors.bodyTextColor,
    },
});

export default Header;