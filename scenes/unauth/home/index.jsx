import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fonts, scheme, spacing } from '../../../assets/styles/custom';
import AddIcon from '../../../assets/images/icons/add';
import colors from '../../../assets/styles/colors';
import TonsafeLogo from '../../../assets/logo/tonsafe';


const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={scheme.auth}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <TonsafeLogo />
                </View>
                <Text style={styles.title}>
                    Welcome to Tonsafe Wallet
                </Text>
                <Text style={styles.subtitle}>
                    Safely store cryptocurrency, make transfers in the TON blockchain using Tonsafe Wallet
                </Text>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.buttonItem}
                        activeOpacity={1}
                        onPress={() => navigation.navigate('Create')}
                    >
                        <View style={styles.buttonIcon}>
                            <AddIcon />
                        </View>
                        <View style={styles.buttonBody}>
                            <Text style={styles.buttonTitle}>
                                Create a new wallet
                            </Text>
                            <Text style={styles.buttonDescription}>
                                Generate a new wallet and get the keyword
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonItem}
                        activeOpacity={1}
                        onPress={() => navigation.navigate('Import')}
                    >
                        <View style={styles.buttonIcon}>
                            <AddIcon />
                        </View>
                        <View style={styles.buttonBody}>
                            <Text style={styles.buttonTitle}>
                                Import a wallet
                            </Text>
                            <Text style={styles.buttonDescription}>
                                Import a wallet with 24 secret words
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50,
        paddingBottom: 50,
    },

    logo: {
        width: 80,
        height: 80,
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 20,
        marginLeft: 'auto',
    },

    title: {
        fontFamily: 'GolosRegular',
        textAlign: 'center',
        fontSize: fonts.large,
        marginBottom: 20,
        fontWeight: '500',
        color: colors.bodyTextColor, 
    },

    subtitle: {
        fontFamily: 'GolosRegular',
        fontSize: fonts.small,
        lineHeight: spacing.small,
        maxWidth: 400,
        textAlign: 'center',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 40,
        marginLeft: 'auto',
        color: colors.bodyTextColor, 
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10,
    },

    buttonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.buttonLarge,
        width: '100%',
        gap: 20,
        borderRadius: 15,
        padding: 20,
        cursor: 'pointer',
    },

    buttonIcon: {
        width: 50,
        height: 50,
    },

    buttonBody: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '100%',
    },

    buttonTitle: {
        fontFamily: 'GolosRegular',
        fontSize: fonts.normal,
        marginBottom: 5,
        color: colors.bodyTextColor, 
    },

    buttonDescription: {
        fontFamily: 'GolosRegular',
        lineHeight: spacing.small,
        fontSize: fonts.small,
        color: colors.mutedTextColor,
    },
});

export default Home;