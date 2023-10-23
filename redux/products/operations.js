import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sveeton-products.onrender.com/products';

export const getProductList = createAsyncThunk(
  'productList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
