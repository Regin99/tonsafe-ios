import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { scheme } from '../../../assets/styles/custom';
import Transaction from '../../../components/mapped/transaction';
import Navigation from '../../../components/main/navigation';
import Header from '../../../components/main/header';
import colors from '../../../assets/styles/colors';

const History = () => {

    const historyData = [ {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {} ];

    return (
        <View style={scheme.wallet}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.transactions}>
                    {historyData.map((item, index) => (
                        <Transaction
                            key={index}
                            isLast={index === historyData.length - 1}
                        />
                    ))}
                </View>
            </ScrollView>
            <Navigation />
        </View>
    );
};

const styles = StyleSheet.create({
    transactions: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: colors.cardBackground,
        borderRadius: 15,
    },
});

export default History;