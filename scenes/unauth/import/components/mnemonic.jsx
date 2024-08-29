import React from 'react';
import { mnemonicWordList } from '@ton/crypto';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { fonts, spacing } from '../../../../assets/styles/custom';
import { authorizeWallet } from '../../../../blockchain/authWallet';
import colors from '../../../../assets/styles/colors';

const Mnemonic = ({ state, setState }) => {

    const { mnemonic, mnemonicError, mnemonicErrors } = state;

    const handleChange = (index, value) => {
        const newMnemonic = [...mnemonic];
        newMnemonic[index] = value;

        const newMnemonicErrors = [...mnemonicErrors];
        newMnemonicErrors[index] = false;

        setState({
            ...state,
            mnemonic: newMnemonic,
            mnemonicErrors: newMnemonicErrors,
            mnemonicError: false,
        });
    };

    const handleBlur = (index) => {
        const trimmedValue = mnemonic[index].trim();
        const isValidWord = trimmedValue === '' || mnemonicWordList.includes(trimmedValue.toLowerCase());
    
        const newMnemonicErrors = [...mnemonicErrors];
        newMnemonicErrors[index] = !isValidWord && trimmedValue !== '';
    
        setState({
            ...state,
            mnemonicErrors: newMnemonicErrors,
        });
    };

    const handleCheck = async () => {
        try {
            const response = await authorizeWallet(mnemonic);

            if (response) {
                setState({
                    ...state,
                    stage: 2,
                });
            }

            if (!response) {
                setState({
                    ...state,
                    mnemonicError: true,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Import a wallet
                </Text>
                <Text style={styles.subtitle}>
                    Enter 24 words from each phrase
                </Text>
                <View style={styles.import}>
                    {mnemonic.map((word, index) => (
                        <View style={styles.importInput} key={index}>
                            <Text style={styles.importInputCount}>{index + 1}</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    mnemonicErrors[index] ? styles.inputError : null
                                ]}
                                enableFocusRing={false}
                                onChangeText={(value) => handleChange(index, value)}
                                onBlur={() => handleBlur(index)}
                                value={word}
                                placeholder="..."
                                keyboardType="default"
                            />
                        </View>
                    ))}
                </View>
    
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={1}
                        onPress={() => handleCheck()}
                    >
                        <Text style={styles.buttonText}>Import wallet</Text>
                    </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 100,
        paddingBottom: 50,

    },

    title: {
        textAlign: 'center',
        fontSize: fonts.large,
        marginBottom: 20,
        fontWeight: '500',
        color: colors.bodyTextColor,
    },

    subtitle: {
        maxWidth: 400,
        lineHeight: spacing.normal,
        fontSize: fonts.normal,
        textAlign: 'center',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 20,
        marginLeft: 'auto',
        color: colors.bodyTextColor,
    },

    import: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    importInput: {
        width: '100%',
        marginBottom: 6,
        position: 'relative',
    },

    importInputCount: {
        fontSize: fonts.normal,
        color: colors.mutedTextColor,
        position: 'absolute',
        left: 15, 
        top: 17,
        zIndex: 9,
    },

    input: {
        height: 60,
        fontSize: fonts.normal,
        paddingLeft: 55,
        paddingVertical: 15,
        backgroundColor: colors.cardBackground,
        borderColor: colors.cardBackground,
        borderWidth: 2,
        borderRadius: 10,
        color: colors.bodyTextColor,
    },

    inputError: {
        borderColor: colors.inputBorderErrorColor,
    },

    button: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: colors.buttonColor,
        cursor: 'pointer',
    },

    buttonText: {
        fontSize: fonts.medium,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 55,
    }
});

export default Mnemonic;