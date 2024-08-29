import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TonLogo from '../../assets/logo/ton.jsx';
import colors from '../../assets/styles/colors.js';
import { fonts } from '../../assets/styles/custom.js';

const Jetton = ({ isLast }) => {
    return (
        <View style={[styles.jetton, isLast && styles.jetton_no_border]}>
            <View style={styles.icon}>
                <TonLogo />
            </View>
            <View style={styles.body}>
                <View style={styles.body_item}>
                    <Text style={styles.name}>
                        Toncoin
                    </Text>
                    <Text style={styles.rate}>
                        500 ₽
                    </Text>
                </View>
                <View style={styles.body_item}>
                    <Text style={styles.count}>
                        12
                    </Text>
                    <Text style={styles.amount}>
                        62 ₽
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    jetton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.backgroundColor,
    },

    jetton_no_border: {
        borderBottomWidth: 0,
    },

    icon: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    
    body: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    
    name: {
        fontFamily: 'GolosRegular',
        fontSize: fonts.normal,
        fontWeight: '500',
        marginBottom: 8,
        color: colors.bodyTextColor,
    },

    count: {
        fontFamily: 'GolosRegular',
        fontWeight: '500',
        textAlign: 'right',
        marginBottom: 8,
        color: colors.bodyTextColor,
    },

    rate: {
        fontFamily: 'GolosRegular',
        color: colors.mutedTextColor,
    },

    amount: {
        fontFamily: 'GolosRegular',
        textAlign: 'right',
        color: colors.mutedTextColor,
    }
});

export default Jetton;