import React from 'react';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fonts } from '../../assets/styles/custom.js';
import WalletIcon from '../../assets/images/icons/wallet.jsx';
import HistoryIcon from '../../assets/images/icons/history.jsx';
import SettingsIcon from '../../assets/images/icons/settings.jsx';
import colors from '../../assets/styles/colors.js';

const Navigation = () => {
    const navigation = useNavigation();
    const currentRoute = useNavigationState(state => state.routes[state.index].name);

    const routes = [
        { name: 'Wallet', Icon: WalletIcon, label: 'Wallet' },
        { name: 'History', Icon: HistoryIcon, label: 'History' },
        { name: 'Settings', Icon: SettingsIcon, label: 'Settings' }
    ];

    return (
        <View style={styles.navigation}>
            <View style={styles.navigation_wrapper}>
                <View style={styles.navigation_items}>
                    {routes.map(({ name, Icon, label }) => (
                        <TouchableOpacity
                            key={name}
                            style={styles.navigation_item}
                            activeOpacity={1}
                            onPress={() => navigation.navigate(name)}
                        >
                            <Icon color={currentRoute === name ? colors.mainColor : '#8d9aa9'} />
                            <Text style={{
                                ...styles.navigation_text,
                                color: currentRoute === name ? colors.mainColor : '#8d9aa9'
                            }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.backgroundColor,
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 10,
        width: '100%',
        paddingTop: 0,
        paddingBottom: 20,
    },
    navigation_wrapper: {
        flexDirection: 'column',
        width: '100%',
    },
    navigation_items: {
        height: 80,
        overflow: 'hidden',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    navigation_item: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        cursor: 'pointer',
    },
    navigation_text: {
        fontFamily: 'GolosRegular',
        fontSize: fonts.tiny,
        color: colors.mutedTextColor,
    },
});

export default Navigation;
