import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { authorizeWallet } from '../../blockchain/authWallet';
import { fonts } from '../../assets/styles/custom';
import LottieView from 'lottie-react-native';
import KeyAnimation from '../../assets/images/stickers/key.json';
import colors from '../../assets/styles/colors';

const Password = ({ state, setState }) => {

    const { mnemonic, password, rePassword, passwordError, rePasswordError } = state;

    const handleChange = (name, value) => {
        setState((prevState) => ({
          ...prevState,
          [name]: value,
          ...(name === 'password' && { passwordError: false }),
          ...(name === 'rePassword' && { rePasswordError: false }),
        }));
    };

    const handleBlur = (name) => {
        if (name === 'password' && password.length < 6) {
            setState((prevState) => ({
                ...prevState,
                passwordError: true,
            }));
        }
        if (name === 'rePassword' && password !== rePassword) {
            setState((prevState) => ({
                ...prevState,
                rePasswordError: true,
            }));
        }
    };

    const handleSubmit = async () => {
        if (password.length < 6) {
            setState((prevState) => ({
                ...prevState,
                passwordError: true
            }));
            return;
        }

        if (password !== rePassword) {
            setState((prevState) => ({
                ...prevState,
                rePasswordError: true
            }));
            return;
        }
      
        try {
            const response = await authorizeWallet(mnemonic, password);
      
        //   await AsyncStorage.setItem('tonsafe_active_account', response.publicKey);
      
        //   const existingAccounts = JSON.parse(await AsyncStorage.getItem('tonsafe_accounts')) || [];
        //   const updatedAccounts = [...existingAccounts, response];
      
        //   await AsyncStorage.setItem('tonsafe_accounts', JSON.stringify(updatedAccounts));
      
        //   dispatch({ type: 'RESET' });
        //   dispatch(setAuthData(response));
        //   dispatch(setRoute('Wallet'));
        } catch (error) {
            console.error(error);
        }
      };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Come up with a password
            </Text>
            <LottieView
                source={KeyAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        passwordError ? styles.inputError : null
                    ]}
                    enableFocusRing={false}
                    onChangeText={(value) => handleChange('password', value)}
                    onBlur={() => handleBlur('password')}
                    value={password}
                    placeholder="Enter the password"
                    keyboardType="default"
                    secureTextEntry={true}
                />
                <TextInput
                    style={[
                        styles.input,
                        rePasswordError ? styles.inputError : null
                    ]}
                    enableFocusRing={false}
                    onChangeText={(value) => handleChange('rePassword', value)}
                    onBlur={() => handleBlur('rePassword')}
                    value={rePassword}
                    placeholder="Repeat the password"
                    keyboardType="default"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={1}
                onPress={() => handleSubmit()}
            >
                <Text style={styles.buttonText}>Import wallet</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50,
        paddingBottom: 50,
    },

    title: {
        textAlign: 'center',
        fontSize: fonts.large,
        marginBottom: 30,
        fontWeight: '500',
        color: colors.bodyTextColor,
    },

    animation: {
        width: 160,
        height: 160,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30,
    },

    inputContainer : {
        marginBottom: 40,
    },

    input: {
        height: 60,
        fontSize: fonts.normal,
        paddingLeft: 20,
        paddingVertical: 15,
        backgroundColor: colors.cardBackground,
        borderColor: colors.cardBackground,
        borderWidth: 2,
        borderRadius: 10,
        color: colors.bodyTextColor,
        marginBottom: 6,
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

export default Password;