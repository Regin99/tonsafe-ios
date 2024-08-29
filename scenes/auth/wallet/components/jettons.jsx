import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../../../assets/styles/colors';
import Jetton from '../../../../components/mapped/jetton';

const Jettons = () => {
    const tonData = [ {} ];
    const jettonsData = [ {}, {}, {}, {} ];

    return (
        <>
            <View style={[styles.jettons, styles.jettons_ton]}>
                {tonData.map((item, index) => (
                    <Jetton
                        key={index}
                        isLast={index === tonData.length - 1}
                    />
                ))}
            </View>
            <View style={styles.jettons}>
                {jettonsData.map((item, index) => (
                    <Jetton
                        key={index}
                        isLast={index === jettonsData.length - 1}
                    />
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    jettons: {
        backgroundColor: colors.cardBackground,
        overflow: 'hidden',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
   
    },

    jettons_ton: {
        marginBottom: 10,
    }
});

export default Jettons;