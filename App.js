import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useAuthenticate } from './utils/auth';
import useCustomFonts from './fonts.js';
import Routes from './routes/routes.js';
import Preloader from './components/main/preloader.jsx';


const App = () => {
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

export default App;
