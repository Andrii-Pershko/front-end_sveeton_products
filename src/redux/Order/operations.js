import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//localhost:3001/
//https://sveeton-products.onrender.com
axios.defaults.baseURL = 'http://localhost:3001';

export const newOrder = createAsyncThunk(
  'order',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`/order`, formData);

      return response.data;
    } catch (e) {
      console.log('error', e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
