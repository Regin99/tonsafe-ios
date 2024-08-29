import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../assets/styles/colors.js';
import SendIcon from '../../assets/images/icons/send.jsx';
import ReceiveIcon from '../../assets/images/icons/receive.jsx';

const Tabs = () => {
    return (
        <View style={styles.tabs}>
            <TouchableOpacity
                style={styles.tab}
                activeOpacity={1}
            >
                <ReceiveIcon
                    color="#fff"
                />
                <Text style={styles.title}>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tab}
                activeOpacity={1}
            >
                <SendIcon
                    color="#fff"
                />
                <Text style={styles.title}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },

    tab: {
        flex: 1,
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.cardBackground,
        borderRadius: 15,
        cursor: 'pointer',
    },

    title: {
        fontFamily: 'GolosRegular',
        fontSize: 13,
        color: colors.mutedTextColor,
    }
});

export default Tabs;