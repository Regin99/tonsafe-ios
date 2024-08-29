import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fetching: true,
    balance: {
        USD: null,
        RUB: null,
    },
    ton: null,
    jettons: [],
};

const walletReducer = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setWalletFetching: (state, action) => {
            state.fetching = action.payload;
        },
        setWalletData: (state, action) => {
            state.ton = action.payload.ton;
            state.jettons = action.payload.jettons;
            state.balance = action.payload.balance;
        },
    },
});

export const { setWalletFetching, setWalletData } = walletReducer.actions;

export default walletReducer.reducer;