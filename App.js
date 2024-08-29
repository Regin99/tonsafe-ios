import React from 'react';
import { Buffer } from 'buffer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { useAuthenticate } from './utils/auth';
import useCustomFonts from './fonts.js';
import store from './redux/store';
import Routes from './routes/routes.js';
import Preloader from './components/main/preloader.jsx';

global.Buffer = Buffer;

const MainApp = () => {
    const { fetching } = useSelector((state) => state.auth);

    useCustomFonts();
    useAuthenticate();

    if (fetching) return <Preloader />;

    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
};

const App = () => (
    <Provider store={store}>
        <MainApp />
    </Provider>
);

export default App;
