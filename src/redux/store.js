import { configureStore } from '@reduxjs/toolkit';
import { middleware, reducer } from './rootReducer';
import persistStore from 'redux-persist/es/persistStore';

const store = configureStore({
  reducer,
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
