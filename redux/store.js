import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import walletReducer from './reducers/walletReducer';

const appReducer = combineReducers({
  auth: authReducer,
  wallet: walletReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
      const { auth } = state;
      state = {
          auth,
      };
  }
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
