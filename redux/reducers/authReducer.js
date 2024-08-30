import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fetching: true,
    address: null,
    publicKey: null,
    mnemonic: null,
    currency: 'USD',
    language: 'EN',
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthFetching: (state, action) => {
            state.fetching = action.payload;
        },
        setAuthData: (state, action) => {
            state.address = action.payload.address;
            state.publicKey = action.payload.publicKey;
            state.mnemonic = action.payload.mnemonic;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setAuthFetching, setAuthData, setCurrency, setLanguage, setHeader } = authReducer.actions;

export default authReducer.reducer;