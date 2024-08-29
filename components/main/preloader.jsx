import React from 'react';
import { fonts } from '../../assets/styles/custom';
import { View, Text, StyleSheet } from 'react-native';
import LoaderIcon from '../../assets/images/icons/loader';
import colors from '../../assets/styles/colors';


const Preloader = () => {

    return (
        <View style={styles.preloader}>
            <LoaderIcon />
        </View>
    );
};

const styles = StyleSheet.create({
    preloader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: colors.backgroundColor,
    }
});

export default Preloader;