import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sveeton-products.onrender.com';

export const addProduct = createAsyncThunk(
  'autorizationAdmin',
  async (formData, thunkAPI) => {
    console.log('formData', formData);
    try {
      const response = await axios.post(`/super_admin`, formData);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const autorizationAdmin = createAsyncThunk(
  'autorizationAdmin',
  async (formData, thunkAPI) => {
    console.log('formData', formData);
    try {
      const response = await axios.post(`/super_admin`, formData);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'autorizationAdmin',
  async (formData, thunkAPI) => {
    console.log('formData', formData);
    try {
      const response = await axios.post(`/super_admin`, formData);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
