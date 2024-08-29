import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import colors from '../../../assets/styles/colors';
import Navigation from '../../../components/main/navigation';
import { scheme } from '../../../assets/styles/custom';
import Header from '../../../components/main/header';

const Settings = () => {
    return (
        <View style={scheme.wallet}>
            <Header />
            <ScrollView>
                <View style={styles.settings}>
                    
                </View>
            </ScrollView>
            <Navigation />
        </View>
    );
};

const styles = StyleSheet.create({
    settings: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: colors.cardBackground,
        borderRadius: 15,
    },
});

export default Settings;