import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthData, setAuthFetching } from '../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = async (dispatch) => {
    try {
        const tonsafePublicKey = await AsyncStorage.getItem('tonsafe_active_account');
        if (!tonsafePublicKey) return Promise.resolve();

        const tonsafeAccounts = await AsyncStorage.getItem('tonsafe_accounts');
        if (!tonsafeAccounts) return Promise.resolve();

        const parsedAccounts = JSON.parse(tonsafeAccounts);
        const account = parsedAccounts.find(acc => acc.publicKey === tonsafePublicKey);
        if (!account) return Promise.resolve();

        dispatch(setAuthData({
            address: account.address || null,
            publicKey: account.publicKey || null,
            mnemonic: account.mnemonic || null,
            iv: account.iv || null,
        }));
    } catch (error) {
        console.error('Auth error:', error);
    }
    return Promise.resolve();
};

export const useAuthenticate = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const authenticate = async () => {
            try {
                await Auth(dispatch);
            } finally {
                dispatch(setAuthFetching(false));
            }
        };

        authenticate();
    }, [dispatch]);
};

export default Auth;