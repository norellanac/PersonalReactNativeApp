import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

const rootReducer = combineReducers({
  cryptos: cryptoSlice,
  user: userSlice,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
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
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
