import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//localhost:3001/
//https://sveeton-products.onrender.com
axios.defaults.baseURL = 'https://sveeton-products.onrender.com';

export const newOrder = createAsyncThunk(
  'order',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`/order`, {
        name: 'Урааа',
        phone: '0679543102',
        price: '100 000 грн',
      });

      return response.data;
    } catch (e) {
      console.log('error', e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
