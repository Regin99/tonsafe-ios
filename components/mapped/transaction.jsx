import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors.js';
import InIcon from '../../assets/images/icons/in.jsx';
import { fonts } from '../../assets/styles/custom.js';

const Transaction = ({ isLast }) => {
    return (
        <View style={[styles.transaction, isLast && styles.transaction_last]}>
            <View style={styles.icon}>
                <InIcon />
            </View>
            <View style={styles.body}>
                <View style={styles.body_item}>
                    <Text style={styles.name}>
                        Received
                    </Text>
                    <Text style={styles.wallet}>
                        UQBd...AMWq
                    </Text>
                </View>
                <View style={styles.body_item}>
                    <Text style={styles.count}>
                        0.8283 TON
                    </Text>
                    <Text style={styles.time}>
                        Aug 15, 05:01 PM
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    transaction: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.backgroundColor,
    },

    transaction_last: {
        borderBottom: 0,
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
        fontSize: fonts.normal,
        fontFamily: 'GolosRegular',
        fontWeight: '500',
        marginBottom: 8,
        color: colors.bodyTextColor,
    },

    count: {
        fontSize: fonts.normal,
        fontFamily: 'GolosRegular',
        fontWeight: '500',
        textAlign: 'right',
        marginBottom: 8,
        color: colors.bodyTextColor,
    },

    wallet: {
        fontFamily: 'GolosRegular',
        color: colors.mutedTextColor,
    },

    time: {
        fontFamily: 'GolosRegular',
        textAlign: 'right',
        color: colors.mutedTextColor,
    }
});

export default Transaction;