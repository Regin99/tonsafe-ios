import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { scheme } from '../../../assets/styles/custom';
import Header from './components/header';
import Tabs from '../../../components/main/tabs';
import Jettons from './components/jettons';
import Navigation from '../../../components/main/navigation';

const Wallet = () => {

    const { address } = useSelector((state) => state.auth);
    const { fetching } = useSelector((state) => state.wallet);

    const dispatch = useDispatch();

    return (
        <View style={scheme.wallet}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Tabs />
                <Jettons />
            </ScrollView>
            <Navigation />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default Wallet;