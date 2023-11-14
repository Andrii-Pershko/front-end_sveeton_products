import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sveeton-products.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addProduct = createAsyncThunk(
  'addProduct',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`/super_admin/add_product`, formData);

      return response.data;
    } catch (e) {
      console.log('error', e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshAdmin = createAsyncThunk(
  'refreshAdmin',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.admin.token;
    if (persistedToken === null) {
      console.log('persistedToken', persistedToken);
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get(`/super_admin`);
      return response.data;
    } catch (e) {
      console.log(e);
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
  'updateProduct',
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
  'deleteProduct',
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
