import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductinBasket: (state, action) => {
      state.basketList.push(action.payload);
    },
    deleteProductfromBasket: (state, action) => {
      state.basketList = state.basketList.filter(
        product => product._id !== action.payload._id
      );
    },
  },
});

export const { addProductinBasket, deleteProductfromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
