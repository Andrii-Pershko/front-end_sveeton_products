import { configureStore } from '@reduxjs/toolkit';
import { middleware, reducer } from './rootReducer';

const store = configureStore({
  reducer,
  middleware,
});

export default store;
