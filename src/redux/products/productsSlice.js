import { createSlice } from '@reduxjs/toolkit';
import initialStateProducts from './initialState';
import { getProductList } from './operations';
import { handleFulfilled, handlePending, handleRejected } from './functions';

const productsSlice = createSlice({
  name: 'productList',
  initialState: initialStateProducts,
  extraReducers: builder =>
    builder
      .addCase(getProductList.pending, handlePending)
      .addCase(getProductList.fulfilled, handleFulfilled)
      .addCase(getProductList.rejected, handleRejected),
});

export const productsReducer = productsSlice.reducer;
