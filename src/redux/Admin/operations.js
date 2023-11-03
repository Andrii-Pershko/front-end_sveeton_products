import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//localhost:3001/
//https://sveeton-products.onrender.com
axios.defaults.baseURL = 'http://localhost:3001';
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addProduct = createAsyncThunk(
  'autorizationAdmin',
  async (formData, thunkAPI) => {
    try {
      console.log('Example', formData);
      const response = await axios.post(`/super_admin/add_product`, formData);

      return response.data;
    } catch (e) {
      console.log('error', e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const autorizationAdmin = createAsyncThunk(
  'autorizationAdmin',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`/super_admin`, formData);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'autorizationAdmin',
  async ({ form, id }, thunkAPI) => {
    try {
      const response = await axios.put(`/super_admin/${id}`, form);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'autorizationAdmin',
  async (id, thunkAPI) => {
    try {
      console.log('Example', id);
      const response = await axios.delete(`/super_admin/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
