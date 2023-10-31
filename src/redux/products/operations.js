import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sveeton-products.onrender.com';

export const getProductList = createAsyncThunk(
  'productList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/products`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'add_product/',
  async (product, thunkAPI) => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    try {
      const response = await axios.post(`/super_admin/add_product`, {
        product,
        adminData,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'productList',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/super_admin/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
