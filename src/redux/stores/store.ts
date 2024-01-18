import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../../services/cryptoApi';

import userSlice from './../slices/userSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import cryptoSlice from '../slices/cryptoSlice';
export const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
    user: userSlice,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cryptoApi.middleware);

    return middlewares;
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
