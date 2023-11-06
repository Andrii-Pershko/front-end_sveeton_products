import { combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productsReducer } from './products/productsSlice';
import storage from 'redux-persist/lib/storage';
import { adminReducer } from './Admin/adminSlice';
import basketReducer from './basket/basketSlice';

// const persistConfigFavorite = {
//   key: 'favorite',
//   storage,
//   whitelist: ['favorite'],
// };

const persistConfigBasket = {
  key: 'basket',
  storage,
  whitelist: ['basketList'],
};
const persistConfigToken = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const reducer = combineReducers({
  token: persistReducer(persistConfigToken, adminReducer),
  basket: persistReducer(persistConfigBasket, basketReducer),
  products: productsReducer,
  admin: adminReducer,
});
