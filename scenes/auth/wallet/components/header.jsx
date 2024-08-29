import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../../assets/styles/custom';
import colors from '../../../../assets/styles/colors';

const Header = () => {

    return (
        <View style={styles.header}>
            <View style={styles.header_container}>
                <Text style={styles.header_balance}>134 932 ₽</Text>
                <Text style={styles.header_address}>UQDF...Q1ry</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        marginBottom: 30,
    },
    header_container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        paddingTop: 80,
        paddingBottom: 30,
        paddingLeft: 25,
        paddingRight: 25,
    },
    header_balance: {
        fontFamily: 'GolosSemibold',
        fontSize: fonts.giant,
        color: colors.bodyTextColor,
        fontWeight: '500',
        marginBottom: 10,
        textAlign: 'center',
    },
    header_address: {
        fontFamily: 'GolosRegular',
        fontSize: fonts.normal,
        color: colors.mutedTextColor,
        textAlign: 'center',
    },
});

export default Header;