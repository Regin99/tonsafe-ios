import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Wallet from '../scenes/auth/wallet';
import History from '../scenes/auth/history';
import Settings from '../scenes/auth/settings';
import Home from '../scenes/unauth/home';
import Import from '../scenes/unauth/import';
import Create from '../scenes/unauth/create';

const Stack = createNativeStackNavigator();

const Routes = () => {

    const { publicKey } = useSelector((state) => state.auth);

    return (
        <Stack.Navigator
            initialRouteName={publicKey ? "Wallet" : "Home"}
            screenOptions={{
                animation: 'none',
                headerShown: false,
            }}
        >
            {publicKey ? (
                <>
                    <Stack.Screen
                        name="Wallet"
                        component={Wallet}
                    />
                    <Stack.Screen
                        name="History"
                        component={History}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="Import"
                        component={Import}
                    />
                    <Stack.Screen
                        name="Create"
                        component={Create}
                    />
                </>
            )}
        </Stack.Navigator>
    );
};

export default Routes;

