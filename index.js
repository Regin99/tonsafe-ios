// import registerRootComponent from 'expo/build/launch/registerRootComponent';
// import App from './App';
// registerRootComponent(App);



import React from 'react';
import { Provider } from 'react-redux';
import { registerRootComponent } from 'expo';
import { Buffer } from 'buffer';
import store from './redux/store';
import App from './App';

global.Buffer = Buffer;

const RootComponent = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

registerRootComponent(RootComponent);